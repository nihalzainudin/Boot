import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function PaintingsPage() {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [error, setError] = useState(false);

  const handleNotify = () => {
    // Check that the email field is not empty and contains an "@"
    if (notifyEmail.trim() === '' || !notifyEmail.includes('@')) {
      setError(true);
      alert('Please enter a valid email address.');
      return;
    }
    setError(false);
    const templateParams = {
      email: notifyEmail  // Parameter expected by your template.
    };
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
    <Container
      fluid
      style={{
        backgroundImage: "url('/images/bg_paintings.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <style>
        {`
          .notify-button {
            transition: background-color 0.3s ease;
          }
          .notify-button:hover {
            background-color: rgba(224, 139, 139, 0.12) !important;
          }
        `}
      </style>
      {/* Absolutely positioned content for INTEGRATION */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            color: 'white',
            fontFamily: 'Garamond',
            margin: 0,
            fontSize: '4rem',
            transform: 'translateX(-5%)'
          }}
        >
          INTEGRATION
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'black',
            fontFamily: 'Garamond',
            transform: 'translateX(-5%)'
          }}
        >
          Acrylic on the canvas and projections are on the way ...
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '20px',
            transform: 'translateX(-5%)',
            width: '400px'
          }}
        >
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="user_email"
            id="user_email"
            value={notifyEmail}
            onChange={(e) => setNotifyEmail(e.target.value)}
            style={{
              width: '300px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px',
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
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
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