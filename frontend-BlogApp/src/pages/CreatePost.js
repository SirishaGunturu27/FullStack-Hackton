import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CreatePost(){

  const [t,setT]=useState("");
  const [c,setC]=useState("");
  const [img,setImg]=useState("");
  const nav=useNavigate();

  const submit=()=>{
    axios.post("http://localhost:8080/api/posts",{
      title:t,
      content:c,
      imageUrl:img
    }).then(()=>nav("/home"));
  };

  return(
    <div>
      <Navbar/>

      <div className="container">
        <input placeholder="Title" onChange={e=>setT(e.target.value)}/>
        <textarea placeholder="Content" onChange={e=>setC(e.target.value)}/>
        <input placeholder="Image URL" onChange={e=>setImg(e.target.value)}/>

        <button onClick={submit}>Post</button>
      </div>
    </div>
  );
}

export default CreatePost;