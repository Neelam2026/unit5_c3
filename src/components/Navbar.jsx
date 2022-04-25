import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <div className="navbar">
      <Link className="nav-home" to="/" style={{margin :"2rem"}}>
        Home
      </Link>
      <Link className="nav-list" to="/employees" style={{margin :"2rem"}}>
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin" style={{margin :"2rem"}}>
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      {isAuth?
      <Link className="nav-logout" to="/logout" >
        Logout
      </Link>
       :
      <Link className="nav-login" to="/login" >
        Login
      </Link>
       }
    </div>
  );
};
