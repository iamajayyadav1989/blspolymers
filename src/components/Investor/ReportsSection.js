import React, { useEffect, useState } from "react";
import annualIcon from "../../assets/images/annual-report-icon.png";
import reportLogo from "../../assets/images/investor-bls-logo.jpg";
import axios from "axios";
import { adminBaseUrl } from "../../App";

const ReportsSection = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get(`${adminBaseUrl}/api/reports`)
      .then((res) => {
        setReports(res.data);
      })
      .catch((err) => console.error("Error fetching reports", err));
  }, []);

  return (
    <section className="reports-section mt-5">
      <div className="container">
        <div className="row text-center pb-4">
          <div className="col-12">
            <h2 className="reports-title">
              <img src={annualIcon} alt="Annual Report Icon" /> Annual Reports
            </h2>
          </div>
        </div>
        <div className="row text-center">
          {reports.map((report, index) => (
            <div
              className={`col-md-4 ${
                index < reports.length - 1 ? "border-end" : ""
              }`}
              key={report._id}
            >
              <div className="report-card">
                <img src={reportLogo} alt="BLS Polymers Report" />
                <h5 className="pt-4">
                  Annual Report <br /> for the Year {report.year}
                </h5>
                <a href={report.fileUrl} download>
                  Download Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
