import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleArrowDown, faHourglassStart, faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from "./footer";
import BannerBgImg1 from "../images/pixel-bg.jpg";
import avatar from "../images/avatar.png";
import fishpixel from "../images/fish-pixel.jpg";

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allCategories, setAllCategories] = useState([]); // Initialize allCategories state

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch posts
                const postsResponse = await fetch('http://localhost:5000/api/posts');
                const postsData = await postsResponse.json();
                setPosts(postsData);

                // Fetch categories
                const categoriesResponse = await fetch('http://localhost:5000/api/categories');
                const categoriesData = await categoriesResponse.json();
                setAllCategories(categoriesData);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center py-5">Loading posts...</div>;
    }

    const featuredPost = posts.length > 0 ? posts[0] : null;
    const otherPosts = posts.length > 1 ? posts.slice(1) : [];

    const getCategoryColor = (category) => {
        const colors = {
            'Technology': 'warning',
            'Business': 'success',
            'Lifestyle': 'danger',
            'Travel': 'info',
            'Sports': 'primary'
        };
        return colors[category] || 'secondary';
    };

    return (
        <div>
            <section className="pt-4 pb-0 card-grid latest-posts">
                <div className="container">
                    <div className="row g-4">
                        {featuredPost && (
                            <div className="col-lg-6">
                                <div className="card card-overlay-bottom card-grid-lg card-bg-scale" 
                                    style={{backgroundImage: `url(${BannerBgImg1})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                                    <span className="card-featured" title="Featured post"><FontAwesomeIcon icon={faStar} /></span>
                                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                                        <div className="w-100 mt-auto">
                                            <span className={`badge text-bg-${getCategoryColor(featuredPost.categories[0])} mb-2`}>
                                                <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />
                                                {featuredPost.categories[0]}
                                            </span>
                                            <h2 className="text-white h1">
                                                <Link to={`/blog-detail/${featuredPost.id}`} className="btn-link stretched-link text-reset">
                                                    {featuredPost.title}
                                                </Link>
                                            </h2>
                                            <p className="text-white">
                                                {featuredPost.content.substring(0, 100)}...
                                            </p>
                                            <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center text-white position-relative">
                                                            <div className="avatar avatar-sm">
                                                                <img width={40} className="avatar-img rounded-circle" src={avatar} alt="avatar"/>
                                                            </div>
                                                            <span className="ms-3">by <Link to="#" className="stretched-link text-reset btn-link">{featuredPost.author}</Link></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">{new Date(featuredPost.createdAt).toLocaleDateString()}</li>
                                                <li className="nav-item">{featuredPost.readTime}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="col-lg-6">
                            <div className="row g-4">
                                {otherPosts.slice(0, 3).map((post, index) => (
                                    <div className={index === 0 ? 'col-12' : 'col-md-6'} key={post.id}>
                                        <div className="card card-overlay-bottom card-grid-sm card-bg-scale" 
                                            style={{backgroundImage: `url(${BannerBgImg1})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                                            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                                                <div className="w-100 mt-auto">
                                                    <span className={`badge text-bg-${getCategoryColor(post.categories[0])} mb-2`}>
                                                        <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />
                                                        {post.categories[0]}
                                                    </span>
                                                    <h4 className="text-white">
                                                        <Link to={`/blog-detail/${post.id}`} className="btn-link stretched-link text-reset">
                                                            {post.title}
                                                        </Link>
                                                    </h4>
                                                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                                                        <li className="nav-item position-relative">
                                                            <div className="nav-link">by <Link to="#" className="stretched-link text-reset btn-link">{post.author}</Link></div>
                                                        </li>
                                                        <li className="nav-item">{new Date(post.createdAt).toLocaleDateString()}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="position-relative mt-5 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="mb-4">
                                <h2 className="m-0 text-black"><FontAwesomeIcon className="me-2" icon={faHourglassStart} />Today's top highlights</h2>
                                <p>Latest breaking news, pictures, videos, and special reports</p>
                            </div>
                            <div className="row gy-4">
                                {otherPosts.slice(3).map((post, index) => (
                                    <div className="col-sm-6" key={post.id}>
                                        <div className="card">
                                            <div className="position-relative">
                                                <img className="card-img" src={fishpixel} alt="card-img"/>
                                                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                    <div className="w-100 mt-auto">
                                                        <span className={`badge text-bg-${getCategoryColor(post.categories[0])} mb-2`}>
                                                            <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircle} />
                                                            {post.categories[0]}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body px-0 py-0 pt-md-3">
                                                <h4 className="card-title mt-2">
                                                    <Link to={`/blog-detail/${post.id}`} className="btn-link text-reset fw-bold">
                                                        {post.title}
                                                    </Link>
                                                </h4>
                                                <p className="card-text">
                                                    {post.content.substring(0, 150)}...
                                                </p>
                                                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                    <li className="nav-item">
                                                        <div className="nav-link">
                                                            <div className="d-flex align-items-center position-relative">
                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src={avatar} alt="avatar" width={35}/>
                                                                </div>
                                                                <span className="ms-3">by <Link to="#" className="stretched-link text-reset btn-link">{post.author}</Link></span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">{new Date(post.createdAt).toLocaleDateString()}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-12 text-center my-3 my-lg-5">
                                    <button type="button" className="btn btn-primary-soft fw-semibold">
                                        Load more post <FontAwesomeIcon className="me-2 small fw-bold" icon={faCircleArrowDown} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 mt-lg-0">
                            <div data-sticky="" data-margin-top="80" data-sticky-for="767">
                                {/* Trending topics widget START */}
                                <div>
                                    <h4 className="mt-0 mb-2 mb-lg-4 text-black widget-title">Trending topics</h4>
                                    {allCategories.slice(0, 5).map((category, index) => (
                                        <div key={index} className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4" 
                                            style={{backgroundImage:`url(${fishpixel})`,backgroundPosition:'center left',backgroundSize:'cover'}}>
                                            <div className="p-3">
                                                <Link to="#" className="stretched-link btn-link fw-bold text-white h5">{category}</Link>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center mt-3">
                                        <Link to="#" className="fw-bold text-body text-primary-hover"><u>View all categories</u></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-12">
                                        <h4 className="mt-4 mb-3 text-black widget-title">Recent post</h4>
                                        {posts.slice(0, 4).map((post, index) => (
                                            <div key={index} className="card mb-3">
                                                <div className="row g-3">
                                                    <div className="col-4">
                                                        <img className="rounded img-fluid" src={BannerBgImg1} alt="BannerBgImg1"/>
                                                    </div>
                                                    <div className="col-8">
                                                        <h6>
                                                            <Link to={`/blog-detail/${post.id}`} className="btn-link stretched-link text-reset fw-bold">
                                                                {post.title}
                                                            </Link>
                                                        </h6>
                                                        <div className="small mt-1">
                                                            {new Date(post.createdAt).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12 my-3 my-md-5">
                                        <Link to="#" className="d-block card-img-flash">
                                            <img src={fishpixel} className="img-fluid" alt=""/>
                                        </Link>
                                        <div className="smaller text-end mt-2">ads via <Link to="#" className="text-body"><u>Bootstrap</u></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Main;