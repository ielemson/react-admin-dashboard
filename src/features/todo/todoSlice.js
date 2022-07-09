import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
  todos:      [],
  isError:   false,
  isSuccess: false,
  isLoading: false,
  message:   "",
};

//Get Current User

export const getTodos = createAsyncThunk("user/todos", async (thunkAPI) => {
  try {
    return await todoService.getTodos();
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


export const todoSlice = createSlice({
  name: "todos",
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
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.todos = action.payload);
      })
      .addCase(getTodos.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload),
          (state.todos = []);
      })

  },
});
export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
