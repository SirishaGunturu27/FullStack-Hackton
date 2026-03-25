import Navbar from "../components/Navbar";

function Profile(){

  const user = JSON.parse(localStorage.getItem("user"));

  return(
    <div>
      <Navbar/>

      <div className="container">
        <div className="card">
          <h2>{user?.username}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;