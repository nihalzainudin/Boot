import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
// import ImageLandingPage from './ImageLandingPage';
import AboutPage from './AboutPage';
import SoundPage from './SoundPage';
import FilmographyPage from './FilmographyPage';
import Filmography1Page from './Filmography1Page'; // New import for Filmography1Page
import PaintingsPage from './PaintingsPage';
import ContactPage from './ContactPage';
// import BlogPage from './BlogPage';
import VideoLandingPage from './VideoLandingPage';

function App() {
  const location = useLocation();
  const isPaintingsPage = location.pathname === '/paintings';
  const isHomePage = location.pathname === '/';

  // Set the text color based on the current page.
  const textColor = isPaintingsPage ? 'black' : 'white';

  // Apply different container background styles:
  // - For PaintingsPage, use bg_paintings.jpg.
  // - For HomePage, use a solid black background.
  // - For other pages, use bg_1.jpeg.
  const containerStyle = isPaintingsPage
    ? {
        backgroundImage: "url('/images/bg_paintings.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }
    : isHomePage
      ? {
          backgroundColor: 'black',
          minHeight: '100vh'
        }
      : {
          backgroundImage: "url('/images/bg_1.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        };

  return (
    <Container fluid style={containerStyle}>
      <Row>
        {/* Side panel */}
        <Col
          md={2}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            // For homepage, use bg_1.jpeg; for others, keep it transparent.
            backgroundImage: isHomePage ? "url('/images/bg_1.jpeg')" : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
              Samantha Keely Smith
            </h2>
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/"
                style={{ color: textColor, padding: '5px 0', fontFamily: 'Garamond' }}
              >
                Projects
              </Nav.Link>
              <div style={{ marginLeft: '15px' }}>
                <Nav.Link
                  as={Link}
                  to="/sound"
                  style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                >
                  Sound
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/filmography"
                  style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                >
                  Filmography
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/filmography1"
                  style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                >
                  Filmography_1
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/paintings"
                  style={{ color: textColor, padding: '2px 0', fontFamily: 'Garamond' }}
                >
                  Paintings
                </Nav.Link>
              </div>
              <Nav.Link
                as={Link}
                to="/contact"
                style={{ color: textColor, padding: '5px 0', fontFamily: 'Garamond' }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                style={{ color: textColor, padding: '5px 0', fontFamily: 'Garamond' }}
              >
                About
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        {/* Main content offset by fixed side panel */}
        <Col md={{ span: 10, offset: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recent-works" element={<div style={{ color: 'white', padding: '15px' }}><h1>Recent Works</h1></div>} />
            <Route path="/sound" element={<SoundPage />} />
            <Route path="/filmography" element={<FilmographyPage />} />
            <Route path="/filmography1" element={<Filmography1Page />} />
            <Route path="/paintings" element={<PaintingsPage />} />
            {/* <Route path="/blog" element={<BlogPage />} /> */}
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