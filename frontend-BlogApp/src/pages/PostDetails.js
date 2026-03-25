import { useEffect,useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function PostDetails(){

  const {id}=useParams();
  const [post,setPost]=useState({});
  const [comments,setComments]=useState([]);
  const [text,setText]=useState("");
  const nav=useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/posts/${id}`)
    .then(res=>setPost(res.data));

    axios.get(`http://localhost:8080/api/comments/${id}`)
    .then(res=>setComments(res.data));
  },[id]);

  const like=()=>{
    axios.put(`http://localhost:8080/api/posts/like/${id}`)
    .then(res=>setPost(res.data));
  };

  const addComment=()=>{
    axios.post("http://localhost:8080/api/comments",{text,postId:id})
    .then(()=>window.location.reload());
  };

  return(
    <div>
      <Navbar/>

      <motion.div className="container" initial={{opacity:0}} animate={{opacity:1}}>
        <h1>{post.title}</h1>

        {post.imageUrl && <img src={post.imageUrl} width="100%" />}

        <p>{post.content}</p>

        <p>❤️ {post.likes}</p>
        <button onClick={like}>Like</button>

        <h3>Comments</h3>

        {comments.map(c=>(
          <div key={c.id} className="card">
            {c.text}
          </div>
        ))}

        <input onChange={e=>setText(e.target.value)}/>
        <button onClick={addComment}>Comment</button>

      </motion.div>
    </div>
  );
}

export default PostDetails;