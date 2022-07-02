import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import Img from "../../assets/img/team-2-800x800.jpg"


export default function CardProfile() {

  const [file, setFile] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const {user} = useSelector((state) => state.user)
  const contact = {...user.contactinfo}
  // const { register, watch, handleSubmit } = useForm();

  // const onSubmit = async() => {
  // const token = JSON.parse(localStorage.getItem('token'))
  //   const url = "https://api.cloudinary.com/v1_1/softCore/image/upload"
  //   const data = new FormData();
  //   data.append("file", file);
  //   data.append("upload_preset", "oo68ebne")
  //   data.append("cloud_name","softCore")

  //   try {
  //       await axios.post(url,data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const uploadImg=(files)=>{
    setFile(files[0]);
    const url = "https://api.cloudinary.com/v1_1/ielemson/image/upload"
    const formData = new FormData();
    formData.append("file",files[0]);
    formData.append("upload_preset","eldzcoeb")

    // try {
    // const res =  await axios.post(url,formData)

    // setPicture(res.data.secure_url)  
    // console.log('img from frontend'+ picture)
    // } catch (error) {
    //   console.log(error)
    // }

    axios.post(url,formData).then((res)=>{
      setPicture(res.data.secure_url)  
    }).catch((err)=>console.log(err))
  }

  const uploadImgPath = ()=>{

    // try {
    //   const res = await api.post('/user/upload_img',picture)  
    //   console.log(res)
    // } catch (error) {
    //   console.log(error)
    // }
    const data = {"picture":picture}
    api.post('/user/upload_img',data).then((res)=>{
     
    }).catch((err)=>console.log(err))
  }

  React.useEffect(()=>{
    picture && uploadImgPath()
    },[picture])
  return (
    <>
     {user &&  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
              
                <img
                  alt="..."
                  src={ file ? URL.createObjectURL(file) : user.picture ? user.picture :Img }
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              
              
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
              
                <div className="formInput">
                  <form>
                                <label htmlFor="file" className="cursor-pointer bg-lightBlue-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">
                                   upload picture
                                </label>
                                    <input type="file" id="file"
                                 
                                  onChange={e => {
                                    //  setFile(e.target.files[0])
                                    uploadImg(e.target.files)
                                    }}
                                    className="hidden"
                                  />
                                  {/* <button type="submit" id="btnUpload" className="hidden"> Submit </button> */}
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
