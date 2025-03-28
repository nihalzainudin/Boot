import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function VideoLandingPage() {
  const location = useLocation();
  // Expecting src and description in state
  const { src, description } = location.state || { src: '/videos/a.mp4', description: '' };

  // Extract filename (without extension) as title
  const fileName = src.substring(src.lastIndexOf('/') + 1);
  const title = fileName.split('.')[0];

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Top padding row */}
      <Row style={{ height: '30px' }}></Row>
      <Row style={{ alignItems: 'flex-start' }}>
        {/* Left Column: Video Player */}
        <Col md={8}>
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
          <Row>
            <Col>
              <video
                src={src}
                controls
                controlsList="nodownload"
                style={{ width: '100%', display: 'block' }}
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

export default VideoLandingPage;