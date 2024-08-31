import React from "react";
import "./page.css";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Connect with Fellows. Grow Together.</h1>
          <p>
            Join our exclusive community of professionals, build meaningful
            connections, and elevate your career.
          </p>
          <div className="cta-buttons">
            <a href="/signup" className="btn-primary">
              Get Started
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Why Choose Our Networking Hub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Tailored Connections</h3>
            <p>Find fellows with shared interests, skills, and goals.</p>
          </div>
          <div className="feature-card">
            <h3>Professional Growth</h3>
            <p>Access resources and opportunities to advance your career.</p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Engage in meaningful discussions and mentorship.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Fellows Say</h2>
        <div className="testimonials-carousel">
          {/* Add testimonial cards here */}
          <div className="testimonial-card">
            <p>"This platform has been a game-changer for my career!"</p>
            <span>- Jane Doe</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I've made invaluable connections through the Networking Hub."
            </p>
            <span>- John Smith</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <h3>Step 1: Create Your Profile</h3>
            <p>Tell us about your skills, interests, and goals.</p>
          </div>
          <div className="step">
            <h3>Step 2: Connect with Fellows</h3>
            <p>Search and connect with professionals in your field.</p>
          </div>
          <div className="step">
            <h3>Step 3: Collaborate & Grow</h3>
            <p>Engage in projects and discussions to enhance your skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
