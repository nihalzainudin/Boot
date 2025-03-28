import React from 'react';
import { Container } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import './index.css';

// Create an array of 48 image paths (update if names differ)
const images = Array.from({ length: 48 }, (_, idx) => `/images/photos/photo${idx + 1}.jpg`);

function HomePage() {
  // Shuffle images on component mount using Fisher–Yates
  const shuffledImages = React.useMemo(() => {
    const imgs = [...images];
    for (let i = imgs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
    }
    return imgs;
  }, []);

  // Define breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 6,
    1200: 5,
    992: 4,
    768: 3,
    576: 2
  };

  return (
    <Container fluid>
      {/* Top padding */}
      <div style={{ height: '50px' }}></div>
      {/* Masonry layout container */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {shuffledImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            style={{
              width: '100%',
              marginBottom: '5px',
              display: 'block',
              border: 'none'
            }}
          />
        ))}
      </Masonry>
    </Container>
  );
}

export default HomePage;