import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../../assets/styles/studentregister.css";

const StudentRegister: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    sapId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    altEmail: "",
  });
  const [dob, setDob] = useState<Date | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const phoneValid = /^[6-9]\d{9}$/.test(form.phone);
  const passwordValid =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      form.password
    );
  const isStep1Valid = emailValid && phoneValid && passwordValid;

  return (
    <div className="sr-root">
      {/* Top heading area */}
      <header className="sr-header">
        <div className="sr-logo-circle">
          <span>🎓</span>
        </div>
        <div className="sr-header-text">
          <h1>Student Registration</h1>
          <p>Complete your profile to start applying for internships.</p>
        </div>

      </header>

      {/* Stepper row */}
      <div className="sr-stepper">
        {[
          { id: 1, label: "Personal" },
          { id: 2, label: "Education" },
          { id: 3, label: "Skills" },
          { id: 4, label: "Resume" },
        ].map((s, index, arr) => (
          <div
            key={s.id}
            className={`sr-step ${step >= s.id ? "active" : ""}`}
          >
            <div className="sr-step-circle">{s.id}</div>
            <span>{s.label}</span>
            {index !== arr.length - 1 && (
              <div className="sr-step-line" />
            )}
          </div>
        ))}
      </div>

      {/* Main white card */}
      <div className="sr-card">
        {step === 1 && (
          <form className="sr-form">
            <h2>Personal details</h2>

            <div className="sr-field">
              <label>Username</label>
              <input
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>

            <div className="sr-field">
              <label>Email</label>
              <input
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
              {!emailValid && form.email && (
                <small className="sr-error">Invalid email format</small>
              )}
            </div>

            <div className="sr-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                name="password"
                onChange={handleChange}
              />
              <small className="sr-hint">
                Password must contain at least 8 characters, one uppercase
                letter, one number, and one special symbol.
              </small>
              {!passwordValid && form.password && (
                <small className="sr-error">
                  Password does not meet criteria
                </small>
              )}
            </div>

            <div className="sr-field">
              <label>SAP ID</label>
              <input
                name="sapId"
                placeholder="Enter SAP ID"
                onChange={handleChange}
              />
            </div>

            <div className="sr-grid-2">
              <div className="sr-field">
                <label>First Name</label>
                <input
                  name="firstName"
                  placeholder="First name"
                  onChange={handleChange}
                />
              </div>
              <div className="sr-field">
                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sr-grid-2">
              <div className="sr-field">
                <label>Date of Birth</label>
                <DatePicker
                  selected={dob}
                  onChange={(date) => {
                    setDob(date);
                    setForm({
                      ...form,
                      dob: date ? date.toISOString() : "",
                    });
                  }}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="DD-MM-YYYY"
                  className="sr-date-input"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>

              <div className="sr-field select-wrapper">
                <label>Gender</label>
                <select name="gender" onChange={handleChange}>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="sr-field">
              <label>Phone Number</label>
              <input
                name="phone"
                placeholder="10-digit mobile number"
                onChange={handleChange}
              />
              {!phoneValid && form.phone && (
                <small className="sr-error">Invalid phone number</small>
              )}
            </div>

            <div className="sr-field">
              <label>Alternate Email</label>
              <input
                name="altEmail"
                placeholder="Optional"
                onChange={handleChange}
              />
            </div>

            <div className="sr-actions">
              <div></div>
              <button
                type="button"
                className={`sr-btn-primary 
                  ${!isStep1Valid ? "disabled" : ""
                  }
                  `}
                // disabled={!isStep1Valid}
                onClick={() => setStep(2)}
              >
                Next
              </button>

            </div>
          </form>
        )}

        {step === 2 && (
          <form className="sr-form">
            <h2>Education details</h2>

            <div className="sr-field">
              <label>College Name</label>
              <input type="text" />
            </div>

            <div className="sr-grid-2">
              <div className="sr-field">
                <label>Branch</label>
                <input type="text" />
              </div>
              <div className="sr-field">
                <label>Branch Code</label>
                <input type="text" />
              </div>
            </div>

            <div className="sr-grid-2">
              <div className="sr-field">
                <label>Enrollment Year</label>
                <input type="number" />
              </div>
              <div className="sr-field">
                <label>Graduation Year</label>
                <input type="number" />
              </div>
            </div>

            <div className="sr-grid-2">
              <div className="sr-field">
                <label>Current Semester</label>
                <input type="number" />
              </div>
              <div className="sr-field">
                <label>CGPA</label>
                <input type="number" />
              </div>
            </div>

            <div className="sr-actions">
              <button
                className="sr-btn-outline"
                type="button"
                onClick={() => setStep(1)}
              >
                Previous
              </button>
              <button
                className="sr-btn-primary"
                type="button"
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="sr-form">
            <h2>Skills & experience</h2>

            <div className="sr-field">
              <label>Skills (comma separated)</label>
              <input type="text" />
            </div>

            <div className="sr-field">
              <label>Experience summary</label>
              <input type="text" />
            </div>

            <div className="sr-field">
              <label>Projects summary</label>
              <input type="text" />
            </div>

            <div className="sr-actions">
              <button
                className="sr-btn-outline"
                type="button"
                onClick={() => setStep(2)}
              >
                Previous
              </button>
              <button
                className="sr-btn-primary"
                type="button"
                onClick={() => setStep(4)}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="sr-form">
            <h2>Resume</h2>

            <div className="sr-field">
              <label>Upload resume</label>
              <input type="file" />
            </div>

            <div className="sr-resume-preview">
              <h3>Resume builder preview</h3>
              <p>
                A clean, professional resume will be generated using the
                information you have provided.
              </p>
              <button className="sr-btn-outline">Download PDF</button>
            </div>

            <div className="sr-actions">
              <button
                className="sr-btn-outline"
                type="button"
                onClick={() => setStep(3)}
              >
                Previous
              </button>
              <button className="sr-btn-primary">
                Complete registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRegister;
