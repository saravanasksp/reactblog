import "@fontsource/rubik"; 
import "@fontsource/rubik/400.css"; 
import "@fontsource/nunito-sans"; 
import "@fontsource/nunito-sans/400.css"; 
import "@fontsource/nunito-sans/400-italic.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import './Style.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Navbar from './components/navbar';
import About from "./components/about";
import Blog from "./components/blog";
import Blogdetail from "./components/blog-detail";
import Login from "./components/login";
//import Protected from "./components/protected";
function App() {  
  let isAuthenticated = false
  if(localStorage.getItem("tokenid")) {
    isAuthenticated = true
  }
    return (
      <>
      <Router>
            <Navbar />
            <Routes>              
             <Route path="/" element={<Home />} />              
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-detail" element={<Blogdetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={isAuthenticated ? <Navigate replace to="/" /> : <Login />} /> 
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </Router>
      </>
    );
}

export default App;
