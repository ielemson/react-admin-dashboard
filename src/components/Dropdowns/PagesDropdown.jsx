import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import {useSelector } from 'react-redux';
// import { logoutUser, reset } from '../../features/auth/authSlice';

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user } = useSelector(
  //   (state) => state.user
  // )
  const {check} = useSelector((state)=>state.check)
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const Logout = ()=>{
    dispatch(logoutUser());
    dispatch(reset());
    navigate('/auth/login')
  }
  return (
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
         <i className="lg:text-blueGray-200 text-blueGray-400 far fa-user text-lg leading-lg mr-2" />{" "}
      Account
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
      {
      check !== false  && <>
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
   
        </span>
        <Link
          to="/user/dashboard"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Dashboard
        </Link>
        <Link
          to="/admin/settings"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Settings
        </Link>
      
        
          </>}

       {check === false && 
       <>
          <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Auth Layout
        </span>
        <Link
          to="/auth/login"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Register
        </Link>
       </>
       }
      
       {
         check !== false  &&  
        <>
         <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
         <button
         onClick={Logout}
         type="button"
         className={
           "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
         }
       >
         <i className="fas fa-arrow-alt-circle-right"></i>  Logout
       </button>
        </>
       }
       
      </div>
    </>
  );
};

export default PagesDropdown;
