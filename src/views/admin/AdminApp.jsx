import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import {Outlet} from "react-router-dom";
import {authCheck} from '../../features/user/authCheckSlice';
import {useDispatch, useSelector} from 'react-redux';

const AdminApp = () => {

    const dispatch = useDispatch()
    const { check} = useSelector((state)=>state.check)
    // console.log(check)
    React.useEffect(() => {
        dispatch(authCheck())
    }, [])

    return (
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
    );
};

export default AdminApp;
