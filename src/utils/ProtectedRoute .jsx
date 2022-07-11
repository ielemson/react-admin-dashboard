// import {useSelector} from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import { getAllTodos, getTodos } from '../features/todo/todoSlice';
import { authCheck } from '../features/user/authCheckSlice';
import { getCurUSer } from '../features/user/curUserSlice';
import { getUser } from '../features/user/userSlice';
import { getUsers } from '../features/user/usersSlice';
import { getAllVisitors } from '../features/visitors/visitorsSlice';

const ProtectedRoute = ({
    redirectPath = '/',
    children
}) => {

    // const {check} = useSelector((state) => (state.check))
    const token = JSON.parse(localStorage.getItem('token'))
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getCurUSer())
        dispatch(getUser())
        dispatch(getUsers())
        dispatch(getTodos())
        dispatch(authCheck())
        dispatch(getAllTodos())
        dispatch(getAllVisitors())
    },[])
    if(!token) {
   
        return <Navigate to={redirectPath}
            replace/>;
    } else {
        return children ? children : <Outlet/>;
    }

};

export default ProtectedRoute
