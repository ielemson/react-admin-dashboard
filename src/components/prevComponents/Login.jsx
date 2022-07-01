import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
            <div className="flex items-center flex-wrap gap-12 lg:gap-0">


            <div className="p-6 sm:p-16 w-6/12 mx-auto">
                                        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to your account</h2>
                                        <form action="" className="space-y-8">
                                            <div className="space-y-2">
                                                <label for="email" className="text-gray-700">Email</label>
                                                <input type="email" name="email" id="email" className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                                focus:ring-2 focus:ring-sky-300 focus:outline-none
                                                invalid:ring-2 invalid:ring-red-400"/>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label for="pwd" className="text-gray-700">Password</label>
                                                    <button className="p-2 -mr-2" type="reset">
                                                        <span className="text-sm text-sky-500">Forgot your password ?</span>
                                                    </button>
                                                </div>
                                                <input type="password" name="pwd" id="pwd" className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                                focus:ring-2 focus:ring-sky-300 focus:outline-none
                                                invalid:ring-2 invalid:ring-red-400"/>
                                            </div>

                                            <button type="submit" className="w-full py-3 px-6 rounded-md bg-sky-600
                                                    focus:bg-sky-700 active:bg-sky-500">
                                                <span className="text-white">Continue</span>
                                            </button>

                                            <p className="border-t pt-6 text-sm">
                                                Don't have an account ?
                                                <Link to="/register" className="text-sky-500"> Sign up</Link>
                                            </p>
                                        </form>
                                    </div>

            </div>
        </div>

    );
};

export default Login;
