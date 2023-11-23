import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../utils/Context";
import axios from "axios";

const Featureblogs =()=>{
    const {setCurrentblog, blogdata, setBlogdata, feature} = useContext(AuthContext);
    const navigate = useNavigate();
    //when any of the feature is clicked in home page the feature is set and a link takes you here
    //this page then use the value stored in the feature to filter out all blogs with that feature
    //this is done by the following axios call to the backend

    
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/searchpoststag/?query=${feature}`)
            .then(response => {
              setBlogdata(response.data);
            })
            .catch(error => {
              console.error(error);
            });
      }, []); 

      useEffect(()=>{
        blogdata?<p></p>: navigate('/search')
      })
      
      const setblog =(b)=>{setCurrentblog(blogdata[b])}
      return (
        <div align='center' id='allblogsdiv'> 
        <h3 className="labeltxt">{feature+' '} blogs</h3>
        {blogdata?.map((bloghandle, blogindex)=>{//all the maps are used for setting filtered blogs
        return(
        <Link to='/post' className="link" key={blogindex}>
            <div id="blogitem" align='left' onClick={(e)=>{setblog(blogindex)}}>
                <h3 className="labeltxt">{bloghandle.title}</h3>
                <p id="blogitemtrunc">{bloghandle.body}</p>
            </div>
        </Link>
        )
        })}
        </div>
        )
}

export default Featureblogs;