import fishpixel from "../images/fish-pixel.jpg";
import logo from '../images/uiblog-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe,faArrowUpLong,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faQuora, faStackOverflow,faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	
    return (
        <>
        <footer className="footer-area">
            <div className="container py-3 pt-lg-5 pb-lg-3">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <div className="single-footer-widget">
                            <h3>Recent Posts</h3>
                            <div className="widget-review-box">
                                <div className="row m-0">
                                    <div className="col-lg-3 col-md-3 col-3 p-0">
                                        <div className="image">
                                            <a className="link-btn" href="#0">
                                                <img className="img-fluid" src={fishpixel} alt="products" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-9 p-0">
                                        <div className="content">
                                            <h3><a href="/blogs/top-5-best-smartphone-2023/">Top 5 best smartphone 2023</a></h3>
                                            <ul className="meta list-unstyled mb-0">
                                                <li><i className="bx bx-calendar"></i> May 28th, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="row m-0 my-3">
                                    <div className="col-lg-3 col-md-3 col-3 p-0">
                                        <div className="image">
                                            <a className="link-btn" href="#0">
                                                <img className="img-fluid" src={fishpixel} alt="products" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-9 p-0">
                                        <div className="content">
                                            <h3><a href="/blogs/top-5-best-smartphone-2023/">Top 5 best smartphone 2023</a></h3>
                                            <ul className="meta list-unstyled mb-0">
                                                <li><i className="bx bx-calendar"></i> May 28th, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="row m-0 my-3">
                                    <div className="col-lg-3 col-md-3 col-3 p-0">
                                        <div className="image">
                                            <a className="link-btn" href="#0">
                                                <img className="img-fluid" src={fishpixel} alt="products" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-9 p-0">
                                        <div className="content">
                                            <h3><a href="/blogs/top-5-best-smartphone-2023/">Top 5 best smartphone 2023</a></h3>
                                            <ul className="meta list-unstyled mb-0">
                                                <li><i className="bx bx-calendar"></i> May 28th, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="single-footer-widget my-3 my-md-0">
                            <h3>Helpful Links</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="#0">An item</a></li>
                                <li className="list-group-item"><a href="#0">An item</a></li>
                                <li className="list-group-item"><a href="#0">An item</a></li>
                                <li className="list-group-item"><a href="#0">An item</a></li>
                                <li className="list-group-item"><a href="#0">An item</a></li>
                                <li className="list-group-item"><a href="#0">An item</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="single-footer-widget">
                            <div className="footer-logo mb-2">
                                <img src={logo} className="img-fluid" alt="footer-logo" width={180}/>
                            </div>
                            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration. He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration.</p>
                            <div className="social-icons">
                                <ul className="meta list-unstyled d-flex">
                                    <li><a href="#0"><FontAwesomeIcon className="text-white" icon={faStackOverflow} /></a></li>
                                    <li><a href="#0"><FontAwesomeIcon className="text-white" icon={faQuora} /></a></li>
                                    <li><a href="#0"><FontAwesomeIcon className="text-white" icon={faGlobe} /></a></li>
                                    <li><a href="#0"><FontAwesomeIcon className="text-white" icon={faLinkedinIn} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center py-2">
                 Copyright &copy; {new Date().getFullYear()} Blog, All Right Reserved.
            </div>
            
            <div className="blog">
                <div className="back-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><FontAwesomeIcon className="text-white" icon={faArrowUpLong}  /></div>
            </div>        
        </footer>
         {/*-- Modal */}
         <div className="modal fade login-form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                        <div className="modal-body">
                            <ul className="nav nav-pills mb-3 border-bottom" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="login-text active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="login-text" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">                                   
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="text" className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="w-100 btn bg-primary bg-gradient py-2 text-white">Login Now</button>
                                    </div>                     
                                    <p className="my-2 sub-title"><span>Or login with</span></p>
                                    <div className="login-with-account mb-2">
                                        <ul className="d-flex list-unstyled mb-2">
                                            <li>
                                                <a href="https://www.facebook.com/" className="bg-primary text-white rounded-2 me-3 d-block text-center" target="_blank" rel="noreferrer"> 
                                                <FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://google.com/" className="bg-danger text-white rounded-2 d-block text-center" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faEnvelope} /> Google</a>
                                            </li>
                                        </ul>
                                    </div>          
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="text" className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input shadow-none" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                    <div className="mb-1">
                                        <button type="submit" className="w-100 btn bg-primary bg-gradient py-2 text-white">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )
}
export default Footer;