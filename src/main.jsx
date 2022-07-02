import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './assets/styles/index.css'
import './assets/styles/tailwind.css'
import App from './App'
// import { HomeComponent } from './components';
import {Provider} from "react-redux";
import store from "./features/store"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from 'react-hot-toast';
import AuthLogin from "./views/auth/Login"
import AuthRegister from "./views/auth/Register"
import ForgotPassword from "./views/auth/ForgotPassword"
import ResetPassword from "./views/auth/ResetPassword"

// Dashboard
import Users from "./views/admin/Users"
import Settings from './views/admin/Settings';
import Dashboard from './views/admin/Dashboard';
import AdminApp from './views/admin/AdminApp';
import Landing from './views/Landing';
import NotFound from './views/NotFound';
import User from "./views/management/User"
import Profile from "./views/Profile"
import ProtectedRoute from './utils/ProtectedRoute ';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Router>
  <Provider store={store}>
    <Routes>
    <Route index  element={<Landing/>}/>

      {/* None Authenticated Route Starts Here:::::::::::::::::::::::::::::::::::: */}
      
      <Route  element={<App />} >
        
      <Route path="auth/login" element={<AuthLogin/>}/>

      <Route path="auth/forgotpassword" element={<ForgotPassword/>}/>

      <Route path="reset-password/:token" element={<ResetPassword/>}/>

      <Route path="auth/register" element={<AuthRegister/>}/>

      </Route>
          {/* None Authenticated Route Ends Here:::::::::::::::::::::::::::::::::::: */}
      

        {/* Authenticated routes starts here :::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route element={<AdminApp/>}>
     
        <Route path='/admin/dashboard' element={
          <ProtectedRoute><Dashboard/></ProtectedRoute>
        }/>

        <Route path='/admin/users' element={

        <ProtectedRoute> <Users/> </ProtectedRoute>
        }/>
     
        <Route path='/admin/settings' element={
          <ProtectedRoute><Settings/></ProtectedRoute>
        }/>

        {/* <Route path='/admin/users' element={
          <ProtectedRoute><Users/></ProtectedRoute>
        }/> */}
        
        <Route path='admin/user/:id' element={
          <ProtectedRoute><User/></ProtectedRoute>
        }/>
        
        </Route>

        <Route path='admin/profile' element={<ProtectedRoute><Profile/></ProtectedRoute> }/>
        {/* Authenticated routes ends here ::::::::::::::::::::::::::::::::::::::::::::*/}
      
         <Route path="*" element={<NotFound/>} />
    </Routes>
    <Toaster 
     position="top-right"
     reverseOrder={false}
    />
  </Provider>

  </Router>
  </React.StrictMode>
)
