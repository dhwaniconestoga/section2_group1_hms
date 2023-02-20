import { BrowserRouter as Router, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageRoutes from './PageRoutes'


export default function HomePage() {
    return (
        <Router>
            <div>
                <PageRoutes />
            </div>
        </Router>
    )
}