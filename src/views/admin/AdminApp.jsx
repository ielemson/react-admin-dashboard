import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import {Outlet} from "react-router-dom";
import {authCheck} from '../../features/user/authCheckSlice';
import {useDispatch} from 'react-redux';

const AdminApp = () => {

    const dispatch = useDispatch()
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
