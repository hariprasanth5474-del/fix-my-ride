import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Dashboard.css'

function Login(props){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password)


        if (username ==""||password ==""){
            alert("Please fill all fiedls")
        

        }
        else if (username =="hari"&& password =="123")
        {
            props.setLogin(true);
        }
        else{
            props.setLogin(false);
        }
        navigate("/dashboard");
        console.log("props", props)
    };

return(
    <div className="login-container">
        <form className="login-box" onSubmit={handleLogin} >
            <h2>Login</h2>
            <input type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />

            <input type="password"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)} />

            <button type="Submit">Login</button>

        </form>
    </div>);
}
export default Login;