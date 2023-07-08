import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/login");
  };
  return (  
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <img className="logo" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSx32Bx2DOZxMAnjDmoBkJ2g1kfOwTCbTGHYjyYqCXy5tYETs9T" alt="" />
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={handleClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
