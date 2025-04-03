import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FilmographyPage() {
  const videos = [
    {
      src: '/videos/The Scale of Loss.mp4',
      description: '2025 | Thalaimarai | TBD',
      longDescription:
        "In a busy city intersection, a small figure moves through the flow of life, barely noticed. Their voice breaks through the noise, a weight of a phone call—the loss of a loved one. As their grief grows, a stark contrast to the indifferent rhythm of the city. The tilt-shift effect transforms the scene into a miniature world, emphasizing the overwhelming detachment and indifference of the surroundings. Through this distant perspective and intimate voiceover, the film captures the fragile, isolating experience of mourning in a world that never stops."
    },
    {
      src: '/videos/The Scale of Loss.mp4',
      description: '2025 | The Scale of Loss | 6 min | HD 4:3 | Stereo',
      longDescription:
        "In a busy city intersection, a small figure moves through the flow of life, barely noticed. Their voice breaks through the noise, a weight of a phone call—the loss of a loved one. As their grief grows, a stark contrast to the indifferent rhythm of the city. The tilt-shift effect transforms the scene into a miniature world, emphasizing the overwhelming detachment and indifference of the surroundings. Through this distant perspective and intimate voiceover, the film captures the fragile, isolating experience of mourning in a world that never stops."
    },
    {
      src: '/videos/b.mp4',
      description: '2023 | Lives of Hastings | Visual Arts | HD 1.85 | Stereo'
    },
    {
      src: '/videos/c.mp4',
      description: '2022 | Al - Jumuah | 7 min | HD 16:9 | Stereo',
      longDescription:
        "A father and son, reeling from the death of their mother, seek solace in their shared faith and each other. 'AL-JUMUAH' depicts their brief moment of healing before the horrific events of the Christchurch mosque shootings tear them apart forever. This is a stark portrayal of the devastating impact of hate-fueled violence on a family already burdened by grief."
    },
    {
      src: '/videos/d.mp4',
      description: '2020 | Synthetic Syndrome | 2:31 min | 8mm | Stereo',
      longDescription:
        "Synthetic Syndrome is a 2:31 minute 8mm experimental film that delves into the frustrating cycle of creative stagnation. Through the grainy, nostalgic lens of 8mm, the film observes an artist trapped in a loop of failed attempts. Driven by an insatiable need to create something novel, he repeatedly confronts the blank canvas, the unformed clay, the silent instrument. Each effort, marked by frantic energy and fleeting inspiration, culminates in the same disappointing result: a void. The film's short duration amplifies the artist's escalating frustration, mirroring the fleeting nature of inspiration itself.  The film explores the tension between the yearning for originality and the crushing weight of creative blockage, leaving the audience to ponder the elusive nature of artistic fulfillment."
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  // Helper: split description into year and text.
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
        backgroundColor: 'transparent',
        minHeight: '100vh',
        position: 'relative',
        color: 'white',
        fontFamily: 'Garamond',
        paddingTop: '40px'
      }}
    >
      {/* Vertical list of videos */}
      <Row style={{ padding: '15px' }}>
        <Col>
          <h2 style={{ marginBottom: '30px', fontSize: '120%' }}>Filmography</h2>
          {videos.map((video, idx) => {
            const { year, text } = parseDescription(video.description);
            return (
              <div
                key={idx}
                onClick={() => setSelectedVideo(video)}
                className="video-item"
                style={{ cursor: 'pointer' }}
              >
                <span>{text}</span>
                {year && (
                  <sup style={{ fontSize: '0.75rem', marginLeft: '5px', color: '#B81E1E', fontWeight: 'bold' }}>
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
            {/* Sticky header for video description and close button */}
            <div style={{
                position: 'sticky',
                top: 0,
                backgroundColor: '#111', // solid background
                zIndex: 9999,            // increased z-index
                padding: '15px'
            }}>
              <Row>
                <Col>
                  <div
                    className="video-desc"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      marginBottom: '15px'
                    }}
                  >
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
            </div>

            {/* Rest of the slide-panel content continues here */}
            {selectedVideo.description.includes("Lives of Hastings") ? (
              <>
                <Row>
                  <Col>
                    <div
                      style={{
                        color: 'white',
                        fontSize: '16px',
                        marginBottom: '15px'
                      }}
                    >
                      This project explores homelessness and drug use in Vancouver's Hastings area through a documentary-style approach. It combines visual storytelling with raw, unfiltered photography, capturing candid moments, the stark textures of the urban environment, and the deeply human expressions of those living within it. Where interviews or personal stories were incorporated, they were approached with respect and a commitment to authenticity. These conversations, alongside environmental portraits, were conducted with a non-intrusive approach. Street photography techniques, such as the use of natural light, high-contrast black-and-white shots, or slow shutter speeds to capture the blur of movement, were employed to immerse the viewer in the raw reality of the environment.
                    </div>
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
                <Row>
                  <Col>
                    <div
                      style={{
                        color: 'white',
                        fontSize: '16px',
                        marginTop: '15px',
                        lineHeight: '1.5em'
                      }}
                    >
                      A hybrid approach, merging the evocative nature of double exposure photography with dynamic video installation. The visual component employs double exposure techniques, layering imagery to create a sense of fragmented reality and emotional depth. To further enhance the viewer's immersion, a single video sequence is presented across nine synchronized cubes, arranged within a single screen. This multi-faceted display elongates the perception of depth and distorts spatial awareness, drawing the viewer into the work's intricate layers.

The intended outcome of this project is to challenge existing perceptions, to humanize those who are often dismissed as 'unhoused,' and to document the profound impact of addiction in Vancouver’s Downtown Eastside.

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      src="/images/background_image.jpg"
                      alt="Background"
                      style={{ width: '100%', display: 'block', marginTop: '15px' }}
                    />
                  </Col>
                </Row>
              </>
            ) : (
              <>
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
                {selectedVideo.longDescription && (
                  <Row>
                    <Col>
                      <div
                        style={{
                          color: 'white',
                          fontSize: '16px',
                          marginTop: '15px',
                          lineHeight: '1.5em'
                        }}
                      >
                        {selectedVideo.longDescription}
                      </div>
                    </Col>
                  </Row>
                )}
              </>
            )}
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

export default FilmographyPage;