import React from 'react';
import './About.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    description: 'With over 10 years of experience in marketing, John leads our team with a passion for innovation and growth.',
    image: 'path/to/john-doe.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    description: 'Jane is a visionary designer who transforms ideas into visually compelling and engaging campaigns.',
    image: 'path/to/jane-smith.jpg'
  },
  // Add more team members here
];

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
