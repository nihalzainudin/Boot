import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function FilmographyPage() {
  const videos = [
    {
      src: '/videos/The Scale of Loss.mp4',
      description: '2025 | Thalaimarai | TBD'
    },
    {
      src: '/videos/The Scale of Loss.mp4',
      description: '2025 | The Scale of Loss | 6 min | HD 4:3 | Stereo'
    },
    {
      src: '/videos/b.mp4',
      description: '2023 | Lives of Hastings | Visual Arts | HD 1.85 | Stereo'
    },
    {
      src: '/videos/c.mp4',
      description: '2022 | Al - Jumuah | 7 min | HD 16:9  | Stereo'
    },
    {
      src: '/videos/d.mp4',
      description: '2020 | Synthetic Syndrome | 2:31min | 8mm | Stereo'
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  // Helper: extract title from video src
  const getTitle = (video) => {
    if (!video) return '';
    const fileName = video.src.substring(video.src.lastIndexOf('/') + 1);
    return fileName.split('.')[0];
  };

  const slidePanelStyle = {
    position: 'fixed',
    top: '90px',
    right: 0,
    width: '43%',
    height: 'calc(100% - 90px)',
    backgroundColor: '#111',
    zIndex: 1000,
    transition: 'transform 0.5s ease',
    transform: selectedVideo ? 'translateX(0)' : 'translateX(100%)',
    overflowY: 'auto',
    padding: '15px',
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px'
  };

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh', position: 'relative' }}>
      {/* Embedded style for custom scrollbar */}
      <style>
        {`
          .slide-panel::-webkit-scrollbar {
            width: 10px;
          }
          .slide-panel::-webkit-scrollbar-track {
            background: #111;
          }
          .slide-panel::-webkit-scrollbar-thumb {
            background-color: #444;
            border-radius: 10px;
            border: 3px solid #111;
          }
        `}
      </style>
      {/* Sticky header for Filmography title */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1100, backgroundColor: 'black' }}>
        <Row style={{ height: '35px' }}></Row>
        <Row>
          <Col>
            <div style={{ color: 'white', padding: '15px', fontFamily: 'Garamond' }}>
              <h2 style={{ textAlign: 'left', fontSize: '120%', fontWeight: '900' }}>Filmography</h2>
            </div>
          </Col>
        </Row>
      </div>
      {/* Video cards grid wrapped in a container that adjusts width */}
      <div style={{ transition: 'width 0.5s ease', width: selectedVideo ? '57%' : '100%' }}>
        <Row className="g-0" style={{ padding: '0' }}>
          {videos.map((video, idx) => (
            <Col 
              key={idx} 
              xs={12} 
              sm={selectedVideo ? 12 : 6} 
              md={selectedVideo ? 6 : 4} 
              lg={selectedVideo ? 6 : 3}
              style={{ padding: '0' }}
            >
              <Card
                onClick={() => setSelectedVideo(video)}
                style={{
                  backgroundColor: '#222',
                  border: 'none',
                  cursor: 'pointer',
                  transform: selectedVideo ? 'scale(0.65)' : 'scale(0.8)',
                  transformOrigin: 'top left',
                  transition: 'all 0.5s ease',
                  margin: '0'
                }}
              >
                <Card.Body
                  style={{
                    padding: 0,
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    overflow: 'hidden'
                  }}
                >
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', display: 'block' }}
                  />
                </Card.Body>
                <Card.Footer
                  style={{
                    textAlign: 'center',
                    padding: '10px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px'
                  }}
                >
                  <p style={{ color: 'white', fontFamily: 'Garamond', margin: 0, fontSize: '90%' }}>
                    {video.description}
                  </p>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* Sliding panel overlay - slider style remains unchanged */}
      <div className="slide-panel" style={slidePanelStyle}>
        {selectedVideo ? (
          <>
            <Row>
              <Col>
                <div style={{ color: 'white', fontFamily: 'Garamond', fontSize: '24px', marginBottom: '15px' }}>
                  {getTitle(selectedVideo)}
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <span 
                  onClick={() => setSelectedVideo(null)}
                  style={{ 
                    color: 'grey',
                    fontSize: '22px',
                    cursor: 'pointer',
                    userSelect: 'none',
                    position: 'relative',
                    bottom: '5px'
                  }}
                >
                  &times;
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <video
                  src={selectedVideo.src}
                  controls
                  controlsList="nodownload"
                  style={{ width: '100%', display: 'block' }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ color: 'white', fontFamily: 'Garamond', marginTop: '15px' }}>
                  {selectedVideo.description}
                </p>
              </Col>
            </Row>
          </>
        ) : (
          <div style={{ color: 'white', fontFamily: 'Garamond', padding: '15px' }}>
            <p>Select a video to view details.</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default FilmographyPage;