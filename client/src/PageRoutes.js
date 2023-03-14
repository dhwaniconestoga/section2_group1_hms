import {Routes, Route} from 'react-router-dom';
import React, { useContext } from 'react';

import LoginPage from './components/Login/Login'

//import SignupPage from './pages/SignupPage';
import SignupPage from './components/SignUp/SignupPage';

// import AddUser from './components/User/AddUser';
// import AddUser from './components/User/AddUser2';


// import UserList from "./components/User/UserList";
// import UserList from "./components/User/UserList2";

// import EditUser from "./components/User/EditUser";
// import EditUser from "./components/User/EditUser2";


import Dashboard from './components/dashboard/Dashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';

import AddUser from './components/User/AddUser3';
import UserList from "./components/User/UserList3";
import EditUser from "./components/User/EditUser3";
import User from './components/User/User';


import AddPatient from './components/Patient/AddPatient';
import PatientList from "./components/Patient/PatientList";
import EditPatient from "./components/Patient/EditPatient";
import Patient from './components/Patient/Patient';

import AddDoctor from './components/Doctor/AddDoctor';
import DoctorList from "./components/Doctor/DoctorList";
import EditDoctor from "./components/Doctor/EditDoctor";
import Doctor from './components/Doctor/Doctor';


import {UserContext} from './Context/UserContext'
import PatientDashboard from './components/dashboard/PatientDashboard';
import DoctorDashboard from './components/dashboard/DoctorDashboard';
import AdminAppointment from './components/Appointment/AdminAppointment';



const NotFound = () => <h2 style={{margin:'70px'}}>This Path is not available</h2>

function ProtectedAdminRoute({children}) {
    const {currentUser} = useContext(UserContext);
    if (currentUser.userType == "Admin") {
        return children ;
    }
}

export default function PageRoutes(){
    const {currentUser} = useContext(UserContext);
    return (
        <Routes>
            <Route path='/' element= {<Dashboard />} >
                <Route index element= {
                    currentUser.userType == "Admin"?
                        <AdminDashboard />:
                    currentUser.userType == "Doctor"?
                        <DoctorDashboard />:
                    currentUser.userType == "Patient"? 
                        <PatientDashboard />:
                    <AdminDashboard />} 
                />
                <Route path='users' element= { <ProtectedAdminRoute>  <User /> </ProtectedAdminRoute>} >
                    <Route index element= {<UserList />} />
                    <Route path='add' element={<AddUser />} />
                    <Route path="edit/:id" element={<EditUser />} />
                </Route>

                <Route path='patients' element= { <ProtectedAdminRoute>  <Patient /> </ProtectedAdminRoute>} >
                    <Route index element= {<PatientList />} />
                    <Route path='add' element={<AddPatient />} />
                    <Route path="edit/:id" element={<EditPatient />} />
                </Route>

                <Route path='doctors' element= { <ProtectedAdminRoute>  <Doctor /> </ProtectedAdminRoute>} >
                    <Route index element= {<DoctorList />} />
                    <Route path='add' element={<AddDoctor />} />
                    <Route path="edit/:id" element={<EditDoctor />} />
                </Route>

                <Route path='appointments' element= {
                    currentUser.userType == "Admin"?
                        <AdminAppointment />:
                    currentUser.userType == "Doctor"?
                        <DoctorDashboard />:
                    currentUser.userType == "Patient"? 
                        <PatientDashboard />:
                    <AdminDashboard />} 
                />
            </Route>
            <Route path='/login' element= {<LoginPage />} />
            <Route path='/signup' element= {<SignupPage />} />
            {/* <Route path="/users" element={<UserList />} /> */}
            {/* <Route path="/users3" element={<UserList3 />} /> */}
            {/* <Route path='/adduser' element= {<AddUser />} />
            <Route path="edituser/:id" element={<EditUser />} /> */}
            <Route path='/*' element={<NotFound/>} />

        </Routes>
    )
}