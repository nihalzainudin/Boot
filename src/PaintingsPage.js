import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function PaintingsPage() {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Container style common for both views
  const containerStyle = {
    // Uncomment the backgroundImage if needed:
    // backgroundImage: "url('/images/bg_paintings.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(var(--vh, 1vh) * 100)',
    position: 'relative',
    padding: isMobile ? '15px' : '0'
  };

  // Desktop content style: absolutely positioned at 40% from the top
  const desktopContentStyle = {
    position: 'absolute',
    top: '40%',
    left: 0,
    width: '100%',
    textAlign: 'center'
  };

  // Mobile content style: flex container centered vertically & horizontally
  const mobileContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    textAlign: 'center'
  };

  // Choose the proper content style based on screen width
  const contentStyle = isMobile ? mobileContentStyle : desktopContentStyle;

  const headingStyle = {
    color: 'white',
    fontFamily: 'Garamond',
    margin: 0,
    fontSize: isMobile ? '2.5rem' : '4rem',
    transform: isMobile ? 'none' : 'translateX(-5%)'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: isMobile ? 'white' : 'black',
    fontFamily: 'Garamond',
    transform: isMobile ? 'none' : 'translateX(-5%)'
  };

  const formContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: '20px',
    transform: isMobile ? 'none' : 'translateX(-5%)',
    width: isMobile ? '100%' : '400px'
  };

  const handleNotify = () => {
    if (notifyEmail.trim() === '' || !notifyEmail.includes('@')) {
      setError(true);
      alert('Please enter a valid email address.');
      return;
    }
    setError(false);
    const templateParams = { email: notifyEmail };
    emailjs
      .send(
        'service_6txhiit',
        'template_5u0fetb',
        templateParams,
        'DhUgiRXwpfsvlExLZ'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Notification request sent successfully!');
          setNotifyEmail('');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send notification request, please try again later.');
        }
      );
  };

  return (
    <Container fluid style={containerStyle}>
      <style>{`
          .notify-button {
            transition: background-color 0.3s ease;
          }
          .notify-button:hover {
            background-color: rgba(224, 139, 139, 0.12) !important;
          }
        `}</style>
      <div className="paintings-content" style={contentStyle}>
        <h1 className="paintings-heading" style={headingStyle}>INTEGRATION</h1>
        <p className="paintings-paragraph" style={paragraphStyle}>
          Acrylic on the canvas and projections are on the way ...
        </p>
        <div className="paintings-form-container" style={formContainerStyle}>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="user_email"
            id="user_email"
            value={notifyEmail}
            onChange={(e) => setNotifyEmail(e.target.value)}
            style={{
              width: isMobile ? '80%' : '300px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '5px',
              border: error ? '2px solid red' : 'none',
              height: '32px'
            }}
          />
          <div style={{ width: '10px' }}></div>
          <Button
            variant="primary"
            className="notify-button"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,0.5)',
              borderRadius: '10px',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap'
            }}
            onClick={handleNotify}
          >
            Notify Me
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default PaintingsPage;