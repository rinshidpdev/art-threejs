import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h1 className="contact-heading">Let's Capture Wonder</h1>
      
      <div className="content-container">
        {/* LEFT SIDE - Contact Details with Boxes */}
        <div className="contact-info">
          <div className="contact-card">
            <div className="icon-wrapper">
              <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="info-title">Email Us</h3>
              <p className="info-subtitle">Our team is here to help</p>
              <a href="mailto:sales@artiflexit.com">sales@artiflexit.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="info-title">Call Us</h3>
              <p className="info-subtitle">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+971558086462">+971 55 808 6462</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="info-title">Visit Us</h3>
              <p className="info-subtitle">Come say hello</p>
              <a href="#">Office No. 1-264, Al Quoz, Dubai, UAE</a>
            </div>
          </div>
        </div>
        
        {/* RIGHT SIDE - Form with Artiflex Blue Borders */}
        <div className="form-container">
          <div className="form-row">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="tel" placeholder="Phone" className="form-input" />
          </div>
          
          <div className="form-row">
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Company" className="form-input" />
          </div>
          
          <textarea placeholder="Message" className="form-textarea"></textarea>
          
          <div className="button-container">
            <button type="submit" className="form-button">Send</button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Import the exact script font */
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
        
        .contact-form-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 40px 0;
          background-color: #000000;
          color: #ffffff;
          font-family: sans-serif;
        }
        
        .contact-heading {
          font-family: 'Sacramento', cursive;
          font-size: 120px;
          color: #c5ff00;
          text-align: center;
          margin-bottom: 60px;
          font-weight: normal;
          line-height: 1;
        }
        
        .content-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
          gap: 40px;
        }
        
        /* LEFT SIDE - Contact Info Cards */
        .contact-info {
          width: 40%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .contact-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: rgba(45, 104, 255, 0.05);
          border: 1px solid rgba(45, 104, 255, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          background: rgba(45, 104, 255, 0.1);
          border-color: rgba(45, 104, 255, 0.4);
          transform: translateY(-2px);
        }
        
        .icon-wrapper {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: rgba(45, 104, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-icon-svg {
          width: 24px;
          height: 24px;
          color: #2d68ff;
        }
        
        .info-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }
        
        .info-subtitle {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 8px;
        }
        
        /* RIGHT SIDE - Form with Artiflex Blue Borders */
        .form-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 60%;
        }
        
        .form-row {
          display: flex;
          gap: 20px;
          width: 100%;
        }
        
        .form-input {
          flex: 1;
          background-color: transparent;
          color: #ffffff;
          padding: 15px;
          font-size: 16px;
          outline: none;
          width: 100%;
          border: 1px solid #2d68ff;
          transition: border-color 0.3s;
        }
        
        .form-input:focus {
          border-color: #4d7eff;
          box-shadow: 0 0 0 3px rgba(45, 104, 255, 0.1);
        }
        
        .form-textarea {
          width: 100%;
          min-height: 180px;
          background-color: transparent;
          border: 1px solid #2d68ff;
          color: #ffffff;
          padding: 15px;
          font-size: 16px;
          resize: none;
          outline: none;
          transition: border-color 0.3s;
        }
        
        .form-textarea:focus {
          border-color: #4d7eff;
          box-shadow: 0 0 0 3px rgba(45, 104, 255, 0.1);
        }
        
        .button-container {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
        }
        
        .form-button {
          background-color: #2d68ff;
          border: 1px solid #2d68ff;
          color: #ffffff;
          padding: 15px 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          box-shadow: 0 0 30px rgba(45, 104, 255, 0.3);
        }
        
        .form-button:hover {
          background-color: #2558e6;
          border-color: #2558e6;
          box-shadow: 0 0 40px rgba(45, 104, 255, 0.5);
          transform: translateY(-2px);
        }
        
        a {
          color: #2d68ff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        
        a:hover {
          color: #4d7eff;
          text-decoration: underline;
        }
        
        ::placeholder {
          color: #666666;
        }
        
        /* Responsive styles */
        @media (max-width: 968px) {
          .contact-heading {
            font-size: 100px;
          }
        }
        
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }
          
          .form-container, .contact-info {
            width: 100%;
          }
          
          .contact-info {
            margin-bottom: 40px;
          }
          
          .contact-heading {
            font-size: 80px;
          }
        }
        
        @media (max-width: 640px) {
          .form-row {
            flex-direction: column;
            gap: 15px;
          }
          
          .contact-heading {
            font-size: 70px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-heading {
            font-size: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
