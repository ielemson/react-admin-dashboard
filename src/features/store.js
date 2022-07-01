import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice"
import authReducer from "../features/auth/authSlice" 
import userReducer from "../features/user/userSlice" 
import usersReducer from "./user/usersSlice";
import authCheckReducer from "./user/authCheckSlice";

const store = configureStore({
    reducer:{
        products:productReducer,
        auth:authReducer,
        user:userReducer,
        users:usersReducer,
        check:authCheckReducer
    }
})

export default store