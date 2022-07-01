import AuthLayout from "./layouts/AuthLayout";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    
   <AuthLayout>
     <Outlet/>
   </AuthLayout>
   
  )
}