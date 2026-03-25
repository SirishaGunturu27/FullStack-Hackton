import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;