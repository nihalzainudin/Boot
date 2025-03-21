import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PaintingsPage() {
  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Top padding row (same as AboutPage) */}
      <Row style={{ height: '35px' }}></Row>
      {/* Page title */}
      <Row>
        <Col>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Garamond' }}>
            <h2 style={{ textAlign: 'left', fontSize: '120%', fontWeight: '900' }}>Paintings</h2>
          </div>
        </Col>
      </Row>
      {/* Additional content can be added here */}
    </Container>
  );
}

export default PaintingsPage;