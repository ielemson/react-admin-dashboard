import React from "react";
import "../assets/styles/tailwind.css"

// components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views
// import Dashboard from "../views/admin/Dashboard";

 const AdminLayout = ({children}) => {
  return (
    <>
    <Sidebar />
    <div className="relative md:ml-64 bg-gray-100">
        <AdminNavbar/>
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
         {children}
          <FooterAdmin />
        </div>
      </div>
   
    </>
  );
}

export default AdminLayout;