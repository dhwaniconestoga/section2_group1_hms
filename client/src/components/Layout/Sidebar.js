const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main</li>
                        <li>
                            <a href="#"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a>
                        </li>
                        <li className="active">
                            <a href="#"><i className="fa fa-user"></i> <span>User</span></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
