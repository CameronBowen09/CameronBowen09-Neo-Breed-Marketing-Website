import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Digital Marketing',
    description: 'We create tailored digital marketing strategies to boost your online presence and reach your target audience.',
    icon: '🚀'
  },
  {
    title: 'Social Media Management',
    description: 'Our team manages your social media platforms, engaging with your audience and growing your online community.',
    icon: '📱'
  },
  {
    title: 'SEO Optimization',
    description: 'We optimize your website for search engines to improve its visibility and drive organic traffic to your business.',
    icon: '🔍'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <ul>
        {servicesData.map((service, index) => (
          <li key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
