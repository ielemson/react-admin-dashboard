import React, {useEffect} from 'react'
import {useForm} from "react-hook-form";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword, reset} from '../../features/auth/authSlice';
// const endpoint = "/reset-password"


const ForgotPassword = () => {

    const notify_error = (data) => toast.error(`${data}`);
    const notify_success = (data) => toast.success(`${data}`);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {isError, isSuccess, message, isLoading} = useSelector((state) => state.auth)
    const {register, handleSubmit, formState: {
            errors
        }} = useForm();


    useEffect(() => {

      if(isError){
        console.log(message)
        if (Array.isArray(message)) {
            message.forEach(error => {
          notify_error(error.message)
      });
        } else {
          notify_error(message.message)
        }
    }
    if (isSuccess) {
      notify_success(message.message)
    }

        dispatch(reset())
        // console.log(userJson.api_token)
    }, [

        isError,
        isSuccess,
        message,
        navigate,
        dispatch
    ])

    const onFormSubmit = (email) => {
        dispatch(resetPassword(email))
    }

    return (
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
                                            Email
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" {...register('email', { required: "Email is required",   pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                            } } )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. email && errors.email.message
                                        }</span>

                                    </div>

                                    <div className="text-center mt-6">
                                        {
                                        isLoading ? (
                                            <button disabled className="bg-gray-800 cursor-wait text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                <div className="absolute ">
                                                    <div className="w-4 h-4  border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                                                </div>
                                                Processing...
                                            </button>

                                        ) : (
                                            <button disabled={isLoading} className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">
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
        </>
    )
}

export default ForgotPassword
