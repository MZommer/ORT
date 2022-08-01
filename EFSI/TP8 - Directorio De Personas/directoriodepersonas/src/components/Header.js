import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img src="favicon.png" className="logo-icon" alt="logo icon"></img>
                    </div>
                    <div>
                        <p className="logo-text"><span className="badge bg-primary">Personas</span></p>
                    </div>
                    <div className="toggle-icon ms-auto">
                        <i className='bx bx-arrow-to-left'></i>
                    </div>
                </div>
                <ul className="metismenu" id="menu">
                    <li className="menu-label"><strong>Dashboard</strong></li>
                    <li>
                        <Link className="tab" to="/">
                            <div className="parent-icon">
                                <i className='lni lni-home'></i>
                            </div>
                            <div className="menu-title">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="tab" to="/stats">
                            <div className="parent-icon">
                                <i className='lni lni-stats-up'></i>
                            </div>
                            <div className="menu-title">Stats</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="tab" to="/contact">
                            <div className="parent-icon">
                                <i className='lni lni-users'></i>
                            </div>
                            <div className="menu-title">Contact</div>
                        </Link>
                    </li>                
                </ul>
            </div>
            <header>
                <div className="topbar d-flex align-items-center">
                    <nav className="navbar navbar-expand">
                        <div className="mobile-toggle-menu"><i className='bx bx-menu'></i>
                        </div>
                        <div className="header-notifications-list">
                        </div>
                        <div className="header-message-list">
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}