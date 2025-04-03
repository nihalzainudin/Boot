import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SoundPage() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: 'transparent',
        minHeight: '100vh'
      }}
    >
      {/* Padding row similar to above the Artist Statement */}
      <Row style={{ height: '35px' }}></Row>
      {/* Main vertical grid */}
      <Row>
        <Col md={12}>
          <div
            style={{
              color: 'white',
              padding: '15px',
              fontFamily: 'Garamond',
            //   backgroundColor: 'rgba(0,0,0,0.5)'
            }}
          >
            <h2 style={{ textAlign: 'left', fontSize: '120%', fontWeight: '900' }}>
              KAAZCHA - Exploring Immersive Audio Experiences
            </h2>
            {/* Two grids below the heading */}
            <Row style={{ marginTop: '20px' }}>
              {/* First grid with description and audio player */}
              <Col md={8}>
                <p style={{ textAlign: 'justify', fontSize: '100%' }}>
                  Venturing into the domain of sound, the creation of binaural audio was a noteworthy exploration aimed at enhancing the spatial awareness within auditory experiences in different environments. By incorporating sounds ranging from the skies to the grounds of Cochin and Chennai and taking exhibited online audio introduces a novel dimension when perceived through the lens of sound.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '20px' }}>
                  The intentional integration of the binaural audio technique into this piece aimed at capturing and elevating the immersive aspects within the chaotic environment. The project had a dual purpose: firstly, to articulate the unfiltered essence of the people of Cochin, and secondly, to foster cultural understanding by presenting this audio narrative to a Western audience. Each sound across the globe possesses a distinctive auditory signature – to comprehend this, an arrangement of ambient sounds, chants, and foley was curated.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '20px' }}>
                  For me attempting to create 8D audio for the first time gave the project an additional level of depth and curiosity. The term "8D audio" describes a kind of audio processing that gives the listener the impression that they are hearing sounds in three dimensions. 8D audio tracks give the impression that the sound is moving around the listener, providing depth and directionality. Panning, reverb, equalization, and other audio processing techniques are used to create this sound. Though it's more of a marketing word than a precise technical definition, the name "8D" denotes eight dimensions.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '20px' }}>
                  The objective was straightforward: to craft an auditory experience that transcends traditional boundaries, experimenting with diverse approaches and techniques to simulate movement and depth. Recycling audio files from a trip to India in August of last year posed a challenge, as the material was originally recorded without a specific intent to support this particular project. Regardless of this, experimenting with binaural and 8D audio synthesis helped to show the effectiveness of sound in capturing the spirit of the people. In order to produce a personal audio work, I wanted to highlight the value of experimenting as well as the inherent beauty found inside the creative process itself.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '100%', marginTop: '20px' }}>
                  <em>(use headphones for the best experience)</em>
                </p>
                {/* Audio player with updated styles */}
                <audio 
                  controls
                  style={{ marginTop: '0px', width: '100%', maxWidth: '400px', opacity: 0.8, height: '20px' }}
                >
                  <source src="/audios/Binural_FMPR.wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </Col>
              {/* Second grid reserved for additional content */}
              <Col md={4}>
                {/* Additional content can be added here */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SoundPage;