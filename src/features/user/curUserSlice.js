import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  curUser:      {},
  isError:   false,
  isSuccess: false,
  isLoading: false,
  message:   "",
};

//Get Current User

export const getCurUSer = createAsyncThunk("user/current", async (thunkAPI) => {
  try {
    return await userService.getCurUSer();
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


export const curUserSlice = createSlice({
  name: "curUser",
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
      .addCase(getCurUSer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurUSer.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.curUser = action.payload);
      })
      .addCase(getCurUSer.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload),
          (state.curUser = {});
      })

  },
});
export const { reset } = curUserSlice.actions;
export default curUserSlice.reducer;
