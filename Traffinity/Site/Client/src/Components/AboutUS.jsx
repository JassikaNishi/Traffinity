import React from 'react';
import './about.css'; 

const useFadeIn = () => {
  return {
    animation: 'fadeIn 1s ease-in-out',
  };
};

export default function AboutUs() {
  const fadeIn = useFadeIn();

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#2D3A49',
    fontFamily: "'Poppins', sans-serif",
    animation: 'fadeIn 2s ease-in-out',
    fontStyle: 'italic',
  };

  const subHeadingStyle = {
    fontSize: '2rem',
    marginTop: '15px',
    color: '#2C3E50',
    fontFamily: "'Raleway', sans-serif",
    animation: 'fadeIn 2s ease-in-out',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#34495E',
    fontFamily: "'Lato', sans-serif",
    animation: 'fadeIn 2s ease-in-out',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '40px',
    paddingTop: '60px', 
    animation: 'fadeIn 2s ease-in-out',
  };

  const imageStyle = {
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    borderRadius: '10px',
  };

  const imageWithTextStyle = {
    position: 'relative',
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const textSectionStyle = {
    flex: 1,
    paddingLeft: '20px',
    textAlign: 'left',
  };

  return (
    <div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={headingStyle}>About Us</h1>

        <div style={sectionStyle}>
          <div
            style={{
              ...imageStyle,
              backgroundImage:
                'url("https://www.shutterstock.com/shutterstock/photos/2276750979/display_1500/stock-photo-mission-team-building-or-hands-of-business-people-with-goals-support-or-motivation-for-success-or-2276750979.jpg")',
            }}
          ></div>
          <div style={textSectionStyle}>
            <h2 style={subHeadingStyle}>Our Mission</h2>
            <p style={paragraphStyle}>
              At SehatKal, our mission is to improve healthcare accessibility and awareness by leveraging the power of technology. We are dedicated to ensuring that everyone has access to accurate health information and quality services.
            </p>
          </div>
        </div>

  
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subHeadingStyle}>Our Vision</h2>
            <p style={paragraphStyle}>
              We envision a world where technology bridges gaps in healthcare, empowering individuals to take control of their health and well-being.
            </p>
          </div>
          <div
            style={{
              ...imageStyle,
              backgroundImage:
                'url("https://static.wixstatic.com/media/ef9ce3e48be340a4b91f0c3e1644aa5b.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef9ce3e48be340a4b91f0c3e1644aa5b.jpg")',
            }}
          ></div>
        </div>

        <div style={sectionStyle}>
          <div style={{ ...imageWithTextStyle, backgroundImage: `url("https://www.eosworldwide.com/wp-content/uploads/2016/11/corevalues.jpeg")` }}>
            <div>
              <h2 style={{ fontFamily: "'Poppins', sans-serif" }}>Our Values</h2>
              <p>Empathy, Innovation, Inclusivity</p>
            </div>
          </div>
          <div style={textSectionStyle}>
            <h2 style={subHeadingStyle}>Our Values</h2>
            <p style={paragraphStyle}>
              Our core values include empathy, innovation, and inclusivity. We strive to create solutions that are accessible to all, regardless of location or background.
            </p>
          </div>
        </div>

        <div style={{ ...sectionStyle, flexDirection: 'row-reverse' }}>
          <div
            style={{
              ...imageStyle,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Team Image"
              
            />
          </div>
          <div style={textSectionStyle}>
            <h2 style={subHeadingStyle}>Our Team</h2>
            <p style={paragraphStyle}>
              Our team consists of passionate professionals from various fields including healthcare, technology, and community engagement. Together, we are committed to creating solutions that transform healthcare accessibility and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
