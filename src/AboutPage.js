import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container
      fluid
      style={{ backgroundColor: 'black', minHeight: '100vh' }}
    >
      {/* Padding row same as above the artist name */}
      <Row style={{ height: '35px' }}></Row>
      {/* Two vertical grids */}
      <Row>
        {/* Left Grid: 7 columns – About */}
        <Col md={7}>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Garamond' }}>
            {/* About heading updated */}
            <h2 style={{ textAlign: 'left', fontSize: '120%', fontWeight: '900' }}>
              About
            </h2>
            {/* Increased padding between heading and description */}
            <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '35px' }}>
              ABC is a multidisciplinary documentary artist whose work explores the intricate spaces between individuals and their belief systems. Using binaural audio works and photography as her primary mediums, she creates immersive narratives that investigate identity, connection, and dissonance. Driven by a commitment to amplifying the voices of marginalized communities, her projects shed light on a wide spectrum of socio-political issues. Through her powerful storytelling, ABC invites audiences to engage with perspectives often overlooked, fostering empathy, reflection, and dialogue.
            </p>
            <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '20px' }}>
              <em>Mentorships + Awards + Prizes:</em>
              <br />
              National Fresh Voices Artivism Award - Nominee
              <br />
              Socio-Political Engagement Award - Emily Carr University
              <br />
              Michael .J. Fox Scholarship
              <br />
              Canada Graduate Scholarship - SSHRC
            </p>
            <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '20px' }}>
              <em>Filmography:</em>
              <br />
              2025 | Thalaimarai | TBD
              <br />
              2025 | The Scale of Loss | 6 min | HD 4:3 | Stereo
              <br />
              2024 | Kaazhcha | 6:40 min | Surround 5.1
              <br />
              2023 | Lives of Hastings | Visual Arts | HD 1.85 |  Stereo
              <br />
              2022 | Al - Jumuah | 7 min | HD 16:9  | Stereo
              <br />
              2020 | Synthetic Syndrome | 2:31min | 8mm | Stereo
            </p>
          </div>
        </Col>
        {/* Right Grid: 5 columns – additional content */}
        <Col md={5}>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Garamond' }}>
            {/* Additional information can go here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;