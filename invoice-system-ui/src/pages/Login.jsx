import API from "../services/api"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import styles from"../styles/login.module.css"

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

    localStorage.setItem("username", response.data.username)
    localStorage.setItem("role", response.data.role)

    navigate("/dashboard")

  } catch(error){

    console.log("Login Error:", error)

  }

}

    return(
      <div className={styles.loginContainerMain}>
        <div className={styles.loginContainer}>
            <h2>WELCOME</h2>

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
        </div>
    )
}

export default Login