import { useContext, useEffect, useState } from "react";
import AuthContext from "../utils/Context";
import axios from "axios";

const Post=()=>{
    const {currentblog, setCurrentblog} = useContext(AuthContext);
    const [author, setAuthor] = useState({});
    currentblog.title? localStorage.setItem('currentblog', JSON.stringify(currentblog)): <p></p>;

    useEffect(()=>{
        setCurrentblog(()=>(localStorage.getItem('currentblog')?JSON.parse(localStorage.getItem('currentblog')):{}))
    },[])
    
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/setauthor/?query=${currentblog.cbuid}`)
            .then(response => {
                setAuthor(response.data);
              })
              .catch(error => {
                console.error(error);
              });
            },[currentblog]);

    return (
        <div align='center'>
            <div align='left' id="postdiv">
                <h2 className="labeltxt2">{currentblog.title}</h2>
                <h5 className="alternates"><b>{author.first_name+' '+author.last_name+ ' | '+currentblog.tag}</b><br/><br/>{currentblog.created_at}</h5><hr/>
                <p id="postcontent">{currentblog.body}<br/></p>
            </div>
        </div>
        )
    }

export default Post;