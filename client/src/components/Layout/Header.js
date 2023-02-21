const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <a href="index-2.html" className="logo">
                    <span>Clinic</span>
                </a>
            </div>
            <a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars"></i></a>
            <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fa fa-bars"></i></a>
            <ul className="nav user-menu float-right">
              
                <li className="nav-item dropdown has-arrow">
                    <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span>Admin</span>
                    </a>
                    <div className="dropdown-menu">
                        
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
            <div className="dropdown mobile-user-menu float-right">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                <div className="dropdown-menu dropdown-menu-right">
                    
                    <a className="dropdown-item" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
