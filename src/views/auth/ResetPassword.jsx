import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import toast, {Toaster} from 'react-hot-toast';
import {AiOutlineWarning} from "react-icons/ai";
import {useNavigate, useParams, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {updatePassword, reset} from '../../features/auth/authSlice';
import axios from 'axios';
const api = "https://api.oxiltravel.com/api";
const endpoint = "confirm-reset-token"
// const update_endpoint = "/update-password"


const ResetPassword = () => {

    const notify_error = (data) => toast.error(`${data}`);
    const notify_success = (data) => toast.success(`${data}`);
    const [tokenStatus, setTokenStatus] = React.useState(null)
    const dispatch = useDispatch()
    const {isError, isSuccess, message, isLoading} = useSelector((state) => state.auth)
    const [email, setEmail] = useState(null);
    let {token} = useParams();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {
            errors
        }} = useForm();

    const apiCall = () => {

        axios.get(`${api}/${endpoint}/${token}`).then(response => {
            setTokenStatus(response.data.token_status)
            setEmail(response.data.useremail)
        }).catch(error => {

            if (error.response.status === 404) {
                notify_error(error.response.data.message)
                // console.log(error.response.data.message)

            } else {

                error.response.data.errors.forEach(error => {
                    notify_error(error)
                });
            }

            // console.log(error.response)
        });
    }

    React.useEffect(() => {
        if (token && token !== "") 
            apiCall()

            if(isError){
               
                if (Array.isArray(message)) {
                    message.forEach(error => {
                  notify_error(error)
              });
                } else {
                  notify_error(message)
                }
            }
        if (isSuccess) {
            notify_success(message.status)
            console.log(message)
            navigate('/auth/login')
        }
    }, [
        isError,
        isSuccess,
        message,
        navigate,
        dispatch
    ])

    const onFormSubmit = (data) => {
         
        const userData = {
            email,
            ...data
        }
        
        dispatch(updatePassword(userData))
    }

    return (
        <div> {
            tokenStatus === true ? (
                <>
                    <div className=" mx-auto px-4 h-full p-[7.6rem]">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h6 className="text-gray-500 text-sm font-bold">
                                                Enter your email to reset password
                                            </h6>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-gray-300"/>
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                        <form onSubmit={
                                            handleSubmit(onFormSubmit)
                                        }>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    New Password
                                                </label>
                                                <input type="password" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="New Password" {...register('password',{required:"Password required"})}/>
                                                <span className='text-red-500 text-sm'>
                                                    {
                                                    errors ?. password && errors.password.message
                                                }</span>

                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Password Confirmation
                                                </label>
                                                <input type="password" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" {...register('password_confirmation',{required:"Confirmation"})}/>
                                                <span className=' text-red-500 text-sm'>
                                                    {
                                                    errors ?. password_confirmation && errors.password_confirmation.message
                                                }</span>

                                            </div>

                                            <div className="text-center mt-6">
                                                {
                                                isLoading ? (
                                                    <button className="bg-gray-800 disabled text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                        <div className="absolute ">
                                                            <div className="w-4 h-4  border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                                                        </div>
                                                        Processing...
                                                    </button>

                                                ) : (
                                                    <button className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">
                                                        Reset Password
                                                    </button>
                                                )
                                            } </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Toaster position="top-right"
                        reverseOrder={false}/>
                </>
            ) : tokenStatus === false ? (

                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">

                    <h2 className="text-2xl mb-5 text-gray-900 font-bold md:text-4xl text-center mt-32">Reset Your Password</h2>

                    <div id="alert-additional-content-4" className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
                        <div className="flex items-center">
                            {/* <svg className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
</svg> */}
                            <AiOutlineWarning/>
                            <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">This is a warning alert</h3>
                        </div>
                        <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                            The token provided is not valid. Please use the forgot password link below to request a new password reset.
                        </div>
                        <div className="flex">
                            <Link to="/forgot-password" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">

                                Reset Password
                            </Link>
                            <Link to="/" className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                                Home
                            </Link>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">

                    <h2 className="text-2xl mb-5 text-gray-900 font-bold md:text-4xl text-center mt-32">Reset Your Password</h2>

                    <div id="alert-additional-content-4" className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
                        <div className="flex items-center">
                            {/* <svg className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
</svg> */}
                            <AiOutlineWarning/>
                            <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">This is a warning alert</h3>
                        </div>
                        <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                            The token provided is not valid. Please use the forgot password link below to request a new password reset.
                        </div>
                        <div className="flex">
                            <Link to="/forgot-password" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">

                                Reset Password
                            </Link>
                            <Link to="/" className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                                Home
                            </Link>
                        </div>
                    </div>

                </div>
            )
        } </div>
    )
}

export default ResetPassword
