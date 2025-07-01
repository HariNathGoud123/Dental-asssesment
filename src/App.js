import React, { useState } from 'react';
import './App.css'; // Assuming you have an App.css file for styling

const App = () => {
  const [openFeature, setOpenFeature] = useState(null);

  const toggleFeature = (featureName) => {
    setOpenFeature(openFeature === featureName ? null : featureName);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src='/clovelogo.png' alt='' className=''/>
          <div className="header-actions">
            <a href="tel:985-6589-510" className="phone-number">
              <img src="/Images/Get a Call Back.png" alt="callback" />
              985-6589-510
            </a>
            <a href="https://brown-gladi-12.tiiny.site/" className="btn-primary hide-sm" target="_blank" rel="noopener noreferrer">
              <img src="/Images/Book an appointment.png" alt="callback" />
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      <main className="top-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Painless Root Canal Treatment in Delhi</h1>
            <p className="hero-subtitle">Expert RCT. Zero Pain. Right Here in Delhi.</p>
            <a href="https://brown-gladi-12.tiiny.site/" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">
              <img src="/Images/Book an appointment.png" alt="callback" />
              Book Appointment
            </a>
          </div>
          <img src="/iPhone_13___14_-_11-removebg-preview 1.png" alt="" className="hero-image" />
        </section>

        <section className="form-section">
          <h2 className="form-title">Get Expert Dental Guidance in Delhi</h2>
          <p className="form-subtitle">Book your free consultation today and take the first step towards healthy, beautiful teeth.</p>

          <form>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Name" required />
            </div>

            <div className="form-group">
              <input type="tel" className="form-input" placeholder="Mobile Number" required />
            </div>

            <div className="form-group">
              <div className="captcha-group">
                <input type="text" className="form-input captcha-input" placeholder="Captcha" required />
                <div className="captcha-code">1514</div>
              </div>
            </div>

            <p className="consent-text">
              I agree to CLOVE Dental's <a href="#">Terms</a> and <a href="#">Privacy Policy</a> and consent to contact via phone, email, or SMS.
            </p>

            <button type="submit" className="btn-consultation">Book a Free Consultation</button>
          </form>
        </section>
      </main>
      <marquee behavior="scroll" direction="alternate" scrollAmount="10" loop="infinite">
        <img src="/Pointer01.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer02.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer03.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer04.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer05.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer01.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer02.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer03.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer04.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer05.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer01.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer02.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer03.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer04.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer05.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer01.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer02.png" alt="pointer" className="scroll-img" />
        <img src="/Pointer03.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer04.png" alt="pointer" className="scroll-img" />
        <img src="/Images/Pointer05.png" alt="pointer" className="scroll-img" />
      </marquee>
      <div className="root-canal-section">
        <h2 className="section-title">Types of Root Canal Treatments</h2>
        <p className="section-description">In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.</p>

        <div className="treatments-container">
          <div className="treatment-card">
            <div className="card-image-wrapper">
              <img src="/Images/Root-canal-left.png" alt="Root Canal Treatment" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Root Canal Treatment</h3>
              <p className="card-subtitle">Ideal for infected or damaged tooth</p>
              <h4 className="types-heading">Types of RCT</h4>
              <ul className="types-list">
                <li>Root Canal Treatment</li>
                <li>Split RCT</li>
                <li>Split RCT with rubber dam</li>
                <li>Split RCT with laser</li>
              </ul>
              <div className="price-info">
                <span className="starting-price">Starting Price</span>
                <span className="price-value">₹ 19,999</span>
              </div>
              <a href="#" className="btn-primary card-btn">Get Free Consultation</a>
            </div>
          </div>

          <div className="treatment-card">
            <div className="card-image-wrapper">
              <img src="/Images/Root-canal-right.png" alt="Root Canal Treatment" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Re-Root Canal Treatment</h3>
              <p className="card-subtitle">Ideal issues that persist or recur after an initial root canal treatment</p>
              <h4 className="types-heading">Types of RCT</h4>
              <ul className="types-list">
                <li>Re-RCT with rubber dam</li>
                <li>Re-RCT laser specialist</li>
                <li>e-RCT with retrieval of old RCT filling</li>
              </ul>
              <div className="price-info">
                <span className="starting-price">Starting Price</span>
                <span className="price-value">₹ 19,999</span>
              </div>
              <a href="#" className="btn-primary card-btn">Get Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
      <div className="smiles-section">
        <h2 className="smiles-title">Real Smiles, Real Transformations</h2>
        <p className="smiles-subtitle">See the life-changing results our dental implant patients enjoy</p>

        <div className="transformations-grid">
          <div className="transformation-card">
            <div className="card-image-container">
              <img src="/Images/smile-1.png" alt="Arjun Mehta Transformation" className="transformation-image" />
            </div>
            <div className="card-info">
              <span className="patient-name">Arjun Mehta</span>
              <span className="patient-location">Mumbai</span>
            </div>
          </div>

          <div className="transformation-card">
            <div className="card-image-container">
              <img src="/Images/smile-2.png" alt="Kavita Sharma Transformation" className="transformation-image" />
            </div>
            <div className="card-info">
              <span className="patient-name">Kavita Sharma</span>
              <span className="patient-location">Bangalore</span>
            </div>
          </div>

          <div className="transformation-card">
            <div className="card-image-container">
              <img src="/Images/smile-3.png" alt="Neha Joshi Transformation" className="transformation-image" />
            </div>
            <div className="card-info">
              <span className="patient-name">Neha Joshi</span>
              <span className="patient-location">Delhi</span>
            </div>
          </div>

          <div className="transformation-card">
            <div className="card-image-container">
              <img src="/Images/smile-4.png" alt="Viram Desai Transformation" className="transformation-image" />
            </div>
            <div className="card-info">
              <span className="patient-name">Viram Desai</span>
              <span className="patient-location">Chennai</span>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-section">
        <h2 className="why-choose-title">Why Choose Clove Dental</h2>
        <p className="why-choose-subtitle">Clove Dental is India's Leading dental care brand with 600+ clinic nationwide</p>

        <div className="why-choose-content">
          <div className="why-choose-features">
            <div className={`feature-item ${openFeature === 'dori' ? 'active' : ''}`} onClick={() => toggleFeature('dori')}>
              <span>DORI - A.I. enabled Dental chair</span>
              <span className="plus-icon">+</span>
              <div className="display-info">
                <p>
                  Our DORI (Dental and Oral Robotic Intelligence) system uses advanced AI to assist dentists in precise diagnostics and treatment planning, ensuring highly accurate and efficient dental procedures.
                </p>
              </div>
            </div>
            <div className={`feature-item ${openFeature === 'safety' ? 'active' : ''}`} onClick={() => toggleFeature('safety')}>
              <span>10x Safety and 4 steps sterilization process</span>
              <span className="plus-icon">+</span>
              <div className="display-info">
                <p>
                  We prioritize your safety with a rigorous 4-step sterilization process that goes beyond industry standards, guaranteeing a hygienic and infection-free environment for every patient visit.
                </p>
              </div>
            </div>
            <div className={`feature-item ${openFeature === 'implantologist' ? 'active' : ''}`} onClick={() => toggleFeature('implantologist')}>
              <span>Experienced and Certified implantologist</span>
              <span className="plus-icon">+</span>
              <div className="display-info">
                <p>
                  Our team comprises highly experienced and certified implantologists who have successfully performed numerous dental implant procedures, providing you with expert care and lasting results.
                </p>
              </div>
            </div>
            <div className={`feature-item ${openFeature === 'equipments' ? 'active' : ''}`} onClick={() => toggleFeature('equipments')}>
              <span>Updated with world class equipments</span>
              <span className="plus-icon">+</span>
              <div className="display-info">
                <p>
                  Clove Dental clinics are equipped with the latest world-class dental technology and equipment, ensuring that you receive the most advanced and comfortable treatment available.
                </p>
              </div>
            </div>
            <div className={`feature-item ${openFeature === 'audits' ? 'active' : ''}`} onClick={() => toggleFeature('audits')}>
              <span>Regular audits for safety protocols</span>
              <span className="plus-icon">+</span>
              <div className="display-info">
                <p>
                  We conduct regular internal and external audits to ensure strict adherence to all safety protocols and quality standards, maintaining a consistent level of excellence across all our clinics.
                </p>
              </div>
            </div>
          </div>
          <div className="why-choose-image-container">
            <img src="/Images/smile-2-drs.png" alt="Two dentists smiling" className="why-choose-image" />
          </div>
        </div>
      </div>
      <div className="patients-say-section">
        <h2 className="patients-say-title">What Our Patients Say</h2>
        <p className="patients-say-subtitle">Real smiles, real stories. Here's what our patients love about their CLOVE Dental experience!</p>

        <div className="patient-testimonials-grid">
          <div className="patient-card">
            <div className="patient-image-wrapper">
              <img src="/Images/customer-say-1.png" alt="Shubham" className="patient-image" />
            </div>
            <div className="patient-info">
              <span className="patient-name">Shubham</span>
              <span className="patient-treatment">Aligners</span>
              <span className="patient-location">Indore</span>
            </div>
          </div>

          <div className="patient-card">
            <div className="patient-image-wrapper">
              <img src="/Images/customer-say-2.png" alt="Shubpreet" className="patient-image" />
            </div>
            <div className="patient-info">
              <span className="patient-name">Shubpreet</span>
              <span className="patient-treatment">RCT</span>
              <span className="patient-location">Indore</span>
            </div>
          </div>

          <div className="patient-card">
            <div className="patient-image-wrapper">
              <img src="/Images/cutomer-smile-3.png" alt="Anita" className="patient-image" />
            </div>
            <div className="patient-info">
              <span className="patient-name">Anita</span>
              <span className="patient-treatment">Laser Treatment</span>
              <span className="patient-location">Bangalore</span>
            </div>
          </div>

          <div className="patient-card">
            <div className="patient-image-wrapper">
              <img src="/Images/cutomer-smile-4.png" alt="Aarti" className="patient-image" />
            </div>
            <div className="patient-info">
              <span className="patient-name">Aarti</span>
              <span className="patient-treatment">Dentures</span>
              <span className="patient-location">Indore</span>
            </div>
          </div>

          <div className="patient-card">
            <div className="patient-image-wrapper">
              <img src="/Images/cutomer-smile-5.png" alt="Aditya" className="patient-image" />
            </div>
            <div className="patient-info">
              <span className="patient-name">Aditya</span>
              <span className="patient-treatment">Implant</span>
              <span className="patient-location">Indore</span>
            </div>
          </div>

          <div className="patient-card">
            <div className="patient-image-wrapper">
              <img src="/Images/cutomer-smile-6.png" alt="Nikita" className="patient-image" />
            </div>
            <div className="patient-info">
              <span className="patient-name">Nikita</span>
              <span className="patient-treatment"></span>
              <span className="patient-location">Indore</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/clovelogo.png" alt="Clove Dental Logo" />
          </div>
          <div className="footer-links-and-bottom">
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Accessibility</a>
            </div>
            <div className="footer-bottom">
              <p>All Rights Reserved - 2024, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited). Managed By Unbund</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;