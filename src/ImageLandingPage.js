import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function ImageLandingPage() {
  const location = useLocation();
  const { src } = location.state || { src: '/images/building.jpg' };

  // Extract the filename (without extension) as the title
  const fileName = src.substring(src.lastIndexOf('/') + 1);
  const title = fileName.split('.')[0];
  const description = `This is the ${title} image.`;

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
                {title}
              </div>
            </Col>
          </Row>
          {/* Horizontal row: the image */}
          <Row>
            <Col>
              <Image
                src={src}
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
            {description}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageLandingPage;