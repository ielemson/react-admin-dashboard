import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get User from localstirage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Register User
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message = error.response.data.errors;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login User
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const message =
        error.response.data.errors ||
        error.response.data ||
        error.response.status ||
        error.response.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout user

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    try {
      return await authService.logout(user);
    } catch (error) {
      const message =
        error.response.data.errors ||
        error.response.data ||
        error.response.status ||
        error.response.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (email, thunkAPI) => {
    try {
      return await authService.resetPassword(email);
    } catch (error) {
      const message =
        error.response.data.errors ||
        error.response.data ||
        error.response.status ||
        error.response.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "auth/update-password",
  async (password, thunkAPI) => {
    try {
      return await authService.updatePassword(password);
    } catch (error) {
      const message =
        error.response.data.errors ||
        error.response.data ||
        error.response.status ||
        error.response.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = "");
    },
    clean: (state) => {
      ( state.user = null);
      (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = "");
        
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.user = action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload),
          (state.user = null);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.user = action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload),
          (state.user = null);
      })
      // Logout user
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state,action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload

      })
// password reset request
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
      })

      .addCase(resetPassword.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.user = null),
          (state.message = action.payload);
      })
      // password update
      .addCase(updatePassword.pending, (state) => {
        (state.isLoading = true)
      })
      .addCase(updatePassword.fulfilled, (state,action) => {
        (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = true),
        (state.user = null),
        (state.message = action.payload);
      })
      .addCase(updatePassword.rejected, (state,action) => {
        (state.isLoading = false),
        (state.isError = true),
        (state.message = action.payload);
      })

  },
});
export const { reset,clean } = authSlice.actions;
export default authSlice.reducer;
