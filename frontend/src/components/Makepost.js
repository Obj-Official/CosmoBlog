import { useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDownOutline, IoInformationCircle } from "react-icons/io5";
import axios from "axios";
import AuthContext from "../utils/Context";


const Makepost=()=>{
    const backendUrl = 'http://127.0.0.1:8000/posts';
    const backendURL = "http://127.0.0.1:8000"
    const {user, userprofile, setUserprofile, setCurrentblog} = useContext(AuthContext);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [tag, setTag]  = useState(null);
    const navigate = useNavigate(null);
    const userid = userprofile?userprofile.cbuid:'';
    const tagx = document.getElementById("tagdiv");
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
            const file = event.target.files[0];
            setImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImageURL(reader.result);
            };
            reader.readAsDataURL(file);
        };

    const postInfo =() => alert("Title must have at least three words, a theme must be selected and blog post must have at least 20 words, theme image is optional.")
    
    useEffect(()=>{//get the user details with the user's username
        axios.get(`${backendURL}/setuser/?query=${user.username}`)
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
        setTag(document.querySelector('select[name="tag"]')?.value);
    }

    useEffect(()=>{
        HandleTag();//on selecting tag value set the tag value
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
          cbuid: userid,
          image1: imageURL
        })       
          .then((response) => {         
            setCurrentblog(response.data);       
        });   
        window.alert('Blog post titled "'+title+ '" created successfully')
        navigate('/post')  
      } 

    return (
        <div>
            <div align="right" width="80%" onClick={postInfo}><IoInformationCircle/></div>
            <div className="mkpost">
                <label className='labeltxt'>Title</label><br/>
                <input type="text" onChange={event =>setTitle(event.target.value)}  placeholder="Enter a 'catchy' Title" className='titletxt' value={title} maxLength={100} required/><br/>
            </div>
            <div className="mkpost">
                <label className='labeltxt'>Select tag</label><br/>
                <select name="tag" className="list" onChange={HandleTag} required>
                    <option value="">--Select a tag--</option>
                    <option value="Science">Science</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Finance">Finance</option>
                    <option value="Politics">Politics</option>
                    <option value="Tech">Tech</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Travel">Travel</option>
                    <option value="Sports">Sports</option>
                </select>
            </div>
            <input type="file" id="fileInput" onChange={handleImageUpload}/>
            {/* <!-- Custom label to trigger file input --> */}
            <center>
            <label for="fileInput" class="blog-theme-label" align="center">
                    <span className="add-img">+</span><br/>
                <span>Add Blog Theme Image</span>
            </label>
            {image && (
                <div>
                <h3>Selected Image:</h3>
                <img src={imageURL} alt="Selected" width="150" />
                </div>
            )}
            </center>
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