import { useState } from "react";
import  "../styles/Dashboard.css";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";


 function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLogin")
    navigate("/login");
  }

  console.log("localstoreage", localStorage.getItem("isLogin"));

  return (
    <nav className="nav">
      <h2>Fix My Ride</h2>

      <button
        type="button"
        className="hamburger"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        ☰
      </button>
     

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
{
    localStorage.getItem("isLogin") ? <>
    <li> <a href="/dashboard">Dashboard</a></li>
                    <li> <a href="/customer">Customer</a></li>
                    <li> <a href="/technician">Technician</a></li>
                    <li> <a href="/feedback">Feedback</a></li>
                    <li>  <a href="/settings">Settings</a></li>
                    <li>  <a href="/bill">Bill</a> </li> 
                    <li>  <a  style={{ cursor: "pointer" }} onClick={onLogout}>Logout</a></li>
    </> :           <li> <a href="/login">login</a></li>
}        
                    </ul>  
                    
                                
    </nav>
  
    

    );
    }
export default Nav;
