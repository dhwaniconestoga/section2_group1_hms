const Sidebar = () => {
    return (
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Main</li>
                        <li>
                            <a href="#"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                        </li>
                        <li class="active">
                            <a href="#"><i class="fa fa-user"></i> <span>User</span></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
