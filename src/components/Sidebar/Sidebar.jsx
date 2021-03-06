/*eslint-disable*/
import React from "react";
import {Link,useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../features/auth/authSlice';
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";


export default function Sidebar() {

    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const role = JSON.parse(localStorage.getItem('role'))

    const Logout = () => {
        dispatch(logoutUser());
        // localStorage.clear()
        navigate('/auth/login')
        }
   
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button"
                        onClick={
                            () => setCollapseShow("bg-white m-2 py-3 px-6")
                    }>
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" to="/">
                        Notus React
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <NotificationDropdown/>
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown/>
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div className={
                        "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow
                    }>
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" to="/">
                                        Notus React
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={
                                            () => setCollapseShow("hidden")
                                    }>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input type="text" placeholder="Search" className="border-0 px-3 py-2 h-12  border-solid  border-gray-500 placeholder-gray-300 text-gray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"/>
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full"/> {/* Heading */}
                        <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Admin Menu
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf("/user/dashboard") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to="/user/dashboard">
                                    <i className={
                                        "fas fa-tv mr-2 text-sm " + (
                                        window.location.href.indexOf("/user/dashboard") !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                    Dashboard
                                </Link>
                            </li>


                            <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf("/admin/users") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to="/admin/users">
                                    <i className={
                                        "fas fa-users mr-2 text-sm " + (
                                        window.location.href.indexOf("/admin/users") !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                    Users
                                </Link>
                            </li>
                            {
                                    role == "admin" &&   
                                    
                                    <li className="items-center">
                                    <Link className={
                                            "text-xs uppercase py-3 font-bold block " + (
                                            window.location.href.indexOf("/admin/visitors") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                        )
                                        }
                                        to="/admin/visitors">
                                        <i className={
                                            "fas fa-users mr-2 text-sm " + (
                                            window.location.href.indexOf("/admin/visitors") !== -1 ? "opacity-75" : "text-gray-300"
                                        )
                                        }></i>
                                        {" "}
                                        Visitors
                                    </Link>
                                </li>
                            }

                            {
                                    role == "admin" &&   
                                    
                                    <li className="items-center">
                                    <Link className={
                                            "text-xs uppercase py-3 font-bold block " + (
                                            window.location.href.indexOf("/admin/roles") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                        )
                                        }
                                        to="/admin/roles">
                                        <i className={
                                            "fas fa-users mr-2 text-sm " + (
                                            window.location.href.indexOf("/admin/roles") !== -1 ? "opacity-75" : "text-gray-300"
                                        )
                                        }></i>
                                        {" "}
                                        Roles/Permissions
                                    </Link>
                                </li>
                            }

                               {/*
                               Animate loader
                               <div className="p-5 flex space-x-3">
                                   <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
                                </div> */}
                                            
                        
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full"/> {/* Heading */}
                        <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                           User Menu
                        </h6>
                        {/* Navigation */}

                        {
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 cursor-pointer font-bold">
                          {/* <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf("/user/profile") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to="/user/profile">
                                    <i className={
                                        "fas fa-user mr-2 text-sm " + (
                                        window.location.href.indexOf("/user/profile") !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                    Profile
                                </Link>
                            </li> */}

                            
                    <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf("/user/settings") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to="/user/settings">
                                    <i className={
                                        "fas fa-tools mr-2 text-sm " + (
                                        window.location.href.indexOf("/user/settings") !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                    Settings
                                </Link>
                            </li>
                        <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf('user/todo') !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to="/user/todo">
                                    <i className={
                                        "fas fa-tasks mr-2 text-sm " + (
                                        window.location.href.indexOf(`user/todo`) !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                    Todo List
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf('user/langugage/translate') !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to="/user/langugage/translate">
                                    <i className={
                                        "fas fa-tasks mr-2 text-sm " + (
                                        window.location.href.indexOf("user/langugage/translate") !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                Language Translator
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link className={
                                        "text-xs uppercase py-3 font-bold block " + (
                                        window.location.href.indexOf('user/quiz/settings') !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-gray-700 hover:text-gray-500"
                                    )
                                    }
                                    to={`/user/quiz/settings`}>
                                    <i className={
                                        "fas fa-tasks mr-2 text-sm " + (
                                        window.location.href.indexOf(`user/quiz/settings`) !== -1 ? "opacity-75" : "text-gray-300"
                                    )
                                    }></i>
                                    {" "}
                                    Take Quiz
                                </Link>
                            </li>
 
                            </ul>
                           }
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full"/> {/* Heading */}
                        <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Auth Menu
                        </h6>
                        {/* Navigation */}

                        
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 cursor-pointer font-bold">
                            <li className="items-center">
                                <b    
                                    onClick={Logout}
                                    className="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold block"
                                   
                                >
                                    <i className="fas fa-fingerprint text-gray-400 mr-2 text-sm"></i>
                                    {" "}
                                    Logout
                                </b>
                            </li>
 
                            </ul>
                           

                    </div>
                </div>
            </nav>
        </>
    );
}
