import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [message, setMessage]     = useState('');

  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    message: false,
  });

  const inputStyle = {
    backgroundColor: 'transparent',
    border: '2px solid rgba(255,255,255,0.3)',
    color: 'white',
    borderRadius: '5px',
    padding: '8px 10px',
    transition: 'all 0.3s ease'
  };

  // Style override if error is present
  const errorStyle = {
    border: '2px solid red'
  };

  const messageStyle = { ...inputStyle, height: '230px', color: 'rgba(255,255,255,0.8)' };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: firstName.trim() === '',
      email: email.trim() === '',
      message: message.trim() === '',
    };
    setErrors(newErrors);

    // If any required field is missing, return early
    if (newErrors.firstName || newErrors.email || newErrors.message) {
      return;
    }

    // Build the template parameters for EmailJS
    const templateParams = {
      name: `${firstName} ${lastName}`,  // Combined sender's name
      email: email,                      // Sender's email address
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_6txhiit',
        'template_f26tgti',
        templateParams,
        'DhUgiRXwpfsvlExLZ'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Clear the form fields on success
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          alert('Your message has been sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Embedded CSS for styling */}
      <style>
        {`
          .contact-input::placeholder {
            color: rgba(255,255,255,0.5);
          }
          .contact-input:focus {
            border-color: rgba(255,255,255,0.8);
            box-shadow: 0 0 8px rgba(255,255,255,0.2);
            outline: none;
          }
          .modern-button {
            border-radius: 5px;
            transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
            color: white;
            border: 2px solid rgba(255,255,255,0.6);
            background-color: transparent;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          }
          .modern-button:hover {
            background-color: rgba(255,255,255,0.15);
            border-color: rgba(255,255,255,0.9);
            transform: scale(1.03);
          }
        `}
      </style>
      {/* Top padding */}
      <Row style={{ height: '35px' }}></Row>
      {/* Page title */}
      <Row>
        <Col>
          <div style={{ color: 'white', padding: '15px', fontFamily: 'Garamond' }}>
            <h2 style={{ textAlign: 'left', fontSize: '120%', fontWeight: '900' }}>Contact</h2>
          </div>
        </Col>
      </Row>
      {/* Page description */}
      <Row>
        <Col>
          <div style={{ color: 'white', padding: '0 15px', fontFamily: 'Garamond' }}>
            <p style={{ marginTop: '15px', fontSize: '100%', textAlign: 'left' }}>
              Get in touch so we can work together.
            </p>
          </div>
        </Col>
      </Row>
      {/* Contact Form */}
      <Row>
        <Col>
          <div style={{ padding: '0 15px', fontFamily: 'Garamond' }}>
            <Form style={{ marginTop: '15px' }} onSubmit={handleSubmit}>
              <Row>
                {/* Left Column: First Name, Last Name, Email Address */}
                <Col md={6}>
                  <Form.Group controlId="contactFirstName" className="mb-3">
                    <Form.Label style={{ color: 'white' }}>First Name *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={errors.firstName ? { ...inputStyle, ...errorStyle } : inputStyle}
                      className="contact-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="contactLastName" className="mb-3">
                    <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={inputStyle}
                      className="contact-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="contactEmail" className="mb-3">
                    <Form.Label style={{ color: 'white' }}>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={errors.email ? { ...inputStyle, ...errorStyle } : inputStyle}
                      className="contact-input"
                    />
                  </Form.Group>
                </Col>
                {/* Right Column: Message and Send Button */}
                <Col md={6}>
                  <Form.Group controlId="contactMessage" className="mb-3">
                    <Form.Label style={{ color: 'white' }}>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={errors.message ? { ...messageStyle, ...errorStyle } : messageStyle}
                      className="contact-input"
                    />
                  </Form.Group>
                  <div style={{ textAlign: 'right', marginTop: '10px' }}>
                    <Button
                      variant="outline-light"
                      type="submit"
                      className="modern-button"
                    >
                      Send
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
      {/* Additional content can be added here */}
    </Container>
  );
}

export default ContactPage;
