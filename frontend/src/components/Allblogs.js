import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../utils/Context";
import axios from "axios";

const Allblogs=()=>{
    const {user, setCurrentblog, blogdata, setBlogdata, userprofile } = useContext(AuthContext);
    //blogdata[0]? localStorage.setItem('blogdata', JSON.stringify(blogdata)): console.log('i executed');
    const navigate = useNavigate();

    useEffect(()=>{
      // setBlogdata(()=>blogdata[0]?blogdata:(localStorage.getItem('blogdata')?JSON.parse(localStorage.getItem('blogdata')):[]))
      axios.get(`http://127.0.0.1:8000/userposts/?query=${userprofile?.cbuid}`)
      .then(response => {
        setBlogdata(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    });

    const setblog =(b)=>{setCurrentblog(blogdata[b]); navigate('/post')} //this helps to set the blog which was clicked on after 
                                                //the mapping, in the next page the body and title can be viewed
    return (
        <div align='center' id='allblogsdiv'> 
        {blogdata[0]?<p className="labeltxt">All Blog posts by {' '+user.username}</p>
        :
        <div><br/><br/><h3 className="labeltxt">No blogs posted yet</h3><br/>
        <Link to='/post-edit'><button id='createpostbtnmain'>Create Blog now</button></Link></div>}

        {blogdata?.map((bloghandle, blogindex)=>{//used to map all the blogs for this user filtered from database in the axios call
        return(
          <span className="link" key={blogindex}>
              <div id="blogitem" align='left' onClick={(e)=>{setblog(blogindex)}}>
                  <h3 className="labeltxt">{bloghandle.title}</h3>
                  <p id="blogitemtrunc">{bloghandle.body}</p>
              </div><br/>
          </span>
        )
        })}
        </div>
        )
    }

export default Allblogs;