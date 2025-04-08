import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container
      fluid
      style={{ backgroundColor: 'transparent', minHeight: '100vh' }}
    >
      <Row style={{ height: '35px' }}></Row>
      <Row>
        <Col md={7}>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Sans, sans-serif' }}>
            <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '35px' }}>
              Farzana Yussuf is a multidisciplinary documentary artist whose work explores the intricate spaces between individuals and their belief systems. Using binaural audio works and photography as her primary mediums, she creates immersive narratives that investigate identity, connection, and dissonance. Driven by a commitment to amplifying the voices of marginalized communities, her projects shed light on a wide spectrum of socio-political issues. Through her powerful storytelling, Farzana invites audiences to engage with perspectives often overlooked, fostering empathy, reflection, and dialogue.
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
          </div>
        </Col>
        <Col md={5}>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Sans, sans-serif' }}>
            {/* Additional info */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;