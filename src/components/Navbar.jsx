import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FaHome, 
  FaBoxOpen, 
  FaInfoCircle, 
  FaEnvelope, 
  
  FaUserPlus,
  FaSignInAlt,
  
} from "react-icons/fa";
import logo from "../assets/images/Let Us Buy Logo.jpg";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserFromStorage = () => {
      const storedUser = localStorage.getItem("user");
      try {
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        setUser(parsedUser);
      } catch (err) {
        console.error("Invalid user data in localStorage");
        setUser(null);
      }
    };

    loadUserFromStorage();

    const handleStorageChange = () => {
      loadUserFromStorage();
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    if (isMobile) setIsOpen(false);
    window.location.reload();
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1020,
        width: "100%",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"> 
          <span className="imgspan"> 
            <img src={logo} alt="logo" className="headerimg" style={{ height: "30px" }} /> 
          </span> 
          <b className="text- ms-2">L-U-B 365</b> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link px-3 py-2 rounded mx-1"
                onClick={() => isMobile && setIsOpen(false)}
                style={{
                  transition: "all 0.3s ease",
                  color: "#f8f9fa",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(231, 209, 6, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaHome className="me-2" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link px-3 py-2 rounded mx-1"
                onClick={() => isMobile && setIsOpen(false)}
                style={{
                  transition: "all 0.3s ease",
                  color: "#f8f9fa",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(231, 209, 6, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaBoxOpen className="me-2" />
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-link px-3 py-2 rounded mx-1"
                onClick={() => isMobile && setIsOpen(false)}
                style={{
                  transition: "all 0.3s ease",
                  color: "#f8f9fa",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(231, 209, 6, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaInfoCircle className="me-2" />
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-link px-3 py-2 rounded mx-1"
                onClick={() => isMobile && setIsOpen(false)}
                style={{
                  transition: "all 0.3s ease",
                  color: "#f8f9fa",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(231, 209, 6, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaEnvelope className="me-2" />
                Contact us
              </Link>
            </li>

            
            <ul className="navbar-nav">
              {!user ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/Signup"
                      className="nav-link px-3 py-2 rounded mx-1"
                      onClick={() => isMobile && setIsOpen(false)}
                      style={{
                        transition: "all 0.3s ease",
                        color: "#f8f9fa",
                        backgroundColor: "rgba(253, 229, 13, 0.7)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(230, 237, 238, 0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(201, 197, 3, 0.7)")
                      }
                    >
                      <FaUserPlus className="me-2" />
                      Signup
                    </Link>
                  </li>
                  <br/>
                  <li className="nav-item">
                    <Link
                      to="/Signin"
                      className="nav-link px-3 py-2 rounded mx-1"
                      onClick={() => isMobile && setIsOpen(false)}
                      style={{
                        transition: "all 0.3s ease",
                        color: "#010407ff",
                        backgroundColor: "rgba(226, 230, 12, 0.7)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(221, 221, 8, 0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(243, 243, 237, 0.7)")
                      }
                    >
                      <FaSignInAlt className="me-2" />
                      Sign in
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-light px-3 py-2">
                      Welcome, {user[1] || "User"}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn px-3 py-2 rounded mx-1"
                      onClick={handleLogout}
                      style={{
                        transition: "all 0.3s ease",
                        color: "#f8f9fa",
                        backgroundColor: "rgba(220, 53, 69, 0.7)",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(220, 53, 69, 0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(220, 53, 69, 0.7)")
                      }
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;