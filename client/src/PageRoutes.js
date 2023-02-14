import {Routes, Route} from 'react-router-dom';
import NurseDirectory from "./components/NurseDirectory";

const NotFound = () => <h2>This Path is not available</h2>

export default function PageRoutes(){
    return (
        <Routes>
            <Route path='/' element= {<NurseDirectory />} />
            <Route path='/*' element={<NotFound/>} />
        </Routes>
    )
}