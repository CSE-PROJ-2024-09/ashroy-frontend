import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../constants/data";
import navlogo from "../../assets/images/Ashroy.webp";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AppHeader = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (uid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src={navlogo}
            alt="ashroy logo"
            height={"100%"}
            width={"40px"}
            className="rounded-circle me-2"
          />
          <span>Ashroy</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {routes.map((route) => (
              <li className="nav-item" key={route.label}>
                <NavLink className="nav-link" to={route.path}>
                  {route.label}
                </NavLink>
              </li>
            ))}

            <li className="nav-item d-grid align-items-center">
              {isAuthenticated ? (
                <button
                  className="btn btn-dark border-white rounded-5 btn-sm"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-dark border-white rounded-5 btn-sm"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
