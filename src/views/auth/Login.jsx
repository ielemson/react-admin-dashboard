import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { loginUser, reset } from '../../features/auth/authSlice';
import toast from 'react-hot-toast';
export default function Login() {
  // const userJson = JSON.parse(localStorage.getItem("user"))
  // console.log(userJson.api_token)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const userJson = JSON.parse(localStorage.getItem("user"))
  // const notify = () => toast('Here is your toast.');
  const notify_error = (data) => toast.error(`${data}`);
  // const notify_success = (data) => toast.success(`${data}`);
  
  const { user, isError, isSuccess, message,isLoading } = useSelector(
      (state) => state.auth
    )
      
    useEffect(() => {
      
      if(isError){
        if (Array.isArray(message)) {
            message.forEach(error => {
          notify_error(error)
      });
        } else if(message.error){
          notify_error(message.error)
        }else{
          notify_error('Server Error')
        }
      
      // console.log(Array.isArray(message))
      }

      if(isSuccess || user ){
        // navigate('/admin/dashboard')
        window.location.href="/admin/dashboard"
      }

      dispatch(reset())
      // console.log(userJson.api_token)
    }, [user, isError, isSuccess, message,navigate,dispatch])
    
 

  const onFormSubmit = (data) =>{
      dispatch(loginUser(data))
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                                    <button 
                                        className="bg-white active:bg-gray-50 text-gray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button">
                                       <AiFillGithub className="text-lg mr-1"/>

                                        Github
                                    </button>
                                    <button className="bg-white active:bg-gray-50 text-gray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        {/* <img alt="..." className="w-5 mr-1"
                                            src={'../../assets/img/google.svg'}/> */}
                                            <FcGoogle className="text-lg mr-1"/>

                                        Google
                                    </button>
                                </div>
                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)} >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register('email', { required: "Email is required" } )}
                    />
                       <span className=' text-red-500 font-bold text-sm'>{errors?.email && errors.email.message}</span>
                    
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      {...register('password', { required: "Password is required" } )}
                    />
                       <span className=' text-red-500 font-bold text-sm'>{errors?.password && errors.password.message}</span>
                    
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                  {
                                      isLoading ? 
                                      (   
                                         <button className="bg-gray-800 disabled text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">  
                                      <div className="absolute ">
                                      <div className="w-4 h-4  border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                                      </div> Processing...
                                      </button>
                                      
                                      ):(   
                                         <button className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">  
                                         Login Account
                                        </button>)
                                    }
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link
                  to="/auth/forgotpassword"
              
                  className="text-gray-200"
                >
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-gray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
