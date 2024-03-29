import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import logos from "../../assets/img/PathForge.png"
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    } else{
      setIsAuth(false);
    }
    // eslint-disable-next-line
  }, [])

  const handleLogin = () => {
    navigate("/login")
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logos} alt="Logo" style={{ width: '190px', height: 'auto' }}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/AI roadmap" className={activeLink === 'AI roadmap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>AI Roadmap</Nav.Link>
              <Nav.Link href="/course-planner" className={activeLink === 'course-planner' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('course-planner')}>Course Planner</Nav.Link>
              <Nav.Link href="/Ai-chat" className={activeLink === 'Ai-chat' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Ai-chat')}>AI Helper</Nav.Link>
              </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
              {isAuth?<div>
                <button onClick={handleLogout}>LogOut</button>
              </div>:<button onClick={handleLogin}>Login</button>}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  )
}
