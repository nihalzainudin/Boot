import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FilmographyPage() {
  const videos = [
    {
      src: '/videos/c.mp4',
      description: '2025 | Thalaimarai | TBD',
      title: 'Thalaimarai - Video coming soon',
      longDescription:
        "Set against the backdrop of Chennai, this short experimental documentary explores the often-silenced lives of elders who have been left behind by their families. Through intimate interviews and reflective visuals, the film uncovers stories of abandonment shaped not only by personal circumstances, but by deep-rooted cultural traditions. One such practice—Thalaikoothal, a controversial and still-practiced ritual—serves as a haunting symbol of how care can blur into quiet erasure. Blending memory, myth, and lived experience, the documentary invites viewers to witness aging through the eyes of those forgotten, asking how cultural beliefs shape both the treatment of the elderly and their isolation in later life."
    },
    {
      src: 'https://drive.google.com/file/d/1eNH9WNVyigL0jFRF22wOEF0ooi9LG_Wa/preview',
      description: '2025 | A Veszteség Mértéke | 6 min | HD 4:3 | Stereo',
      title: 'A Veszteség Mértéke (The scale of loss)',
      longDescription:
        "In the heart of a bustling city, one person receives a life-altering phone call. As crowds surge past and traffic hums on, they’re pulled into a quiet grief that no one else seems to notice. The world continues—indifferent, unbothered—while they struggle to process a sudden loss. Shot with a tilt-shift effect that makes the city feel miniature and distant, the film draws a stark contrast between public motion and private mourning. Through an intimate voiceover and quiet visual storytelling, it captures the isolating weight of loss in a place that never slows down."
    },
    {
      description: '2023 | Lives of Hastings | Visual Arts | HD 1.85 | Stereo',
      title: 'Lives of Hastings',
    },
    {
      src: '/videos/c.mp4',
      description: '2022 | Al - Jumuah | 7 min | HD 16:9 | Stereo',
      title: 'Al - Jumuah - Video coming soon',
      longDescription:
        "A father and son, reeling from the death of their mother, seek solace in their shared faith and each other. 'AL-JUMUAH' depicts their brief moment of healing before the horrific events of the Christchurch mosque shootings tear them apart forever. This is a stark portrayal of the devastating impact of hate-fueled violence on a family already burdened by grief."
    },
    {
      src: 'https://drive.google.com/file/d/1gEml9WCKdDj19rbwnuA_u1C8LCQUb7Hg/preview',
      description: '2020 | Synthetic Syndrome | 2:31 min | 8mm | Stereo',
      title: 'Synthetic Syndrome',
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

  // New helper: format title with italic for parentheses content.
  const formatTitle = (title) => {
    if (title.includes("Video coming soon")) {
      const parts = title.split(" - ");
      // Join all segments except the last one
      const nonBold = parts.slice(0, parts.length - 1).join(" - ");
      const boldPart = parts[parts.length - 1];
      return (
        <>
          {nonBold} - <em><strong style={{ fontWeight: '700', fontSize: '12px' }}>{boldPart}</strong></em>
        </>
      );
    }
    // If title uses parentheses formatting, italicize the parenthetical content.
    const titleRegex = /^(.*)\s*\((.*)\)$/;
    const match = title.match(titleRegex);
    if (match) {
      return (
        <>
          {match[1]} <em>({match[2]})</em>
        </>
      );
    }
    return title;
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
    padding: '0px 15px 15px 15px',
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px'
  };

  return (
    <Container
      fluid
      className="filmography-page-container"
      style={{
        backgroundColor: 'transparent',
        minHeight: '100vh',
        position: 'relative',
        color: 'white',
        fontFamily: 'Sans, sans-serif',
        paddingTop: '90px' // default top padding for desktop
      }}
    >
      {/* Vertical list of videos */}
      <Row style={{ padding: '15px' }}>
        <Col>
          <h2 style={{ marginBottom: '30px', fontSize: '120%' }}></h2>
          {videos.map((video, idx) => {
            const { year, text } = parseDescription(video.description);
            return (
              <div
                key={idx}
                onClick={() => setSelectedVideo(video)}
                className="video-item"
                style={{ cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.8rem' }}>{text}</span>
                {year && (
                  <sup
                    style={{
                      fontSize: '0.65rem',
                      marginLeft: '5px',
                      color: '#B81E1E',
                      fontWeight: 'bold'
                    }}
                  >
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
            {/* Header with title */}
            <div style={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#111',
                zIndex: 9999,
                padding: '15px',
                flexShrink: 0
            }}>
              <Row>
                <Col>
                  <div
                    className="video-desc"
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      marginBottom: '15px'
                    }}
                  >
                    {selectedVideo.title ? formatTitle(selectedVideo.title) : (() => {
                      const parts = selectedVideo.description.split('|').map(s => s.trim());
                      return parts.length >= 2 ? parts[1] : selectedVideo.description;
                    })()}
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

            {/* Conditionally render preview */}
            {(selectedVideo.title === 'Thalaimarai - Video coming soon' || selectedVideo.title === 'Al - Jumuah - Video coming soon') ? (
              <>
                {/* Video player not rendered for these titles */}
                {selectedVideo.longDescription && (
                  <Row>
                    <Col>
                      <div
                        style={{
                          color: 'white',
                          fontSize: '13px',
                          marginTop: '15px',
                          lineHeight: '1.5em',
                          textAlign: 'justify' // Ensure justification here
                        }}
                      >
                        {selectedVideo.longDescription}
                      </div>
                    </Col>
                  </Row>
                )}
              </>
            ) : (
              <>
                {selectedVideo.description.includes("Lives of Hastings") ? (
                  <>
                    {/* Video 1 */}
                    <Row>
                      <Col>
                        <iframe
                          src="https://drive.google.com/file/d/15hRAGPaAwEhycdOXmYLGsZTnp82CTNii/preview"
                          width="100%"
                          height="400"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          sandbox="allow-same-origin allow-scripts allow-fullscreen"
                          style={{ border: 'none' }}
                        ></iframe>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div
                          style={{
                            color: 'white',
                            fontSize: '13px',
                            marginTop: '15px',
                            lineHeight: '1.5em',
                            textAlign: 'justify'
                          }}
                        >
                          This project explores homelessness and drug use in Vancouver's Hastings area through a documentary-style approach. It combines visual storytelling with raw, unfiltered photography, capturing candid moments, the stark textures of the urban environment, and the deeply human expressions of those living within it. Where interviews or personal stories were incorporated, they were approached with respect and a commitment to authenticity. These conversations, alongside environmental portraits, were conducted with a non-intrusive approach. Street photography techniques, such as the use of natural light, high-contrast black-and-white shots, or slow shutter speeds to capture the blur of movement, were employed to immerse the viewer in the raw reality of the environment.
                        </div>
                      </Col>
                    </Row>
                    
                    {/* Video 2 */}
                    <Row style={{ marginTop: '30px' }}>
                      <Col>
                        <iframe
                          src="https://drive.google.com/file/d/1npab5CPw4XkKsAsq71KmVE3sqnzK6M6X/preview"
                          width="100%"
                          height="400"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          sandbox="allow-same-origin allow-scripts allow-fullscreen"
                          style={{ border: 'none' }}
                        ></iframe>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div
                          style={{
                            color: 'white',
                            fontSize: '13px',
                            marginTop: '15px',
                            lineHeight: '1.5em',
                            textAlign: 'justify'
                          }}
                        >
                          <p>A hybrid approach, merging the evocative nature of double exposure photography with dynamic video installation. The visual component employs double exposure techniques, layering imagery to create a sense of fragmented reality and emotional depth. To further enhance the viewer's immersion, a single video sequence is presented across nine synchronized cubes, arranged within a single screen. This multi-faceted display elongates the perception of depth and distorts spatial awareness, drawing the viewer into the work's intricate layers.</p>
                          <p>The intended outcome of this project is to challenge existing perceptions, to humanize those who are often dismissed as 'unhoused,' and to document the profound impact of addiction in Vancouver’s Downtown Eastside.</p>
                        </div>
                      </Col>
                    </Row>
                    
                    {/* Photos Grid: 4 photos arranged 2 per row */}
                    <Row style={{ marginTop: '30px' }}>
                      <Col xs={6}>
                        <img
                          src="/images/1.jpg"
                          alt="Hastings photo 1"
                          style={{ width: '100%', display: 'block', marginBottom: '20px' }}
                        />
                      </Col>
                      <Col xs={6}>
                        <img
                          src="/images/2.jpg"
                          alt="Hastings photo 2"
                          style={{ width: '100%', display: 'block', marginBottom: '20px' }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <img
                          src="/images/3.jpg"
                          alt="Hastings photo 3"
                          style={{ width: '100%', display: 'block', marginBottom: '20px' }}
                        />
                      </Col>
                      <Col xs={6}>
                        <img
                          src="/images/4.jpg"
                          alt="Hastings photo 4"
                          style={{ width: '100%', display: 'block', marginBottom: '20px' }}
                        />
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <Row>
                      <Col>
                        {selectedVideo.src.includes("drive.google.com") ? (
                          <iframe
                            src={selectedVideo.src}
                            width="100%"
                            height="400"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            sandbox="allow-same-origin allow-scripts allow-fullscreen"
                            style={{ border: 'none' }}
                          ></iframe>
                        ) : (
                          <video
                            src={selectedVideo.src}
                            controls
                            controlsList="nodownload"
                            style={{ width: '100%', maxHeight: '400px', display: 'block' }}
                          />
                        )}
                      </Col>
                    </Row>
                    {selectedVideo.longDescription && (
                      <Row>
                        <Col>
                          <div
                            style={{
                              color: 'white',
                              fontSize: '13px',
                              marginTop: '15px',
                              lineHeight: '1.5em',
                              textAlign: 'justify' // Ensure justification here
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