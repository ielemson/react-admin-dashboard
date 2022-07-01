import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { registerUser,reset } from '../features/auth/authSlice';

const Register = () => {
    // const [formData,setFormaData] = useState({
    //     fullname:'',email:'',username:'',password:'',password_confirmation:''})
        // const {fullname,username,email,password,password_confirmation} = formData;
        
        const { register, handleSubmit, formState: { errors } } = useForm();
        const navigate = useNavigate();
        const dispatch = useDispatch()
        const userJson = JSON.parse(localStorage.getItem("user"))
        const { user, isLoading, isError, isSuccess, message } = useSelector(
            (state) => state.auth
          )
            
          useEffect(() => {
            
            if(isError){
                console.log(isError)
            }
            if(isSuccess || user ){
                navigate('/')
            }

            dispatch(reset())
            console.log(userJson)
          }, [user, isError, isSuccess, message,navigate,dispatch])
          
       
        const onFormSubmit = (data) =>{
            dispatch(registerUser(data))
        }
    return (
        <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7 ">
            <div className="md:w-1/2 mx-auto">
         
                <form className="space-y-4 text-gray-700 mx-auto md:max-w-full shadow-lg p-12 rounded-sm" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            {/* <label className="block mb-1" htmlFor="formGridCode_card">Full Name</label> */}
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="fullname" name="fullname"  {...register('fullname', { required: "Full Name is required" } )} placeholder="Full name"/>
                            <span className=' text-red-500 font-bold text-sm'>{errors?.fullname && errors.fullname.message}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full px-2 md:w-1/2">
                            {/* <label className="block mb-1" htmlFor="formGridCode_name">Email</label> */}
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="email" id="email" name="email" {...register('email', { required: "Email is required" } )} placeholder="Email"/>
                            <span className=' text-red-500 font-bold text-sm'>{errors?.email && errors.email.message}</span>
                        </div>
                        <div className="w-full px-2 md:w-1/2">
                            {/* <label className="block mb-1" htmlFor="formGridCode_last">User name</label> */}
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="username" name="username" {...register('username', { required: "User Name is required" } )}  placeholder="Username"/>
                            <span className=' text-red-500 font-bold text-sm'>{errors?.username && errors.username.message}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full px-2 md:w-1/2">
                            {/* <label className="block mb-1" htmlFor="formGridCode_name">Password</label> */}
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="password" id="password" name='password' {...register('password', { required: "Password is required" } )}  placeholder="Password"/>
                            <span className=' text-red-500 font-bold text-sm'>{errors?.password && errors.password.message}</span>
                        </div>
                        <div className="w-full px-2 md:w-1/2">
                            {/* <label className="block mb-1" htmlFor="formGridCode_last">Confirm Password</label> */}
                            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="password" id="password_confirmation" name='password_confirmation' {...register('password_confirmation', { required: "Confirm Password" } )}  placeholder="Confirm Password"/>
                            <span className=' text-red-500 font-bold text-sm'>{errors?.password_confirmation && errors.password_confirmation.message}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <button type="submit" className="w-full py-3 px-6 rounded-md bg-sky-600
                                focus:bg-sky-700 active:bg-sky-500">
                            <span className="text-white">Register</span>
                        </button>

                        <p className="border-t pt-6 text-sm">
                            Do you have an account ?
                            &nbsp;
                            <Link to={'/login'}

                                className="text-sky-500">
                                Login
                                </Link>
                        </p>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Register;
