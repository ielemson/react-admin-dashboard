import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../../../api/api";
// import http from "../../api/http";
import img from "../../../../assets/img/team-2-800x800.jpg"

export default function CardProfile({user}) {

  const [file, setFile] = React.useState("");
  // const {user} = useSelector((state) => state.user)
  const contact = {...user.contactinfo}
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    // const token = JSON.parse(localStorage.getItem('token'))
    const formData = new FormData();
    formData.append("file", data.file[0]);

    try {
        await api.post('/user/upload',formData)
    } catch (error) {
      console.log(error)
    }
  };

  // console.log(watch('img'))
useEffect(()=>{
if(file){
  document.getElementById('btnUpload').click()
}
},[file])
  return (
    <>
     {user &&  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
              
                <img
                  alt="..."
                  src={ file ? URL.createObjectURL(file) : img }
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              
              
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
              
                <div className="formInput">
                  <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="file" className="cursor-pointer bg-lightBlue-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">
                                   upload picture
                                </label>
                                    <input type="file" id="file"
                                   {...register('file',{ required: true })}
                                  onChange={e => {
                                     setFile(e.target.files[0])
                                    }}
                                    className="hidden"
                                  />
                                  <button type="submit" id="btnUpload" className="hidden"> Submit </button>
                                  </form>
                            </div>                            
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
              {user.fullname}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold capitalize">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
             {contact.address} <br /> {contact.city}, {contact.country} {contact.postcode}
            </div>
            {/* <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div> */}
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="mb-4 leading-relaxed text-blueGray-700">
                {contact.aboutme}
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}
