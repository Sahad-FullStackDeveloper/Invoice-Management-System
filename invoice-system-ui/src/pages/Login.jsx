import API from "../services/api"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/login.css"

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
   

  const handleLogin = async () => {

  try {

    const response = await API.post("/Auth/login",{
      username: username,
      password: password
    })

    console.log("API Response:", response.data)

    // save login info
    localStorage.setItem("username", response.data.username)
    localStorage.setItem("role", response.data.role)

    navigate("/dashboard")

  } catch(error){

    console.log("Login Error:", error)

  }

}

    return(
        <div className="login-container">
            <h2>Login</h2>

            <input
             type="text"
             placeholder="Username"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
            />

            <input
             type="text"
             placeholder="Password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login