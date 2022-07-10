import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {getUser} from "../../features/user/userSlice";
import {useForm} from "react-hook-form";
import api from "../../api/api";


const CreateUser = ()=> {
    const dispatch = useDispatch()
    const {register, setValue, handleSubmit, formState: {
            errors,
            isSubmitting
        }} = useForm();
   
    const {user, isLoading} = useSelector((state) => state.user)
    const contact = {
        ...user.contactinfo
    }
    // console.log(contact)
    const onFormSubmit = async (data) => {

        try {
            const url = "/user/update";
            await api.post(url, data);
            dispatch(getUser())
        } catch (error) {}

    }
    // get user
    // React.useEffect(() => {
    //     dispatch(getUser())
    // }, [])

    return (
        <> {
            user && <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                            Settings
                        </button>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {
                    isLoading ? (
                        <>
                            <div className="flex items-center justify-center h-28 w-28 mx-auto">
                                <button type="button" className="flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing
                                </button>
                            </div>
                        </>
                    ) : (
                        <form onSubmit={
                            handleSubmit(onFormSubmit)
                        }>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Username
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Username" {...register('username', { required: "Username is required" } )} {...setValue('username',user.username)}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. username && errors.username.message
                                        }</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Email address
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('email',user.email)} {...register('email', { required: "Email is required" } )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. email && errors.email.message
                                        }</span>
                                    </div>
                                </div>
                                <div className="w-full  px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Full Name
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('fullname',user.fullname)} {...register('fullname', { required: "Your name is required" } )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. fullname && errors.fullname.message
                                        }</span>
                                    </div>
                                </div>
                                    </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-address">
                                            Address
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('address',contact.address)} {...register('address', { required:false} )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. address && errors.address.message
                                        }</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-city">
                                            City
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('city',contact.city)} {...register('city', { required: false} )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. city && errors.city.message
                                        }</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Country
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('country',contact.country)} {...register('country', { required: false } )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. country && errors.country.message
                                        }</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-postal-code">
                                            Postal Code
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('postcode',contact.postcode)} {...register('postcode', { required: false} )}/>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. postcode && errors.postcode.message
                                        }</span>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                About Me
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            About me
                                        </label>
                                        <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...setValue('aboutme',contact.aboutme)} rows="4" {...register('aboutme', { required: false } )}></textarea>
                                        <span className=' text-red-500 font-bold text-sm'>
                                            {
                                            errors ?. aboutme && errors.aboutme.message
                                        }</span>
                                    </div>
                                </div>
                                <button disabled={isSubmitting} className="flex bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
                                    
                                   {isSubmitting &&  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>}
                                    Update User
                                </button>
                            </div>
                        </form>
                    )
                } </div>
            </div>
        } </>
    );
}

export default CreateUser;