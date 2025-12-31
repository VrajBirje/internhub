import React, { useState } from "react";
import "../../assets/styles/auth.css";

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"student" | "employer">("student");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>
            Login as a {activeTab === "student" ? "Student" : "Employer"}
          </p>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">
          <div
            className={`auth-tab ${
              activeTab === "student" ? "active" : ""
            }`}
            onClick={() => setActiveTab("student")}
          >
            Student
          </div>
          <div
            className={`auth-tab ${
              activeTab === "employer" ? "active" : ""
            }`}
            onClick={() => setActiveTab("employer")}
          >
            Employer
          </div>
        </div>

        {/* Form */}
        <form className="auth-form">
          <div className="auth-field">
            <label>Email or Username</label>
            <input
              type="text"
              placeholder={
                activeTab === "student"
                  ? "student@example.com"
                  : "info@techcorp.com"
              }
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="button" className="auth-button">
            Login as {activeTab === "student" ? "Student" : "Employer"}
          </button>
        </form>

        <div className="auth-footer">
          Forgot password? <span>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
