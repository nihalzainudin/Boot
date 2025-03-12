import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ImageLandingPage() {
  const imageSrc = '/images/building.jpg';
  const imageTitle = 'Building';
  const imageDescription =
    'This is a dummy description about the building image which is part of the portfolio.';

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Horizontal grid row for padding */}
      <Row style={{ height: '30px' }}></Row>
      <Row style={{ alignItems: 'flex-start' }}>
        {/* Central Column: Image title and image */}
        <Col md={8}>
          {/* Horizontal row: image title */}
          <Row>
            <Col>
              <div
                style={{
                  color: 'white',
                  padding: '15px',
                  fontFamily: 'Garamond',
                  fontSize: '24px'
                }}
              >
                {imageTitle}
              </div>
            </Col>
          </Row>
          {/* Horizontal row: the image */}
          <Row>
            <Col>
              <Image
                src={imageSrc}
                thumbnail
                style={{ border: 'none', padding: 0 }}
              />
            </Col>
          </Row>
        </Col>
        {/* Right Column: Description */}
        <Col md={4}>
          <div
            style={{
              color: 'white',
              padding: '15px',
              fontFamily: 'Garamond',
              marginTop: '45px'
            }}
          >
            {imageDescription}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageLandingPage;