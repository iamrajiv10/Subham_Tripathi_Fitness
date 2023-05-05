import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "./context/context";
// import
// import logo from "./image/"

function Navibar() {
  const [auth, setAuth] = useAuth();

  return (
    <div className="navbar">
      <Link to="/admin">
        <h1>
          S<span>T</span>F
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        {!auth.fullName ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
           <h5> {auth.fullName}</h5>
           
          </li>
        )}

        <li>
          <Link to="/details">Form</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Navibar;
