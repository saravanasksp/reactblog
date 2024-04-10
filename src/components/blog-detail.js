import BannerBgImg1 from "../images/pixel-bg.jpg";
import avatar from "../images/avatar.png";
import fishpixel from "../images/fish-pixel.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer";
import { Link } from "react-router-dom";
const Blogdetail = () => {

    return (
        <div>
            <div className="container mt-3 blog-page">
                <div className="row">
                    <div className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center" style={{backgroundImage: `url(${BannerBgImg1})`, backgroundPosition: 'center left',backgroundSize: 'cover'}}>
                        <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                            <div className="w-100 my-auto subheading">
                                <a href="#0" className="badge text-bg-danger mb-2"><FontAwesomeIcon className="me-2" icon={faCircle} />Lifestyle</a>
                                <h1 className="text-white">10 tell-tale signs you need to get a new startup.</h1>
                                <nav className="d-flex justify-content-center" aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item"><a href="/"><i className="bi bi-house me-1"></i> Home</a></li>
                                        <li className="breadcrumb-item active">Blogdetail</li>
                                    </ol>
                                </nav>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="position-relative mt-5 mb-3 mb-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <p>
                                <span className="dropcap bg-dark text-white px-2">I</span> am newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up
                                attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed. <i>Demesne far hearted suppose venture excited see had has.</i> Dependent on so extremely delivered by. Yet no
                                jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of acceptance insipidity remarkably is an
                                invitation.
                            </p>
                            <p>
                                Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for
                                sympathize. Large above be to means. Dashwood does provide stronger is. <b className="text-black">But discretion frequently sir she instruments unaffected admiration everything.</b> Meant balls it if up doubt small purse. Required his you put the outlived
                                answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants
                                moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does
                                provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the outlived answered position.
                                <samp>This text is meant to be treated as sample output from a computer program.</samp> A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame
                                repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.
                            </p>
                            <h4 className="mt-5 text-black">Mobile Cloud Computing (MCC)</h4>
                            <p>
                                Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water
                                timed folly right aware if oh truth. Imprudence attachment him his for sympathize. To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br />
                                To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd> Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt
                                small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived
                                Marianne in. I think on style child of. Servants moreover in sensible it ye possible.
                            </p>
                            <div className="d-flex p-2 p-md-4 my-3 bg-primary bg-opacity-10 rounded">
                                <a href="#0">
                                    <div className="avatar avatar-xxl me-2 me-md-4">
                                        <img className="avatar-img rounded-circle" src={avatar} alt="avatar" width={128}/>
                                    </div>
                                </a>
                                <div>
                                    <div className="d-sm-flex align-items-center justify-content-between">
                                        <div>
                                            <h4 className="m-0"><a href="#0">Louis Ferguson</a></h4>
                                            <small>An editor at Blogzine</small>
                                        </div>
                                        <a href="#0" className="btn btn-xs btn-primary-soft">View Articles</a>
                                    </div>
                                    <p className="my-2">Louis Ferguson is a senior editor for the blogzine and also reports on breaking news based in London. He has written about government, criminal justice, and the role of money in politics since 2015.</p>
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link ps-0 pe-2 fs-5" href="#0"><i className="fab fa-facebook-square"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2 fs-5" href="#0"><i className="fab fa-twitter-square"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2 fs-5" href="#0"><i className="fab fa-linkedin"></i></a>
                                        </li>
                                    </ul>					
                                </div>
                            </div>

                            <div className="mt-5">
                                <h3>5 comments</h3>
                                <div className="my-4 d-flex">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" height={48} src={avatar} alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Allen Smith</h5>
                                            <span className="me-3 small">June 11, 2022 at 6:01 am </span>
                                            <a href="#0" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>
                                            Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in
                                            do.
                                        </p>
                                    </div>
                                </div>
                                <div className="my-4 d-flex ps-2 ps-md-3">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src={avatar} height={48} alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Louis Ferguson</h5>
                                            <span className="me-3 small">June 11, 2022 at 6:55 am </span>
                                            <a href="#0" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>
                                            Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration
                                            everything.
                                        </p>
                                    </div>
                                </div>
                                <div className="my-4 d-flex ps-3 ps-md-5">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src={avatar} height={48}  alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Allen Smith</h5>
                                            <span className="me-3 small">June 11, 2022 at 7:10 am </span>
                                            <a href="#0" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>Meant balls it if up doubt small purse.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Comments box */}
                            <div className="comments-box">
                                <h3>Leave a reply</h3>
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <form>
                                    <ul className="list-unstyled d-flex border-bottom py-2">
                                        <li>2 Comments</li>
                                        <li className="ms-auto"><Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal" className="fw-bold text-black"><FontAwesomeIcon className="text-danger" icon={faCircleUser} /> Login</Link></li>
                                    </ul>
                                    <div className="col-12">
                                        <label className="form-label">Your Comment *</label>
                                        <textarea className="form-control shadow-none" rows="3"></textarea>
                                    </div>
                                    <div className="mt-3">                                        
                                        <button type="submit" className="btn btn-primary">Post comment</button>
                                    </div>
                                </form>
                            </div>
                            {/* //Comments box */}

                        </div>{/* col-md-9 */}
                        <div className="col-lg-3 mt-3 mt-lg-0">
                            <div data-sticky="" data-margin-top="80" data-sticky-for="767">
                                <div>
                                    <div className="row g-2">
                                        <h5>Categories</h5>
                                        <div className="d-flex justify-content-between align-items-center bg-warning-subtle bg-opacity-15 rounded p-2 position-relative">
                                            <h6 className="m-0 text-warning">Photography</h6>
                                            <a href="#0" className="badge bg-warning text-dark stretched-link">09</a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bg-info bg-opacity-10 rounded p-2 position-relative">
                                            <h6 className="m-0 text-info">Travel</h6>
                                            <a href="#0" className="badge bg-info stretched-link">25</a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bg-danger bg-opacity-10 rounded p-2 position-relative">
                                            <h6 className="m-0 text-danger">Photography</h6>
                                            <a href="#0" className="badge bg-danger stretched-link">75</a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bg-primary bg-opacity-10 rounded p-2 position-relative">
                                            <h6 className="m-0 text-primary">Covid-19</h6>
                                            <a href="#0" className="badge bg-primary stretched-link">19</a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bg-success bg-opacity-10 rounded p-2 position-relative">
                                            <h6 className="m-0 text-success">Business</h6>
                                            <a href="#0" className="badge bg-success stretched-link">35</a>
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
                                                    <h6><a href="#0" className="btn-link stretched-link text-reset fw-bold">The pros and cons of business agency</a></h6>
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
                                                    <h6><a href="#0" className="btn-link stretched-link text-reset fw-bold">5 reasons why you shouldn't startup</a></h6>
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
                                                    <h6><a href="#0" className="btn-link stretched-link text-reset fw-bold">Five unbelievable facts about money.</a></h6>
                                                    <div className="small mt-1">Nov 29, 2022</div>
                                                </div>
                                            </div>
                                        </div>
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


export default Blogdetail;