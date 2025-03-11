import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const images = [
    '/images/building.jpg',
    '/images/cat-7995160_1280.jpg',
    '/images/fox.jpg',
    '/images/man-2442565_1280.jpg',
    '/images/old.jpg',
    '/images/road-8772920_1280.jpg',
    '/images/woman-9172599_1280.jpg'
];

function HomePage() {
  return (
    <>
      {/* Top padding row */}
      <Row style={{ height: '50px' }}></Row>
      {/* Image grid row */}
      <Row>
        {images.map((src, idx) => (
          <Col key={idx} xs={6} md={4} className="mb-3">
            <Image src={src} thumbnail style={{ border: 'none', padding: 0 }} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;