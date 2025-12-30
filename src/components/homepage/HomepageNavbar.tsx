import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomepageNavbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<
    "categories" | "skills" | "locations"
  >("categories");

  return (
    <div className="hp-navbar">
      <div className="nav-left">
        <Link className="brand" to="/">InternHub</Link>

        <div className="dropdown">
          <button className="nav-link-btn">
            Internships ▾
          </button>

          <div className="dropdown-menu">
            <div className="dropdown-inner">

              {/* LEFT: MAIN OPTIONS */}
              <div className="menu-left">
                <div
                  className={`menu-item ${activeMenu === "categories" ? "active" : ""}`}
                  onMouseEnter={() => setActiveMenu("categories")}
                >
                  Top Categories
                </div>

                <div
                  className={`menu-item ${activeMenu === "skills" ? "active" : ""}`}
                  onMouseEnter={() => setActiveMenu("skills")}
                >
                  Top Skills
                </div>

                <div
                  className={`menu-item ${activeMenu === "locations" ? "active" : ""}`}
                  onMouseEnter={() => setActiveMenu("locations")}
                >
                  Top Locations
                </div>
              </div>

              {/* RIGHT: SUB OPTIONS */}
              <div className="menu-right">
                {activeMenu === "categories" && (
                  <>
                    <div className="sub-item">Web Development</div>
                    <div className="sub-item">App Development</div>
                    <div className="sub-item">Data Science</div>
                    <div className="sub-item">UI / UX Design</div>
                  </>
                )}

                {activeMenu === "skills" && (
                  <>
                    <div className="sub-item">React</div>
                    <div className="sub-item">Node.js</div>
                    <div className="sub-item">Flutter</div>
                    <div className="sub-item">Python</div>
                  </>
                )}

                {activeMenu === "locations" && (
                  <>
                    <div className="sub-item">Work from Home</div>
                    <div className="sub-item">Bangalore</div>
                    <div className="sub-item">Delhi</div>
                    <div className="sub-item">Mumbai</div>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
};

export default HomepageNavbar;
