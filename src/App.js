import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SoundPage from './SoundPage';
import FilmographyPage from './FilmographyPage';
import PaintingsPage from './PaintingsPage';
import ContactPage from './ContactPage';
import VideoLandingPage from './VideoLandingPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isPaintingsPage = location.pathname === '/PAINTINGS';
  const isMobile = window.innerWidth < 768;

  // Update the viewport height custom property on load and resize
  // useEffect(() => {
  //   const setVhProperty = () => {
  //     const vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   };
  //   setVhProperty();
  //   window.addEventListener('resize', setVhProperty);
  //   return () => window.removeEventListener('resize', setVhProperty);
  // }, []);

  // For non-paintings pages, if it's the home page then always use the fixed background attachment
  const containerStyle = isPaintingsPage
    ? {
        backgroundImage: "url('/images/bg_paintings.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(var(--vh, 1vh) * 100)'
      }
    : isHomePage
    ? {
        backgroundImage: "url('/images/background_image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',  // Force fixed background for home page
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(var(--vh, 1vh) * 100)'
      }
    : {
        backgroundImage: "url('/images/background_image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        ...(isMobile && { height: 'auto' })
      };

  // Use black text for PaintingsPage; otherwise use white.
  const textColor = isPaintingsPage ? 'black' : 'white';

  // State for toggling submenus
  const [showProjectsSub, setShowProjectsSub] = useState(false);
  const [mobileProjectsToggle, setMobileProjectsToggle] = useState(false);

  // State to track scroll position for mobile Navbar background
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container fluid style={containerStyle}>
      {/* Mobile – Responsive Navbar shown on screens smaller than md */}
      <div className="d-md-none">
        <Navbar
          fixed="top"
          // bg={scrolled ? 'dark' : 'transparent'}
          // bg='dark'
          style={{ backgroundColor: 'rgb(47 47 47 / 80%)' }}  
          variant="dark"
          expand="md"
          className="mobile-nav"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">FY</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setMobileProjectsToggle(false)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => {
                    if (location.pathname !== "/") {
                      navigate("/");
                    }
                    setMobileProjectsToggle(!mobileProjectsToggle);
                  }}
                >
                  PROJECTS
                </Nav.Link>
                {mobileProjectsToggle && (
                  <>
                    <Nav.Link as={Link} to="/SOUND">SOUND</Nav.Link>
                    <Nav.Link as={Link} to="/FILMOGRAPHY">FILMOGRAPHY</Nav.Link>
                    <Nav.Link as={Link} to="/PAINTINGS">PAINTINGS</Nav.Link>
                  </>
                )}
                <Nav.Link as={Link} to="/CONTACT">CONTACT</Nav.Link>
                <Nav.Link as={Link} to="/ABOUT">ABOUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Spacer div for mobile – its height is controlled via CSS media queries */}
      {isMobile && (
        <div className={`content-spacer ${mobileProjectsToggle ? 'expanded' : ''}`} />
      )}

      <Row>
        {/* Desktop – Side panel for medium and larger screens */}
        <Col
          md={2}
          className="d-none d-md-block"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'transparent',
            height: '100vh'
          }}
        >
          <div
            style={{
              color: textColor,
              padding: '15px',
              fontFamily: 'Glacial Indifference, sans-serif'
            }}
          >
            <h2
              style={{
                fontFamily: 'Ahsing',
                marginBottom: '60px',
                fontSize: isMobile ? '450%' : '300%'
              }}
            >
              FY
            </h2>
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-option"
                onClick={() => {
                  if (location.pathname === "/") {
                    setShowProjectsSub(!showProjectsSub);
                  } else {
                    setShowProjectsSub(true);
                    navigate("/");
                  }
                }}
                style={{
                  color: textColor,
                  padding: '5px 0',
                  fontFamily: 'Glacial Indifference, sans-serif',
                  cursor: 'pointer',
                  fontSize: '0.8rem' // reduced font size
                }}
              >
                PROJECTS
              </Nav.Link>
              {showProjectsSub && (
                <div style={{ marginLeft: '15px' }}>
                  <Nav.Link
                    as={Link}
                    to="/SOUND"
                    className="nav-option"
                    style={{
                      color: textColor,
                      padding: '2px 0',
                      fontFamily: 'Glacial Indifference, sans-serif',
                      fontSize: '0.8rem'  // reduced font size
                    }}
                  >
                    SOUND
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/FILMOGRAPHY"
                    className="nav-option"
                    style={{
                      color: textColor,
                      padding: '2px 0',
                      fontFamily: 'Glacial Indifference, sans-serif',
                      fontSize: '0.8rem'  // reduced font size
                    }}
                  >
                    FILMOGRAPHY
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/PAINTINGS"
                    className="nav-option"
                    style={{
                      color: textColor,
                      padding: '2px 0',
                      fontFamily: 'Glacial Indifference, sans-serif',
                      fontSize: '0.8rem'  // reduced font size
                    }}
                  >
                    PAINTINGS
                  </Nav.Link>
                </div>
              )}
              <Nav.Link
                as={Link}
                to="/CONTACT"
                className="nav-option"
                style={{
                  color: textColor,
                  padding: '5px 0',
                  fontFamily: 'Glacial Indifference, sans-serif',
                  fontSize: '0.8rem'  // reduced font size
                }}
              >
                CONTACT
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/ABOUT"
                className="nav-option"
                style={{
                  color: textColor,
                  fontWeight: 'lighter',
                  padding: '5px 0',
                  fontFamily: 'Glacial Indifference, sans-serif',
                  fontSize: '0.8rem'  // reduced font size
                }}
              >
                ABOUT
              </Nav.Link>
            </Nav>
            <div
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                fontFamily: 'Glacial Indifference, sans-serif'
              }}
            >
              <a
                href="mailto:yussufarzana@gmail.com"
                className="email-icon"
                title="Send Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </a>
            </div>
          </div>
        </Col>

        {/* Main content – occupies full width on mobile, offset on desktop */}
        <Col
          xs={12}
          md={{ span: 10, offset: 2 }}
          style={{
            // When expanded, use 250px; otherwise, use 56px (or adjust to your preferred height)
            //marginTop: isMobile ? (mobileProjectsToggle ? '250px' : '56px') : '0'
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/recent-works"
              element={
                <div style={{ color: 'white', padding: '15px' }}>
                  <h1>Recent Works</h1>
                </div>
              }
            />
            <Route path="/SOUND" element={<SoundPage />} />
            <Route path="/FILMOGRAPHY" element={<FilmographyPage />} />
            <Route path="/PAINTINGS" element={<PaintingsPage />} />
            <Route path="/CONTACT" element={<ContactPage />} />
            <Route path="/ABOUT" element={<AboutPage />} />
            <Route path="/video" element={<VideoLandingPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;