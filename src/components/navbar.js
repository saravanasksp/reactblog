import logo from '../images/uiblog-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuora,faLinkedin,faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const tokenid = localStorage.getItem("tokenid")
    const location = useLocation();
    let button;
    if (tokenid) {
        button =  <Link to={location.pathname} className='btn btn-danger btn-sm mx-3 px-3 text-uppercase d-none d-lg-inline-block' onClick={() => localStorage.setItem('tokenid','')}>Logout</Link>
    } else {
        button = <Link to="/login" className='btn btn-danger btn-sm mx-3 px-3 text-uppercase d-none d-lg-inline-block'>Login</Link>
    }
    console.log('ttt',location.pathname)
   // const index  = location.pathname.includes('login');
    if(!location.pathname.includes('login')) {
    return (
        <header>
            <div className="alert alert-warning py-1 m-0 bg-primary alert-dismissible fade show text-center px-2" role="alert">
                <div className="position-relative">
                    <p className="text-white m-0">Unlimited download! Starting from just $15/m <a href="#0" className="btn btn-xs  btn-dark ms-3 mb-0">Grab now!</a></p>
                    <button type="button" className="btn-close btn-close-white opacity-9 p-1" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container">
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler01" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/"><img src={logo} alt='logo-brand' width="150"/></Link>
                    <div className="collapse navbar-collapse" id="navbarToggler01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Pages</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>                   
                            </li>
                        </ul>
                        <div className="d-flex">
                           {button}
                            <ul className="social-icons-menu list-unstyled nav d-none d-lg-flex">
                                <li><a href="#0" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="#0" target="_blank"><FontAwesomeIcon icon={faQuora} color='#000'/></a></li>
                                <li><a href="#0" target="_blank"><FontAwesomeIcon icon={faStackOverflow} color='#000'/></a></li>
                                <li><a href="#0" target="_blank"><FontAwesomeIcon icon={faGlobe} color='#000'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>           
        </header>
    )
    }
}
export default Navbar;