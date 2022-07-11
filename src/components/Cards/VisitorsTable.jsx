import React from "react";
import { useSelector,useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import img from "../../assets/img/default.jpg"
import api from "../../api/api";
import toast from 'react-hot-toast';



export default function CardTable({ color }) {
  const dispatch = useDispatch();
  const {visitors,isLoading} = useSelector((state)=>(state.visitors))
  const role = JSON.parse(localStorage.getItem('role'))
  const notify_error = (data) => toast.error(`${data}`);
  const notify_success = (data) => toast.success(`${data}`);

  
 
  const deleteUser = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to delete ?.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {

            const formData = new FormData();
            formData.append("id",id)

            api.post("/user/destroy",formData).then((res)=>{
              if(res.data.error){
                notify_error(res.data.error)
              }else{
                notify_success('User deleted')
                dispatch(getUsers())
              }
            }).catch((err)=>console.log(err))
          }
        },
        {
          label: 'No',
          // onClick: () => alert('Click No' + id)
        }
      ]
    });
  };
  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="">
            <div className="flex">
              <h3
                className={
                  "font-semibold text-lg" +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Visitors Details
                
              </h3>

              {/* <Link to={'/admin/users/create'} class=" ml-4 cursor-pointer bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"  >create users</Link> */}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  IPV4
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 City
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Country Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Country Code
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  State
                </th>
                  <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                    Visited
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {
          isLoading ? (
            <div className="flex items-center justify-center h-28 w-28 mx-auto">
          <button type="button" className="flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          Processing
      </button></div>
      ):( visitors.map((visitor,key)=>(
            <tr key={key}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                 
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                   {visitor.ipv4}
                  </span>
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {visitor.city ?? ''}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {visitor.country_name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {visitor.country_code}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {visitor.state ?? ''}
                  
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i>   {moment(visitor.created_at).fromNow()} 
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {role =="admin" ? (
                <>
                  {
                    role !== "admin" ? (<button disabled  className="fa fa-trash text-red-600 cursor-not-allowed"></button>):(<i className="fa fa-trash text-red-600 text-md cursor-pointer" onClick={()=>deleteUser(visitor.id)}></i>)
                  }
                {/* <Link to={'/admin/user/'+visitor.id}>
                    <i className="fa fa-edit text-green-500 text-md cursor-pointer ml-2"></i>
                </Link> */}
                </>):(
                <button type="button" class="inline-block px-2 py-1 cursor-not-allowed bg-red-600 text-white font-xs font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Restricted</button>)}
                </td>
              </tr>
             
            )))
            }

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "dark",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
