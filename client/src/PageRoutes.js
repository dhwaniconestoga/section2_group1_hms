import {Routes, Route} from 'react-router-dom';
//import NurseDirectory from "./components/NurseDirectory";

import LoginPage from './components/Login/Login'

//import SignupPage from './pages/SignupPage';
import SignupPage from './components/SignUp/SignupPage';

// import AddUser from './components/User/AddUser';
// import AddUser from './components/User/AddUser2';
import AddUser from './components/User/AddUser3';


// import UserList from "./components/User/UserList";
// import UserList from "./components/User/UserList2";
import UserList from "./components/User/UserList3";

// import EditUser from "./components/User/EditUser";
// import EditUser from "./components/User/EditUser2";
import EditUser from "./components/User/EditUser3";


import Dashboard from './components/dashboard/Dashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import User from './components/User/User';

const NotFound = () => <h2>This Path is not available</h2>

export default function PageRoutes(){
    return (
        <Routes>
            <Route path='/' element= {<Dashboard />} >
                <Route index element={<AdminDashboard />} />
                <Route path='users' element= {<User />} >
                    <Route index element= {<UserList />} />
                    <Route path='add' element={<AddUser />} />
                    <Route path="edit/:id" element={<EditUser />} />
                </Route>
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