import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../utils/Context";
import Cosmobloglogo from '../Data/CosmoBlog.png';
import {IoClose, IoPerson, IoSearch, IoHome} from 'react-icons/io5';
import axios from "axios";

const Navbar=({setSearchparam, searchparam})=>{
    const backendURL = "http://127.0.0.1:8000"
    const {user, logoutUser, userprofile, setBlogdata, setUserprofile} = useContext(AuthContext);
    const [showsearch, setShowsearch] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [toggleactive, setToggleactive] = useState(false);
    const searchdropdown = document.getElementById("searchdiv");
    const optionsdropdown = document.getElementById("dropdown-content");
    const optionsdropdownbg = document.getElementById("dropdown-bg");

    useEffect(()=>{
        showsearch === true? searchdropdown.style.display = "block": toggleactive === true ? searchdropdown.style.display = "none": <p></p>
    },[showsearch, toggleactive]);

    // useEffect(()=>{
    //     showoptions === true? optionsdropdown.style.display = "block": toggleactive === true ? optionsdropdown.style.display = "none": <p></p>
    // },[showoptions, toggleactive]);

    const showOptionsPanel=()=>{//function to open modal that describes the account type
        var optionsPanel = document.getElementById('dropdown-bg');
        if (showOptions === false) {
            optionsPanel.style.display = "block";
            setShowOptions(true);
        } else if (showOptions === true){
            optionsPanel.style.display = "none";
            setShowOptions(false);
        }
    }

    window.addEventListener('click', function(event) {
        var optionBG = document.getElementById('dropdown-bg');
        if (event.target === optionBG){
        optionBG.style.display = "none";
        setShowOptions(false);}
    });

    useEffect(() => {
        // Send a GET request to your Django API to set the user profile based on the already authenticated username
        axios.get(`${backendURL}/setuser/?query=${user?.username}`)
            .then(response => {
                setUserprofile(response.data);
              })
              .catch(error => {
                console.error(error);
              });
      }, []);
    
    const showsearchfunc =()=> {setShowsearch((prev)=>!prev); setToggleactive(true)};
    // const showoptionsfunc =()=> {setShowOptions((prev)=>!prev); setToggleactive(true)};
    const closesearch =()=> {searchdropdown.style.display = "none"};

    return (
        <div>
            <header id = "navbardiv" > 
                <div className="nav-child child1" align="left"><left><Link to='/' className='link'><div className='option-icon'><IoHome/></div></Link></left></div>
                <div className="nav-child child2"><img src={Cosmobloglogo} id="logo" alt='Apollo Consult'/></div>
                
                <div className="nav-child child3" align="right">
                    <div className='search-small option-icon'>
                        <div className='searchoption' onClick={showsearchfunc}><IoSearch/></div>
                        <div className='searchdiv' id='searchdiv'>
                            <input type='search' placeholder='Search for blogs' id='searchbox' onChange={event =>setSearchparam(event.target.value)} value={searchparam}/>
                            <Link to='/search'><button id='searchbtn' onClick={closesearch}><IoSearch/></button></Link>
                        </div>
                    </div>
                    <div className="search-cont">
                    <input type='search' placeholder='Search for blogs' id='searchbox' onChange={event =>setSearchparam(event.target.value)} value={searchparam}/>
                    <Link to='/search'><button id='searchbtn'><IoSearch/></button></Link>
                    </div>
                    <div>
                        <div className='option-icon' onClick={showOptionsPanel}>{showOptions===false?<IoPerson/>:<IoClose/>}</div>
                        <div id="dropdown-bg">
                            <div className="dropdown-content" align='center' id="dropdown-content">
                                <span onClick={showOptionsPanel}>{user?<Link to='/profile' className='link'><br/><IoPerson/><br/><br/>{user.username}<br/></Link>:<Link to='/login' className='link'><p>Login</p></Link>}</span><hr/>
                                {!user ?null:
                                <div>
                                <Link to='/post-edit' className='link'><p onClick={showOptionsPanel}>Post a Blog</p></Link><hr/>
                                <Link to='/all-blogs' className='link'><p onClick={showOptionsPanel}>My Blogs</p></Link><hr/>
                                </div>}
                                <Link to='/search' className='link'><p onClick={showOptionsPanel}>Explore</p></Link><hr/>
                                <span onClick={showOptionsPanel}>{!user ? <Link to='/register' className='link'><p onClick={showOptionsPanel}>Create Account</p></Link>:<button id='logoutbtn' className='link' onClick={logoutUser}>Log Out</button>}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Link to='/' className='link'>
                    <img src={Cosmobloglogo} id="logo" alt='Apollo Consult'/></img>
                </Link>
                <div className='panel'>
                    <div className='panelitem' >
                        <p className='searchoption' onClick={showsearchfunc}><IoSearch/></p>
                        <div className='searchdiv' id='searchdiv'>
                            <input type='search' placeholder='Search for blogs' id='searchbox' onChange={event =>setSearchparam(event.target.value)} value={searchparam}/>
                            <Link to='/search'><button id='searchbtn' onClick={closesearch}><IoSearch/></button></Link>
                        </div>
                    </div>
                    <div className='panelitem' onClick={showoptionsfunc}>
                        <p className='searchoption'>{showoptions===false?<IoPerson/>:<IoClose/>}</p>
                        <div className="dropdown-content" align='center' id="dropdown-content">
                            <span>{user?<Link to='/profile' className='link'><br/><IoPerson/><br/><br/>{user.username}<br/></Link>:<Link to='/login' className='link'><p>Login</p></Link>}</span><hr/>
                            <Link to='/post-edit' className='link'><p>Post a Blog</p></Link><hr/>
                            <Link to='/all-blogs' className='link'><p>My Blogs</p></Link><hr/>
                            <Link to='/all-blogs' className='link'><p>Explore</p></Link><hr/>
                            <span>{!user ? <Link to='/register' className='link'><p>Create Account</p></Link>:<button id='logoutbtn' className='link' onClick={logoutUser}>Log Out</button>}</span>
                        </div>
                    </div>
                </div> */}
            </header>
        </div>
        )
    }

export default Navbar;