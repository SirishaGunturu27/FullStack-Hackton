import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home(){

  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);
  
  const nav=useNavigate();

  useEffect(()=>{

    if(!localStorage.getItem("user")) nav("/");

    axios.get("http://localhost:8080/api/posts")
    .then(res=>{
      setPosts(res.data);
      setLoading(false);
    });

  },[]);

  if(loading){
    return(
      <div className="grid">
        {[1,2,3,4].map(i=>(
          <div key={i} className="skeleton"></div>
        ))}
      </div>
    );
  }

  return(
    <div>
      <Navbar/>

      <div className="container">

        <div className="grid">
          {posts.map(p=>(
            <motion.div
              key={p.id}
              className="card"
              onClick={()=>nav(`/post/${p.id}`)}
              whileHover={{scale:1.05}}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
            >

              {p.imageUrl && <img src={p.imageUrl} width="100%" />}

              <h3>{p.title}</h3>
              <p>{p.content.substring(0,100)}...</p>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;