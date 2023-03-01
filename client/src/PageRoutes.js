import {Routes, Route} from 'react-router-dom';
//import NurseDirectory from "./components/NurseDirectory";
import LoginPage from './components/Login/Login'
//import SignupPage from './pages/SignupPage';
import SignupPage from './components/SignUp/SignupPage';
import AddUser from './components/User/AddUser';
import UserList from "./components/User/UserList";
import EditUser from "./components/User/EditUser";

const NotFound = () => <h2>This Path is not available</h2>

export default function PageRoutes(){
    return (
        <Routes>
            <Route path='/' element= {<LoginPage />} />
            <Route path='/login' element= {<LoginPage />} />
            <Route path='/signup' element= {<SignupPage />} />
            <Route path="/users" element={<UserList />} />
            <Route path='/adduser' element= {<AddUser />} />
            <Route path='/adduser' element= {<AddUser />} />
            <Route path="edituser/:id" element={<EditUser />} />
        </Routes>
    )
}