import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
// import ImageLandingPage from './ImageLandingPage';
import AboutPage from './AboutPage';
import SoundPage from './SoundPage';
import FilmographyPage from './FilmographyPage';
import PaintingsPage from './PaintingsPage';
import ContactPage from './ContactPage';
// import BlogPage from './BlogPage';
import VideoLandingPage from './VideoLandingPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isPaintingsPage = location.pathname === '/paintings';
  const isHomePage = location.pathname === '/';

  const containerStyle = isPaintingsPage
    ? {
        backgroundImage: "url('/images/bg_paintings.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }
    : {
        backgroundImage: "url('/images/background_image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',  // Fixes the image relative to the viewport
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      };

  // Use black text for PaintingsPage; otherwise use white.
  const textColor = isPaintingsPage ? 'black' : 'white';

  // State to toggle the sub-menu under "Projects"
  const [showProjectsSub, setShowProjectsSub] = useState(false);

  return (
    <Container fluid style={containerStyle}>
      <Row>
        {/* Side panel with transparent background */}
        <Col
          md={2}
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
              marginTop: '30px',
              fontFamily: 'Garamond'
            }}
          >
            <h2 style={{ fontFamily: 'Garamond', marginBottom: '30px' }}>
              Farzana Yussuf
            </h2>
            <Nav className="flex-column">
              {/* Projects acts as a clickable header for the sub-menu */}
              <Nav.Link
                as={Link}
                to="/"
                className="nav-option"
                onClick={() => {
                  if (location.pathname === "/") {
                    // Toggle sub-menu if already on homepage
                    setShowProjectsSub(!showProjectsSub);
                  } else {
                    setShowProjectsSub(true);
                    navigate("/");
                  }
                }}
                style={{
                  color: textColor,
                  padding: '5px 0',
                  fontFamily: 'Garamond',
                  cursor: 'pointer'
                }}
              >
                Projects
              </Nav.Link>
              {showProjectsSub && (
                <div style={{ marginLeft: '15px' }}>
                  <Nav.Link
                    as={Link}
                    to="/sound"
                    className="nav-option"
                    style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                  >
                    Sound
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/filmography"
                    className="nav-option"
                    style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                  >
                    Filmography
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/paintings"
                    className="nav-option"
                    style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                  >
                    Paintings
                  </Nav.Link>
                </div>
              )}
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-option"
                style={{ color: textColor, padding: '5px 0', fontFamily: 'Garamond' }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-option"
                style={{ color: textColor, padding: '5px 0', fontFamily: 'Garamond' }}
              >
                About
              </Nav.Link>
            </Nav>
            <div
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                fontFamily: 'Garamond'
              }}
            >
              <a
                href="mailto:yussufarzana@gmail.com"
                className="email-icon"
                title="Send Email"
              >
                {/* Minimalistic white paper plane icon with reduced size */}
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
        {/* Main content offset by fixed side panel */}
        <Col md={{ span: 10, offset: 2 }}>
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
            <Route path="/sound" element={<SoundPage />} />
            <Route path="/filmography" element={<FilmographyPage />} />
            <Route path="/paintings" element={<PaintingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/video" element={<VideoLandingPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;