import { useContext, useEffect } from "react";
import Allblogs from "./Allblogs";
import {IoPerson, IoBriefcaseSharp, IoAtCircleOutline} from 'react-icons/io5'
import AuthContext from "../utils/Context";

const Profile=()=>{
    const {userprofile} = useContext(AuthContext);

    return (
        <div align='center'>
            <div id="outerprofilediv">
            <div id="profilediv" align='left'>
                <div><img id="personicon"  src={userprofile?.profile_image_base64} alt="display image" width="150" /></div> 
                <h3>{userprofile?userprofile.first_name+ ' ' +userprofile.last_name+ ' || ' +userprofile.username
                :<p></p>}</h3>
                <p className="alternates beside"><IoBriefcaseSharp/>{userprofile?' '+userprofile.expertise:<p></p>}</p>
                <p className="alternates beside"><IoAtCircleOutline/>{userprofile?' '+userprofile.email:<p></p>}</p>
            <div id="descdiv" align='left'>{userprofile?userprofile.description:<p></p>}</div>
            </div>
            <hr/><br/><br/>
            </div>
            <Allblogs/>
        </div>
        )
    }

export default Profile;