// import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({
    redirectPath = '/',
    children
}) => {

    // const {check} = useSelector((state) => (state.check))
    const token = localStorage.getItem('token')

    if(!token) {
   
        return <Navigate to={redirectPath}
            replace/>;
    } else {
        return children ? children : <Outlet/>;
    }

};

export default ProtectedRoute
