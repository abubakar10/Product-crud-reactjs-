import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About ProductStore</h1>
            <p>Your trusted partner for premium products and exceptional shopping experience</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, ProductStore began with a simple mission: to provide customers 
                with access to the highest quality products at competitive prices. What started 
                as a small online retailer has grown into a trusted platform serving thousands 
                of satisfied customers worldwide.
              </p>
              <p>
                We believe that shopping should be an enjoyable experience, which is why we've 
                built our platform with user experience at the forefront. From our carefully 
                curated product selection to our responsive customer service, every aspect of 
                our business is designed with you in mind.
              </p>
            </div>
            <div className="story-image">
              <div className="story-placeholder">
                <h3>Our Journey</h3>
                <p>From humble beginnings to trusted retailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>We carefully select every product to ensure it meets our high standards of quality and durability.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to sustainable practices and partnering with environmentally responsible brands.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Innovation</h3>
              <p>We continuously improve our platform and services to provide you with the best shopping experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">JS</div>
              </div>
              <h3>John Smith</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Passionate about creating exceptional customer experiences and building lasting relationships.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">SJ</div>
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Head of Product</p>
              <p className="member-bio">Expert in product curation and quality assurance with over 10 years of retail experience.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">MD</div>
              </div>
              <h3>Mike Davis</h3>
              <p className="member-role">Customer Success Manager</p>
              <p className="member-bio">Dedicated to ensuring every customer has an outstanding shopping experience with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Products</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Trusted Brands</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>support@productstore.com</p>
              </div>
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>📍 Address</h4>
                <p>123 Commerce Street<br />New York, NY 10001</p>
              </div>
              <div className="contact-item">
                <h4>🕒 Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
