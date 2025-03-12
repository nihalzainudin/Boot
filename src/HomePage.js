import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      {/* Image grid row with slightly increased gutters */}
      <Row className="g-2">
        {images.map((src, idx) => (
          <Col key={idx} xs={6} md={4}>
            <Link to="/image">
              <Image src={src} thumbnail style={{ border: 'none', padding: 0 }} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;