import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import visitorsService from "./visitorsService";

const initialState = {
  visitors:      [],
  isError:   false,
  isSuccess: false,
  isLoading: false,
  message:   "",
};



export const getAllVisitors = createAsyncThunk("visitors/all", async (thunkAPI) => {
  try {
    return await visitorsService.getAllVisitors();
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


export const visitorsSlice = createSlice({
  name: "visitors",
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
      // all Todos
      .addCase(getAllVisitors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllVisitors.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.visitors = action.payload);
      })
      .addCase(getAllVisitors.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload),
          (state.visitors = []);
      })

  },
});
export const { reset } = visitorsSlice.actions;
export default visitorsSlice.reducer;
