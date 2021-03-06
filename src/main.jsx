import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './assets/styles/index.css'
import App from './App'
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
// import Profile from "./views/Profile"
import ProtectedRoute from './utils/ProtectedRoute ';
import CreateUser from './views/management/CreateUser';
import TodoList from './views/user/TodoList';
import QuizSettings from "./views/Quiz/QuizSettings"
import FinalQuiz from "./views/Quiz/FinalScreen";
import Questions from "./views/Quiz/Questions";
import Visitors from "./views/visitors/Visitors"
import LanguageTrans from './views/user/LanguageTrans';


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
     
        <Route path='/user/dashboard' element={
          <ProtectedRoute><Dashboard/></ProtectedRoute>
        }/>

        <Route path='/admin/users' element={

        <ProtectedRoute> <Users/> </ProtectedRoute>
        }/>
        <Route path='/admin/users/create' element={

        <ProtectedRoute> <CreateUser/> </ProtectedRoute>
        }/>
     
        <Route path='/user/settings' element={
          <ProtectedRoute><Settings/></ProtectedRoute>
        }/>

        {/* <Route path='/admin/users' element={
          <ProtectedRoute><Users/></ProtectedRoute>
        }/> */}
        
        <Route path='admin/user/:id' element={
          <ProtectedRoute><User/></ProtectedRoute>
        }/>
        <Route path='user/todo' element={
          <ProtectedRoute><TodoList/></ProtectedRoute>
        }/>
        
        {/* Quiz App  Starts*/}
        <Route path='/user/quiz/score' element={
          <ProtectedRoute><FinalQuiz/></ProtectedRoute>
        }/>
        <Route path='/user/quiz/questions' element={
          <ProtectedRoute><Questions/></ProtectedRoute>
        }/>
        <Route path='/user/quiz/settings' element={
          <ProtectedRoute><QuizSettings/></ProtectedRoute>
        }/>
        {/* Quiz App  Ends*/}


        {/* Language Translator Route starts :::::::::::: */}
        <Route path='/user/langugage/translate' element={
          <ProtectedRoute><LanguageTrans/></ProtectedRoute>
        }/>
        {/* Language Translator Route ends :::::::::::::: */}

        {/* Visitors Route starts :::::::::::: */}
        <Route path='/admin/visitors' element={
          <ProtectedRoute><Visitors/></ProtectedRoute>
        }/>
        {/* Visitors Route ends :::::::::::::: */}

    
        </Route>
      {/* Authenticated routes ends here ::::::::::::::::::::::::::::::::::::::::::::*/}
        {/* <Route path='user/profile' element={<ProtectedRoute><Profile/></ProtectedRoute> }/> */}
  

         <Route path="*" element={<NotFound/>} />
    </Routes>
   
<Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 8000,
          style: {
            fontSize: '0.8rem',
            fontWeight:'bold'
          },
        }}
      />
  </Provider>

  </Router>
  </React.StrictMode>
)
