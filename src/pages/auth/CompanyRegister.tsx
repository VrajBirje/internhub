import React, { useState } from "react";
import "./../../assets/styles/companyregister.css";

const CompanyRegister: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Stepper */}
        <div className="stepper">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`step ${step === s ? "active" : ""}`}>
              Step {s}
            </div>
          ))}
        </div>

        {/* STEP 1 – Account & Company Basics */}
        {step === 1 && (
          <form className="anyinput-form">
            <h3>Company Account</h3>

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
              <label>Company Name</label>
              <input type="text" />
            </div>

            <button
              type="button"
              className="any-button"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </form>
        )}

        {/* STEP 2 – Company Details */}
        {step === 2 && (
          <form className="anyinput-form">
            <h3>Company Details</h3>

            <div className="anyinput-field">
              <label>Company Description</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Industry</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Website URL</label>
              <input type="url" />
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>Founded Year</label>
                <input type="number" />
              </div>

              <div className="anyinput-field">
                <label>Company Size</label>
                <input type="text" />
              </div>
            </div>

            <div className="anyinput-field">
              <label>Company Logo</label>
              <input type="file" />
            </div>

            <div className="actions">
              <button
                className="outline-button"
                type="button"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="any-button"
                type="button"
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* STEP 3 – Address & HR Contact */}
        {step === 3 && (
          <form className="anyinput-form">
            <h3>Address & Contact</h3>

            <div className="anyinput-field">
              <label>Address Line 1</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Address Line 2</label>
              <input type="text" />
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>City</label>
                <input type="text" />
              </div>
              <div className="anyinput-field">
                <label>State</label>
                <input type="text" />
              </div>
            </div>

            <div className="grid-2">
              <div className="anyinput-field">
                <label>Country</label>
                <input type="text" />
              </div>
              <div className="anyinput-field">
                <label>Pincode</label>
                <input type="text" />
              </div>
            </div>

            <hr />

            <h4>HR / Contact Person</h4>

            <div className="anyinput-field">
              <label>Contact Name</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Designation</label>
              <input type="text" />
            </div>

            <div className="anyinput-field">
              <label>Contact Email</label>
              <input type="email" />
            </div>

            <div className="anyinput-field">
              <label>Phone Number</label>
              <input type="text" />
            </div>

            <div className="actions">
              <button
                className="outline-button"
                type="button"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button className="any-button" type="button">
                Complete Registration
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CompanyRegister;
