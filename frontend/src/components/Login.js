import { Link, useNavigate } from "react-router-dom";
import React,{ useContext, useEffect, useState } from "react";
import AuthContext from "../utils/Context";

const Login=()=>{
    const {user, loginUser} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(()=>{
    //     document.getElementById('loginbtn').disabled = true;
    // },[])

    useEffect(()=>{
        user?navigate('/'):<p></p>;
    },[])

    // const CheckEntry =()=>{
    //     if (username.length>=3){
    //         if (password!==''){
    //             document.getElementById('loginbtn').disabled = false;
    //         }else{document.getElementById('loginbtn').disabled = true;}
    //     }else{document.getElementById('loginbtn').disabled = true;}
    // }

    return (
        <div align='center'>
            <form onSubmit={loginUser} id="loginwrapper">
                <h3 className='labeltxt'>Login</h3><br/><br/>
                <p className='labeltxt'>Username</p>
                <input type='text' name='username' onChange={event =>{setUsername(event.target.value);}} value={username} placeholder='Enter your Username' className="nametxt" required/><br/><br/>
                <p className='labeltxt'>Password</p>
                <input type="password" name="password" onChange={event =>{setPassword(event.target.value); }} value={password} placeholder='Enter Password' className="nametxt" required/><br/>
                <input type="submit"  id="loginbtn"></input><br/>
                <b><p className="alternates">Don't have an account? <Link to='/register'>Signup</Link></p></b>
            </form>
        </div>
        );
    }

export default Login;