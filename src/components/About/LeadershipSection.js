import React from "react";
import leadershipIcon from "../../assets/images/leadership-icon.png";

const LeadershipSection = () => {
  return (
    <section className="leadership-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="leadership-title">
              <img src={leadershipIcon} alt="Leadership Icon" /> LEADERSHIP TEAM
            </h3>
            <p className="text-muted">
              BLS Polymers is an Indian leader in the polymer compounds
              manufacturing business with a focus on cable compounds. BLS prides
              itself on a customer-centric approach with a focus on providing
              quality services. Our core values flow from our leaders'
              commitment and determination to provide international quality
              standards.
            </p>
          </div>
        </div>

        {/* Leadership Members */}
        <div className="row text-center mt-4">
          <div className="col-md-6 leader-item border-end">
            <h3>Shri Vinod Aggarwal</h3>
            <p>
              Shri Aggarwal has over 35 years of experience in plastics and
              chemical-related industries. He has successfully implemented
              manufacturing projects within stringent time frames and resource
              constraints. He specializes in financial investments and planning
              and has widely traveled to the USA, Australia, Europe, the Middle
              East, Canada, and South-East Asian countries for business
              purposes.
              <br />
              Shri Aggarwal holds a Bachelor of Science, Delhi University.
            </p>
          </div>
          <div className="col-md-6 leader-item">
            <h3>Shri Karan Aggarwal</h3>
            <p>
              Shri Aggarwal completed his Bachelor's from Delhi University and
              pursued an MBA from the USA. He entered the family business in
              2006, joining the Business Development & Marketing division of BLS
              Ecotech. After successfully managing operations for nearly a
              decade, he transitioned to BLS Polymers in 2013, where he now
              leads daily operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
