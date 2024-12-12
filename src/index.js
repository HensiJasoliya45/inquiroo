import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import Login from './Login';
import AdminLogout from './AdminLogout';
import Register from './Register';
import Forgetpass from './Forgetpass';
import AdminProfile from './AdminProfile';
import AdminViewProfile from './AdminViewProfile';

import Adminhome from './Adminhome';
import Adminsalesman from './Adminsalesman';
import Admineditsalesman from './Admineditsalesman';
import Adminaddsalesman from './Adminaddsalesman';
import Adminproduct from './Adminproduct';
import Adminaddproduct from './Adminaddproduct';
import Admineditproduct from './Admineditproduct';
import Admininquiry from './Admininquiry';
import Admineditinquiry from './Admineditinquiry';
import Adminfollowup from './Adminfollowup';
import Adminchangepass from './Adminchangepass';

import Salesmaninquiry from './Salesmaninquiry';
import Salesmanaddinquiry from './Salesmanaddinquiry';
import Salesmaneditinquiry from './Salesmaneditinquiry';
import Salesmanfollowup from './Salesmanfollowup';
import Salesmanchangepass from './Salesmanchangepass';
import SalesmanViewProfile from './SalesmanViewProfile';

//create function which has routes
function MyRoutes() {
    console.log('myRoutes');
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<Adminhome />} /> 
            <Route path='/register' element={<Register />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/admin-logout' element={<AdminLogout />} /> 
            <Route path='/forgot-password' element={<Forgetpass/>} /> 
            <Route path='/admin-profile' element={<AdminProfile/>} />
            <Route path='/admin-view-profile' element={<AdminViewProfile/>} />

            <Route path='/admin-edit-salesman' element={<Admineditsalesman />} /> 
            <Route path='/admin-add-salesman' element={<Adminaddsalesman />} />
            <Route path='/admin-salesman' element={<Adminsalesman/>} /> 
            <Route path='/admin-product' element={<Adminproduct />} /> 
            <Route path='/admin-change-password' element={<Adminchangepass />} /> 
            <Route path='/admin-add-product' element={<Adminaddproduct />} /> 
            <Route path='/admin-edit-product' element={<Admineditproduct />} />
            <Route path='/admin-inquiry' element={<Admininquiry />} />
            <Route path='/admin-edit-inquiry' element={<Admineditinquiry />} />
            <Route path='/admin-followup' element={<Adminfollowup />} />
            
            <Route path='/salesman-inquiry' element={<Salesmaninquiry />} />
            <Route path='/salesman-add-inquiry' element={<Salesmanaddinquiry />} />
            <Route path='/salesman-edit-inquiry' element={<Salesmaneditinquiry />} />
            <Route path='/salesman-followup' element={<Salesmanfollowup />} />
            <Route path='/salesman-change-password' element={<Salesmanchangepass />} />
            <Route path='/salesman-view-profile' element={<SalesmanViewProfile />} />
            
              
        </Routes>
    </BrowserRouter>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
var MyRoutesWithCookies = withCookies(MyRoutes);
root.render(<MyRoutesWithCookies />);






