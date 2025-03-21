import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function FilmographyPage() {
  const videos = [
    {
      src: '/videos/a.mp4',
      description: '2025 | The Scale of Loss | 6 min | HD 4:3 | Stereo'
    },
    {
      src: '/videos/b.mp4',
      description: '2024 | Kaazhcha | 6:40 min | Surround 5.1'
    },
    {
      src: '/videos/c.mp4',
      description: '2022 | Al - Jumuah | 7 min | HD 16:9  | Stereo'
    },
    {
      src: '/videos/d.mp4',
      description: '2021 | Bliss | 2:31min | 8mm | Stereo'
    }
  ];

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh', paddingBottom: '30px' }}>
      {/* Embedded Custom CSS for modern styling */}
      <style>
        {`
          .thumbnail-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .thumbnail-card:hover {
            transform: scale(1.03);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.9);
          }
          .thumbnail-footer {
            background-color: #111;
            border-top: none;
            text-align: center;
            padding: 15px;
          }
          .thumbnail-footer p {
            color: white;
            font-family: Garamond, serif;
            margin: 0;
            font-size: 90%;
          }
        `}
      </style>
      {/* Top padding row */}
      <Row style={{ height: '35px' }}></Row>
      {/* Filmography title */}
      <Row>
        <Col>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Garamond' }}>
            <h2 style={{ textAlign: 'left', fontSize: '120%', fontWeight: '900' }}>
              Filmography
            </h2>
          </div>
        </Col>
      </Row>
      {/* Media gallery for videos using Cards with hover scaling */}
      <Row className="justify-content-center" style={{ padding: '15px' }}>
        {videos.map((video, idx) => (
          <Col key={idx} xs={12} md={6} lg={3} style={{ marginBottom: '30px' }}>
            <Card
              className="thumbnail-card"
              style={{
                backgroundColor: '#222',
                border: 'none',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
              }}
            >
              <Card.Body style={{ padding: 0 }}>
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', display: 'block' }}
                />
              </Card.Body>
              <Card.Footer className="thumbnail-footer">
                <p>
                  {video.description}
                </p>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FilmographyPage;