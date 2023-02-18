import {Routes, Route} from 'react-router-dom';
import NurseDirectory from "./components/NurseDirectory";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const NotFound = () => <h2>This Path is not available</h2>

export default function PageRoutes(){
    return (
        <Routes>
            <Route path='/' element= {<LoginPage />} />
            <Route path='/login' element= {<LoginPage />} />
            <Route path='/signup' element= {<SignupPage />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}