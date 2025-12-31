import React, { useState } from "react";
import "./../../assets/styles/studentregister.css";

const StudentRegister: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Stepper */}
        <div className="stepper">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`step ${step === s ? "active" : ""}`}>
              Step {s}
            </div>
          ))}
        </div>

        {/* STEP 1 – Personal Details */}
        {step === 1 && (
          <form className="anyinput-form">
            <h3>Personal Details</h3>

            <div className="anyinput-field">
              <label>Username</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="anyinput-field">
              <label>Password</label>
              <input type="password" />
            </div>

            <div className="anyinput-field">
              <label>SAP ID</label>
              <input type="text" />
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="anyinput-field">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>Date of Birth</label>
                <input type="date" />
              </div>
              <div className="anyinput-field">
                <label>Gender</label>
                <input type="text" />
              </div>
            </div>

            <div className="anyinput-field">
              <label>Phone Number</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Alternate Email</label>
              <input type="email" />
            </div>

            <button type="button" className="any-button" onClick={() => setStep(2)}>
              Next
            </button>
          </form>
        )}

        {/* STEP 2 – Education */}
        {step === 2 && (
          <form className="anyinput-form">
            <h3>Education Details</h3>

            <div className="anyinput-field">
              <label>College Name</label>
              <input type="text" />
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>Branch</label>
                <input type="text" />
              </div>
              <div className="anyinput-field">
                <label>Branch Code</label>
                <input type="text" />
              </div>
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>Enrollment Year</label>
                <input type="number" />
              </div>
              <div className="anyinput-field">
                <label>Graduation Year</label>
                <input type="number" />
              </div>
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>Current Semester</label>
                <input type="number" />
              </div>
              <div className="anyinput-field">
                <label>CGPA</label>
                <input type="number" />
              </div>
            </div>

            <div className="actions">
              <button className="outline-button" type="button" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="any-button" type="button" onClick={() => setStep(3)}>
                Next
              </button>
            </div>
          </form>
        )}

        {/* STEP 3 – Skills, Experience, Projects */}
        {step === 3 && (
          <form className="anyinput-form">
            <h3>Skills & Experience</h3>

            <div className="anyinput-field">
              <label>Skills (comma separated)</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Experience Summary</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Projects Summary</label>
              <input type="text" />
            </div>

            <div className="actions">
              <button className="outline-button" type="button" onClick={() => setStep(2)}>
                Back
              </button>
              <button className="any-button" type="button" onClick={() => setStep(4)}>
                Next
              </button>
            </div>
          </form>
        )}

        {/* STEP 4 – Resume */}
        {step === 4 && (
          <div className="anyinput-form">
            <h3>Resume</h3>

            <div className="anyinput-field">
              <label>Upload Resume</label>
              <input type="file" />
            </div>

            <div className="resume-preview">
              <h4>Resume Builder Preview</h4>
              <p>
                This section auto-generates a clean, professional resume using
                your provided details.
              </p>
              <button className="outline-button">Download PDF</button>
            </div>

            <div className="actions">
              <button className="outline-button" onClick={() => setStep(3)}>
                Back
              </button>
              <button className="any-button">Complete Registration</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRegister;
