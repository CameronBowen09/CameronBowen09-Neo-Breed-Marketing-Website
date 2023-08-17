import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (name && email && message) {
      // Here you can implement the functionality to send the contact form data
      console.log('Form submitted:', name, email, message);
      setIsSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="contact-form" id="contact">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p className="submission-success">Thanks for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
