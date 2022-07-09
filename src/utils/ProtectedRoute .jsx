// import {useSelector} from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import { getTodos } from '../features/todo/todoSlice';
import { getCurUSer } from '../features/user/curUserSlice';
import { getUsers } from '../features/user/usersSlice';

const ProtectedRoute = ({
    redirectPath = '/',
    children
}) => {

    // const {check} = useSelector((state) => (state.check))
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getCurUSer())
        dispatch(getUsers())
        dispatch(getTodos())
    },[])
    if(!token) {
   
        return <Navigate to={redirectPath}
            replace/>;
    } else {
        return children ? children : <Outlet/>;
    }

};

export default ProtectedRoute
