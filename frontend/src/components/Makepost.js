import { useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import axios from "axios";
import AuthContext from "../utils/Context";


const Makepost=()=>{
    const backendUrl = 'http://127.0.0.1:8000/posts';
    const {user, userprofile, setUserprofile, setCurrentblog} = useContext(AuthContext);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [tag, setTag]  = useState(null);
    const navigate = useNavigate(null);
    const userid = userprofile?userprofile.cbuid:'';
    const tagx = document.getElementById("tagdiv");
    
    useEffect(()=>{//get the user details with the user's username
        axios.get(`http://127.0.0.1:8000/setuser/?query=${user.username}`)
            .then(response => {
                setUserprofile(response.data);
              })
              .catch(error => {
                console.error(error);
              });
             
            },[]);
    
    useEffect(()=>{
        //this checks if word count in post body is up to 20 and title is up to 3 and tag is selected before enabling the button to post blog
        body?.split(' ').length>=20?title?.split(' ').length>=3?tag?document.getElementById('createpostbtnmain').disabled = false:
        document.getElementById('createpostbtnmain').disabled = true: 
        document.getElementById('createpostbtnmain').disabled = true:
        document.getElementById('createpostbtnmain').disabled = true;
    },[body, title, tag])

    const HandleTag=()=>{
        //iterates through the tag options and sets the value of the tag selected
        let tagtype = document.getElementsByName('tagoption');
        for (let i=0; i<tagtype.length; i++){
            if (tagtype[i].checked)
                setTag(tagtype[i].value);
        }
    }

    useEffect(()=>{
        HandleTag();//on selecting tag value set the tag value
        tag?tagx.style.display = "none":<p></p>;//then make tag list become invisible
    },[tag])

    window.addEventListener('beforeunload',
    function (e) {
        // Check if any of the input fields are filled
        if (title?.length>4 || body?.length>9 || tag !== null) {
        // Cancel the event and show alert that the unsaved changes would be lost
        e.preventDefault();
    e.returnValue = '';
        }
    });
    
    function createPost() { //sends a post request to the backend to save the posts made  
        axios.post(backendUrl, {         
          title: title,         
          body: body,
          tag: tag,
          cbuid: userid
        })       
          .then((response) => {         
            setCurrentblog(response.data);       
        });   
        window.alert('Blog post titled "'+title+ '" created successfully')
        navigate('/post')  
      } 

    return (
        <div>
            <div className="mkpost">
                <p className='labeltxt'>Title</p><br/>
                <input type="text" onChange={event =>setTitle(event.target.value)}  placeholder="Enter a 'catchy' Title" className='titletxt' value={title} maxLength={100}></input><br/>
            </div>
            <div className="mkpost">
                <p className='labeltxt'>Select tag</p><br/>
                <div id="tagselect" onClick={()=>{tagx.style.display = "block"}}><p id="tagtxt">{tag? tag: "Select a tag"}</p><IoChevronDownOutline/>
                <div id="tagdiv">
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Science'}></input>Science</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Entertainment'}></input>Entertainment</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Lifestyle'}></input>Lifestyle</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Politics'}></input>Politics</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Tech'}></input>Tech</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Fashion'}></input>Fashion</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Travel'}></input>Travel</li><br/>
                    <li><input type='radio' className='tagoptions' onClick={()=>{HandleTag()}} name="tagoption" value={'Sports'}></input>Sports</li><br/>
                    </div>
                </div>
            </div>
            <div className="mkpostbox">
                <p className='labeltxt'>Content</p><br/>
                <textarea onChange={event =>setBody(event.target.value)} placeholder="Start writing your blog" id="blogbox" value={body} maxLength={1000000}></textarea>
            </div>
            <div id="info-panel">{body?'word count: ' + body.split(' ').length:''}</div>
            <button id='createpostbtnmain' onClick={createPost}>Post</button>
        </div>
        )
    }

export default Makepost;