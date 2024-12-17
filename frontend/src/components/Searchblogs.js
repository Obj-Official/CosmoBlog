import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../utils/Context";
import axios from "axios";


const Searchblogs=({searchparam})=>{
    const backendURL = "http://127.0.0.1:8000"
    const {setCurrentblog, blogdata, setBlogdata} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get(`${backendURL}/searchposts/?query=${searchparam}`)
          .then(response => {
            setBlogdata(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    }, [searchparam]); 

    const setblog =(b)=>{setCurrentblog(blogdata[b]); navigate('/post')}
    return (
        <div align='center' id='allblogsdiv'> 
        {searchparam?<h3 className="labeltxt">Search Results for {' "'+ searchparam + '" '}</h3>:<h3 className="labeltxt">Browse Blogs</h3>}
        {blogdata?.map((bloghandle, blogindex)=>{
        return(
        <span to='/post' className="link" key={blogindex}>
            <div id="blogitem" align='left' onClick={(e)=>{setblog(blogindex)}}>
                <h3 className="labeltxt">{bloghandle.title}</h3>
                <p id="blogitemtrunc">{bloghandle.body}</p>
            </div>
        </span>
        )
        })}
        </div>
        )
    }

export default Searchblogs;