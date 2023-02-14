import {BrowserRouter as Router, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageRoutes from './PageRoutes'


export default function HomePage(){
    return (
        <Router>
            <div>
                <header>
                    <h1>Hospital Management System</h1>
                    <Navbar/>
                </header>
                <PageRoutes />
            </div>
        </Router>       
    )
}