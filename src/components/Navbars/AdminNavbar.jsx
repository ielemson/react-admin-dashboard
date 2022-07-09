import React from "react";
import toast from "react-hot-toast";
// import {useNavigate} from "react-router-dom";
import { clean } from '../../features/auth/authSlice';
// import { authCheck } from "../../features/user/authCheckSlice";
import {  useSelector } from "react-redux";
// import axios from "axios";


const Navbar = () => {
    const notify_error = (data) => toast.error(`${data}`);
    // const navigate = useNavigate();
    // const dispatch = useDispatch()
    const {check} = useSelector((state)=>state.check)
    // console.log("From Admin Navbar" + check)
 
    // // check if token is valid
    // React.useEffect(() => {
    //     dispatch(authCheck())
    // }, [])
    return (
        <> {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a className="text-white text-sm uppercase hidden lg:inline-block font-semibold" href="#pablo"
                        onClick={
                            (e) => e.preventDefault()
                    }>
                        Dashboard
                    </a>
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
<div className="relative flex w-full flex-wrap items-stretch">
<span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
<i className="fas fa-search"></i>
</span>
<input
type="text"
placeholder="Search here..."
className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
/>
</div>
</form>
                    {/* User */}
                    {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
<UserDropdown />
</ul> */}
   {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
<NotificationDropdown />
</ul>  */}

</div>
            </nav>
            {/* End Navbar */} </>
    );
}

export default Navbar;
