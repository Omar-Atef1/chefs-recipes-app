import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    authCtx.logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__content">
        <NavLink to="/" className="brand" onClick={closeMenuHandler}>
          Chefs & Recipes
        </NavLink>

        <button className="menu-toggle" onClick={toggleMenuHandler} aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenuHandler}>
            Home
          </NavLink>

          {authCtx.isLoggedIn && (
            <NavLink to="/my-recipes" onClick={closeMenuHandler}>
              My Recipes
            </NavLink>
          )}

          {!authCtx.isLoggedIn && (
            <NavLink to="/auth" onClick={closeMenuHandler}>
              Login
            </NavLink>
          )}

          {authCtx.isLoggedIn && (
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
