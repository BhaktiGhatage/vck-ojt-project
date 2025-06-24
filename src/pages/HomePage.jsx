import React, { useState } from "react";
import Header from "../components/Header/Headers";
import Footer from "../components/Footer/Footers";
import './HomePage.css'; 

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
           <div id="pqr">
                 <Header/>
                  <div className="home-scroll-container">
                      <div className="page-container">
                         <div className="hero-section">
                    <img src="/images\WhatsApp Image 2025-06-23 at 10.02.53_7e35a8be.jpg" className="hero-image"></img>
            <div className="hero-overlay-text">
                   <h1>Welcome to vivekanand college</h1>
                   <p>Your Journey to exellence starts here.</p>
                   <a href="/apply" className="cta-button"><center>Apply Now!</center></a>
                         </div>
                      </div>
                 </div>
      
                   <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
                   <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
     
       <div>  
             <h2 id="coll">Why Choose Vivekanand College?</h2>
        <ul>
		         <li id="coll"> **Legacy of Excellence**: Decades of commitment to quality education.</li>
		         <li id="coll"> **Experienced Faculty**:Learn from renowned experts and passionate educators.</li>
		         <li id="coll"> **Experienced Faculty**:Learn from renowned experts and passionate educators.</li>
		         <li id="coll"> **Modern Facilities**:Well-equipped labs, expansive library, and comfortable campus.</li>
		         <li id="coll"> **Holistic Development**: Focus on co-curricular activities, sports, and community service.</li>
             <li id="coll">**Strong Placements**: Excellent career opportunities with leading companies.</li>
       </ul>
          <div>
             <h2 id="camp"> Campus Life & Facilities</h2>
             <img src="/images/college.jpg"alt="Campus View 1" className="gallery-image" /> 
             <img src="/images/download.jpg" alt="Campus View 2"className="gallery-image taller-image"/>
             <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          </div>
           <p className="home-subtext">Ready to explore our courses?</p>
           <div className="button-wrapper"> 
              <a href="/courses" className="cta-button-e" onClick={() => setShowForm(true)}>Explore Courses</a>
           </div>
            {/* Future: Admission Form Component */}
            {/* {showForm && <AdmissionForm />} */}
           </div>
        </div>
              <Footer/>
          </div>
  );
};

export default HomePage;
