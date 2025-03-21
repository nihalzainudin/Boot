import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ImageLandingPage from './ImageLandingPage';
import AboutPage from './AboutPage';
import SoundPage from './SoundPage';
import FilmographyPage from './FilmographyPage';
import BlogPage from './BlogPage';          // new import
import PaintingsPage from './PaintingsPage';  // new import
import ContactPage from './ContactPage';      // new import

function App() {
  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Row>
        <Col
          md={2}
          style={{
            backgroundImage: "url('/images/bg_1.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
          }}
        >
          <div
            style={{
              color: 'white',
              padding: '15px',
              marginTop: '30px',
              fontFamily: 'Garamond'
            }}
          >
            <h2 style={{ fontFamily: 'Garamond', marginBottom: '30px' }}>
              Samantha Keely Smith
            </h2>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" style={{ color: 'white', padding: '5px 0', fontFamily: 'Garamond' }}>
                Projects
              </Nav.Link>
              <div style={{ marginLeft: '15px' }}>
                <Nav.Link as={Link} to="/sound" style={{ color: 'white', padding: '2px 0', fontFamily: 'Garamond' }}>
                  Sound
                </Nav.Link>
                <Nav.Link as={Link} to="/filmography" style={{ color: 'white', padding: '2px 0', fontFamily: 'Garamond' }}>
                  Filmography
                </Nav.Link>
                <Nav.Link as={Link} to="/paintings" style={{ color: 'white', padding: '2px 0', fontFamily: 'Garamond' }}>
                  Paintings
                </Nav.Link>
              </div>
              <Nav.Link as={Link} to="/blog" style={{ color: 'white', padding: '5px 0', fontFamily: 'Garamond' }}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'white', padding: '5px 0', fontFamily: 'Garamond' }}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'white', padding: '5px 0', fontFamily: 'Garamond' }}>
                About
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recent-works" element={<div style={{ color: 'white', padding: '15px' }}><h1>Recent Works</h1></div>} />
            <Route path="/sound" element={<SoundPage />} />
            <Route path="/filmography" element={<FilmographyPage />} />
            <Route path="/paintings" element={<PaintingsPage />} />  {/* new route */}
            <Route path="/blog" element={<BlogPage />} />              {/* new route */}
            <Route path="/contact" element={<ContactPage />} />        {/* new route */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/image" element={<ImageLandingPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;