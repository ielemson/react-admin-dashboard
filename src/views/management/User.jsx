import React from "react";
// components
import CardSettings from "./components/Cards/CardSettings";
import CardProfile from "./components/Cards/CardProfile";
import { useParams } from "react-router-dom";
import api from "../../api/api";

export default function User() {


  const [user,setUser] = React.useState('');
  
  const {id} = useParams();
//  console.log(user)

  // Get User 
const getUser = async()=>{

  try {
    
    const url = "/user/"+id;
    const res = await api.get(url)
    setUser(res.data)
  } catch (error) {
    console.log(error)
  }
}


// get user
React.useEffect(() => {
  return ()=>{
    getUser()
  }
}, [])
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings user={user} getUser={getUser} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile user={user}  />
        </div>
      </div>
    </>
  );
}
