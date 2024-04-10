import BannerBgImg1 from "../images/pixel-bg.jpg";
import avatar from "../images/avatar.png";
import fishpixel from "../images/fish-pixel.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faCircleArrowDown,faHome,faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer";
import { Link } from "react-router-dom";
const Blog = () => {

    return (
        <div>
            <div className="container mt-3 blog-page">
                <div className="row">
                    <div className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center" style={{backgroundImage: `url(${BannerBgImg1})`, backgroundPosition: 'center left',backgroundSize: 'cover'}}>
                        <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                            <div className="w-100 my-auto subheading">
                                <h1 className="text-white">Blog List</h1>
                                <nav className="d-flex justify-content-center" aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item"><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
                                        <li className="breadcrumb-item active">Blog</li>
                                    </ol>
                                </nav>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="position-relative mt-5 mb-3">
                <div className="container">
                    <div className="row">
                          {/* Main Post START   */}
                        <div className="col-lg-9">
                            <div className="mb-4">
                                <h2 className="m-0 text-black"><FontAwesomeIcon className="me-2" icon={faHourglassStart} />Today's top highlights</h2>
                                <p>Latest breaking news, pictures, videos, and special reports</p>
                            </div>
                            <div className="row gy-4">
                                {/* Card item START   */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="position-relative">
                                            <img className="card-img" src={fishpixel} alt="card-img"/>
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                <div className="w-100 mt-auto">
                                                    <a href="#0" className="badge text-bg-warning mb-2">
                                                    <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />Technology</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 py-0 pt-md-3">
                                            <h4 className="card-title mt-2">
                                                <Link to="/blog-detail" className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</Link>
                                            </h4>
                                            <p className="card-text">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src={avatar} alt="avatar" width={35}/>
                                                            </div>
                                                            <span className="ms-3">by <a href="#0" className="stretched-link text-reset btn-link">Samuel</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Jan 22, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="position-relative">
                                            <img className="card-img" src={fishpixel} alt="Card-img"/>
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                <div className="w-100 mt-auto">
                                                    <a href="#0" className="badge text-bg-danger mb-2">
                                                    <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />Travel</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 py-0 pt-md-3">
                                            <h4 className="card-title mt-2">
                                                <a href="#0" className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</a>
                                            </h4>
                                            <p className="card-text">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img width={35} className="avatar-img rounded-circle" src={avatar} alt="avatar"/>
                                                            </div>
                                                            <span className="ms-3">by <a href="#0" className="stretched-link text-reset btn-link">Samuel</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Jan 22, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="position-relative">
                                            <img className="card-img" src={fishpixel} alt="card-img"/>
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                <div className="w-100 mt-auto">
                                                    <a href="#0" className="badge text-bg-info mb-2">
                                                    <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />Technology</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 py-0 pt-md-3">
                                            <h4 className="card-title mt-2">
                                                <Link to="/blog-detail" className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</Link>
                                            </h4>
                                            <p className="card-text">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src={avatar} alt="avatar" width={35}/>
                                                            </div>
                                                            <span className="ms-3">by <a href="#0" className="stretched-link text-reset btn-link">Samuel</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Jan 22, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="position-relative">
                                            <img className="card-img" src={fishpixel} alt="Card-img"/>
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                <div className="w-100 mt-auto">
                                                    <a href="#0" className="badge text-bg-success mb-2">
                                                    <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />Travel</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 py-0 pt-md-3">
                                            <h4 className="card-title mt-2">
                                                <a href="#0" className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</a>
                                            </h4>
                                            <p className="card-text">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img width={35} className="avatar-img rounded-circle" src={avatar} alt="avatar"/>
                                                            </div>
                                                            <span className="ms-3">by <a href="#0" className="stretched-link text-reset btn-link">Samuel</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Jan 22, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END   */}
                                <div className="col-12 text-center my-3 my-lg-5">
                                    <button type="button" className="btn btn-primary-soft fw-semibold">Load more post <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircleArrowDown} /></button>
                                </div>
                            </div>
                        </div>
                        {/* Main Post END   */}
                        {/* Sidebar START   */}
                        <div className="col-lg-3 mt-3 mt-lg-0">
                            <div data-sticky="" data-margin-top="80" data-sticky-for="767">
                                {/* Trending topics widget START   */}
                                <div>
                                    <h4 className="mt-0 mb-2 mb-lg-4 text-black widget-title">Trending topics</h4>
                                    <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4 " style={{backgroundImage:`url(${fishpixel})`,backgroundPosition:'center left',backgroundSize:'cover'}}>
                                        <div className="p-3">
                                            <a href="#0" className="stretched-link btn-link fw-bold text-white h5">Travel</a>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:`url(${fishpixel})`,backgroundPosition:'center left',backgroundSize:'cover'}}>
                                        <div className="bg-dark-overlay-4 p-3">
                                            <a href="#0" className="stretched-link btn-link fw-bold text-white h5">Business</a>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:`url(${fishpixel})`,backgroundPosition:'center left',backgroundSize:'cover'}}>
                                        <div className="bg-dark-overlay-4 p-3">
                                            <a href="#0" className="stretched-link btn-link fw-bold text-white h5">Marketing</a>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:`url(${fishpixel})`,backgroundPosition:'center left',backgroundSize:'cover'}}>
                                        <div className="bg-dark-overlay-4 p-3">
                                            <a href="#0" className="stretched-link btn-link fw-bold text-white h5">Photography</a>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:`url(${fishpixel})`,backgroundPosition:'center left',backgroundSize:'cover'}}>
                                        <div className="bg-dark-overlay-4 p-3">
                                            <a href="#0" className="stretched-link btn-link fw-bold text-white h5">Sports</a>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <a href="#0" className="fw-bold text-body text-primary-hover"><u>View all categories</u></a>
                                    </div>
                                </div>
                                {/* Trending topics widget END   */}

                                <div className="row">
                                    {/* Recent post widget START   */}
                                    <div className="col-12 col-sm-6 col-lg-12">
                                        <h4 className="mt-4 mb-3 text-black widget-title">Recent post</h4>
                                        <div className="card mb-3">
                                            <div className="row g-3">
                                                <div className="col-4">
                                                    <img className="rounded img-fluid" src={BannerBgImg1} alt="BannerBgImg1"/>
                                                </div>
                                                <div className="col-8">
                                                    <h6><Link to="/blog-detail" className="btn-link stretched-link text-reset fw-bold">The pros and cons of business agency</Link></h6>
                                                    <div className="small mt-1">May 17, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-3">
                                                <div className="col-4">
                                                    <img className="rounded img-fluid" src={fishpixel} alt=""/>
                                                </div>
                                                <div className="col-8">
                                                    <h6><Link to="/blog-detail" className="btn-link stretched-link text-reset fw-bold">5 reasons why you shouldn't startup</Link></h6>
                                                    <div className="small mt-1">Apr 04, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-3">
                                                <div className="col-4">
                                                    <img className="rounded img-fluid" src={BannerBgImg1} alt="BannerBgImg1"/>
                                                </div>
                                                <div className="col-8">
                                                    <h6><Link to="/blog-detail" className="btn-link stretched-link text-reset fw-bold">Ten questions you should answer truthfully.</Link></h6>
                                                    <div className="small mt-1">Jun 30, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-3">
                                                <div className="col-4">
                                                    <img className="rounded img-fluid" src={fishpixel} alt=""/>
                                                </div>
                                                <div className="col-8">
                                                    <h6><Link to="/blog-detail" className="btn-link stretched-link text-reset fw-bold">Five unbelievable facts about money.</Link></h6>
                                                    <div className="small mt-1">Nov 29, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12 my-3 my-md-5">
                                        <a href="#0" className="d-block card-img-flash">
                                            <img src={fishpixel} className="img-fluid" alt=""/>
                                        </a>
                                        <div className="smaller text-end mt-2">ads via <a href="#0" className="text-body"><u>Bootstrap</u></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar END   */}
                        </div>
                    {/* Row end   */}
                    </div>
            </section>
            <Footer/>
        </div>
    )
}


export default Blog;