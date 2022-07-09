import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice"
import authReducer from "../features/auth/authSlice" 
import userReducer from "../features/user/userSlice" 
import usersReducer from "./user/usersSlice";
import authCheckReducer from "./user/authCheckSlice";
import curUserReducer from "./user/curUserSlice"
import todoReducer from "./todo/todoSlice";


const store = configureStore({
    reducer:{
        products:productReducer,
        auth:authReducer,
        curUser:curUserReducer,
        user:userReducer,
        users:usersReducer,
        check:authCheckReducer,
        todos:todoReducer
    }
})

export default store