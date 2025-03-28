import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Filmography1Page() {
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
      description: '2022 | Al - Jumuah | 7 min | HD 16:9 | Stereo'
    },
    {
      src: '/videos/d.mp4',
      description: '2020 | Synthetic Syndrome | 2:31min | 8mm | Stereo'
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  // Parse description into year and remaining text.
  const parseDescription = (description) => {
    const parts = description.split('|').map(s => s.trim());
    if (parts.length > 1) {
      const year = parts[0];
      const text = parts.slice(1).join(' | ');
      return { year, text };
    }
    return { year: '', text: description };
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
    <Container
      fluid
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        position: 'relative',
        color: 'white',
        fontFamily: 'Garamond',
        paddingTop: '50px' // increased padding at the top
      }}
    >
      {/* Vertical list of video descriptions */}
      <Row style={{ padding: '15px' }}>
        <Col>
          <h2 style={{ marginBottom: '30px' }}>Filmography</h2>
          {videos.map((video, idx) => {
            const { year, text } = parseDescription(video.description);
            return (
              <div
                key={idx}
                onClick={() => setSelectedVideo(video)}
                style={{
                  padding: '15px 0', // increased vertical spacing
                  cursor: 'pointer'
                }}
              >
                <span>{text}</span>
                {year && (
                  <sup style={{ fontSize: '0.75rem', marginLeft: '5px', color: 'gray' }}>
                    {year}
                  </sup>
                )}
              </div>
            );
          })}
        </Col>
      </Row>

      {/* Slide panel for video playback */}
      <div className="slide-panel" style={slidePanelStyle}>
        {selectedVideo ? (
          <>
            <Row>
              <Col>
                <div style={{ color: 'white', fontSize: '18px', marginBottom: '15px', whiteSpace: 'nowrap' }}>
                  {selectedVideo.description}
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
                  style={{ width: '100%', maxHeight: '400px', display: 'block' }}
                />
              </Col>
            </Row>
          </>
        ) : (
          <div style={{ padding: '15px' }}>
            <p>Select a video to view details.</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Filmography1Page;