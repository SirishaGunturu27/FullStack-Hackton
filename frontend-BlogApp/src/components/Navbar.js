import { Link, useNavigate } from "react-router-dom";
<h2 style={{color:"#e54646", fontFamily:"Pacifico, cursive", fontSize:"28px"}}>
  📝 BlogSpace
</h2>
function Navbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    nav("/");
  };

  const toggleDark = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="navbar">
      <h2>BlogSpace</h2>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/profile">Profile</Link>

        <button onClick={toggleDark}>🌙</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
    
  );
}

export default Navbar;