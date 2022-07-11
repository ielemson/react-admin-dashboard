import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice"
import authReducer from "../features/auth/authSlice" 
import userReducer from "../features/user/userSlice" 
import usersReducer from "./user/usersSlice";
import authCheckReducer from "./user/authCheckSlice";
import curUserReducer from "./user/curUserSlice"
import todoReducer from "./todo/todoSlice";
import visitorsReducer from "./visitors/visitorsSlice";
// configure store for central state access
const store = configureStore({
    reducer:{
        products:productReducer,
        auth:authReducer,
        curUser:curUserReducer,
        user:userReducer,
        users:usersReducer,
        check:authCheckReducer,
        todos:todoReducer,
        visitors:visitorsReducer
    }
})

export default store