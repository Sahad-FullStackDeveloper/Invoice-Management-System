import "../styles/navbar.css"

function Navbar(){

  const username = localStorage.getItem("username")

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return(

    <div className="navbar">

      <h3></h3>

      <div className="nav-right">
        <span>Welcome, {username}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>

    </div>

  )

}

export default Navbar