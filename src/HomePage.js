import React from 'react';
import { Container } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import './index.css';

// Create an array of 63 image paths
const images = Array.from({ length: 63 }, (_, idx) => `/images/photos/photo${idx + 1}.jpg`);

function HomePage() {
  // Shuffle images using the Fisher–Yates algorithm
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
    <Container fluid style={{ backgroundColor: 'transparent' }}>
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
            loading="lazy"  // native lazy loading enabled
            key={idx}
            src={src}
            alt=""
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src = "/images/photos/placeholder.jpg"; // fallback placeholder image
            }}
            style={{
              width: '100%',
              height: '250px', // fixed height (adjust as needed)
              objectFit: 'cover',
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