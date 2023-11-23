import Cosmobloglogo from '../Data/CosmoBlog.png';
import {IoChevronForwardOutline, IoLogoTwitter, IoLogoLinkedin, IoLogoFacebook} from 'react-icons/io5'
import {Link} from 'react-router-dom';

const Footer=()=>{
    return (
        <div>
            <div align='left' id='footertopwrapper'>
                <div className='footers'>
                    <img src={Cosmobloglogo} id="logo" alt='CosmoBlog'></img><br/>
                    <h4 className='footercontact'>Head Office</h4><br/>
                    <p className='footercontact'>Yaba, Lagos state, Nigeria</p><br/>
                    <p className='footercontact'>Phone: +234 814 030 1436</p><br/>
                    <p className='footercontact'>Email: helpdesk@cosmoblog.com</p>
                </div>
                <div className='footers'>
                    <h4>Useful Links</h4>
                    <li><IoChevronForwardOutline/> <a href='/' className='linksf'>Home</a></li><br/>
                    <li><IoChevronForwardOutline/> <a href="https://www.linkedin.com/company/cosmoblog/" className="linksf"> LinkedIn Page</a></li><br/>
                    <li><IoChevronForwardOutline/> <a href='#services'  className="linksf">Services</a></li><br/>
                    <li><IoChevronForwardOutline/> <a href='#' className="linksf" >Affiliates</a></li><br/>
                    <li><IoChevronForwardOutline/><Link to='/privacy-policy' className="linksf"> Privacy Policy</Link></li><br/>
                </div>
                <div className="footers">
                    <h4>Navigation</h4>
                    <li><IoChevronForwardOutline/><Link to='/all-blogs' className='linksf'> Blogs</Link></li><br/>
                    <li><IoChevronForwardOutline/><a href='#resources' className='linksf'> Resources</a></li><br/>
                    <li><IoChevronForwardOutline/><a href='#offer'  className="linksf"> Offers</a></li><br/>
                    <li><IoChevronForwardOutline/><Link to='/login' className='linksf'> Login</Link></li><br/>
                    <li><IoChevronForwardOutline/><Link to='/post-edit' className='linksf'>  Create</Link></li><br/>
                </div>
            </div>
            <footer align='left'>
                <div align='left' className='footers'>
                <p>Copyright © 2022 CosmoBlog<br/>All Rights Reserved </p>
                Designed by <b id='obj'>OBJ-PRIME</b>
                </div>
                <div id='socials'>
                <a href="https://www.twitter.com" className="links"><IoLogoTwitter/></a>
                <a href="https://www.facebook.com" className="links"><IoLogoFacebook/></a>
                <a href="https://www.linkedin.com/company/cosmoblog/" className="links"><IoLogoLinkedin/></a>
                </div> 
            </footer>
        </div>
        );
    }

export default Footer;