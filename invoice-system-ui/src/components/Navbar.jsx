import style from "../styles/navbar.module.css";

function Navbar() {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className={style.navbar}>
      <h3></h3>

      <div className={style.navRight}>
        <span>Welcome, {username}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
