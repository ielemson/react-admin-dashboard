import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  users:      [],
  isError:   false,
  isSuccess: false,
  isLoading: false,
  message:   "",
};

//Get Current User

export const getUsers = createAsyncThunk("auth/users", async (thunkAPI) => {
  try {
    return await userService.getUsers();
  } catch (error) {
    const message =
      error.response.data.errors ||
      error.response.data ||
      error.response.status ||
      error.response||
      error.response.error;
    return thunkAPI.rejectWithValue(message);
  }
});

// delete user
export const deleteUser = createAsyncThunk("auth/destroy", async (id,thunkAPI) => {
  try {
    return await userService.deleteUser(id);
  } catch (error) {
    const message =
      error.response.data.errors ||
      error.response.data ||
      error.response.status ||
      error.response||
      error.response.error;
    return thunkAPI.rejectWithValue(message);
  }
});


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = "");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.users = action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload),
          (state.users = []);
      })
      .addCase(deleteUser.pending, (state) => {
        (state.isLoading = true)
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.users = action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        (state.isLoading = false),
        (state.isError = true),
        (state.message = action.payload),
        (state.users = action.payload);
      })
     
  },
});
export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
