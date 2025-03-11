import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import HomePage from './HomePage';

function App() {
  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Row>
        <Col md={2}>
          <Nav defaultActiveKey="/home" className="flex-column p-3">
            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white' }}>Contact</Nav.Link>
            {/* ...additional menu items... */}
          </Nav>
        </Col>
        <Col md={10}>
          <HomePage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;