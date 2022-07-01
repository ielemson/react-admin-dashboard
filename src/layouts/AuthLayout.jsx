import React from "react";
import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";
const background  = "https://demos.creative-tim.com/notus-react/static/media/register_bg_2.4f2cb0ac.png"
import { Outlet } from "react-router-dom";
// views

// import Login from "views/auth/Login.js";
// import Register from "views/auth/Register.js";

const AuthLayout = ({children}) => {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full py-[8.5rem]">
          <div
            className="absolute top-0 w-full h-full bg-gray-800 bg-no-repeat bg-full"
            style={{ backgroundImage: `url(${background})` }}>
          </div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

export default AuthLayout
