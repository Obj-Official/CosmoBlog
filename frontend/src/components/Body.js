import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../utils/Context';
import {IoLayersOutline} from 'react-icons/io5';
import Slider from 'infinite-react-carousel';
//import $ from 'jquery';

const Body=()=>{
    const {setFeature} = useContext(AuthContext);
    const setfeature =(feature)=> setFeature(feature);

    return (
        <div>
           <center>
            <div id='bgdiv'>
            <div align="center" id='welcomediv'>{/*First Component of homepage*/}
                <br/><br/><br/><br/>
                <h1>COSMOBLOG</h1>
                <p id='intro'>Your Personal Diary and Journal which you can share with the world</p>
                <br/><br/>
                <Link to='/post-edit'><button id='createpostbtn'>Create Blog Now</button></Link>
            </div>
            </div>
            </center>
            <div>
                <h3 id='offer'>What CosmoBlog Offers</h3>{/*Second Component of homepage*/}
            <div className="icon-box">
                <div className="icon"><IoLayersOutline/></div>
                <h4 className="title">Aesthetics</h4>
                <p className="description">Create and share your blogs in the most visually apealing way</p>
            </div>
            <div className="icon-box">
                <div className="icon"><IoLayersOutline/></div>
                <h4 className="title">Personalization</h4>
                <p className="description">Create and own what you Create and share with your audience</p>
            </div>
            <div className="icon-box">
                <div className="icon"><IoLayersOutline/></div>
                <h4 className="title">Accessibility</h4>
                <p className="description">The blogs are easily accessible to all potential audience</p>
            </div>
            <div className="icon-box">
                <div className="icon"><IoLayersOutline/></div>
                <h4 className="title">Intuitive UI</h4>
                <p className="description">A simple and intuitive UI which can be operated by all</p>
            </div>
            </div> 
            <div id='cbbiz' align='left'>{/*Third Component of homepage*/}
            <div className="biz-div" id='stockimg'>
                <h4 className="biz-txt"></h4>
                <p className="biz-txt"></p>
            </div>
            <div className="biz-div" align='left'>
                <h3 className="biz-txt">CosmoBlog for Business</h3><br/>
                <h4 className="biz-txt">Cosmoblog is offering tools which can help business owners grow their engagement and 
                    reach potential customers</h4>
            </div>
            </div>
            <div id='createpost' align='center'>{/*Fourth Component of homepage*/}
                <br/><br/>
                <p id='creators'>Content creators are showcasing their creativity and writing engaging blogposts, 
                    you can join the fold now and exhibit your ingeniousness </p><br/>
                <Link to='/post-edit'><button id='createpostbtn'>Create Blog Now</button></Link>
            </div>
            <div id='allthemes'>{/*Fifth Component of homepage*/}
               <div align='left' id='featuring'><h3>Featuring...</h3></div><br/>
               <div id='themescroll'>
                <Slider dots slidesToShow={4}>
                <Link to='/feature'>
                <div className='themedivs' id='lifestyle' onClick={()=>{setfeature('Lifestyle')}}>
                   <p className='themes'> Lifestyle</p>
                </div>
                </Link>
                <Link to='/feature'>
                <div className='themedivs' id='politics' onClick={()=>{setfeature('Politics')}}>
                   <p className='themes'> Politics</p>
                </div>
                </Link>
                <Link to='/feature'>
                <div className='themedivs' id='entertainment' onClick={()=>{setfeature('Entertainment')}}>
                   <p className='themes'> Entertainment</p>
                </div>
                </Link>
                <Link to='/feature'>
                <div className='themedivs' id='fashion' onClick={()=>{setfeature('Fashion')}}>
                   <p className='themes'> Fashion</p>
                </div>
                </Link>
                <Link to='/feature'>
                <div className='themedivs' id='tech' onClick={()=>{setfeature('Tech')}}>
                   <p className='themes'> Tech</p>
                </div>
                </Link>
                <Link to='/feature'>
                <div className='themedivs' id='sports' onClick={()=>{setfeature('Sports')}}>
                   <p className='themes'> Sports</p>
                </div>
                </Link>
                </Slider>
                </div>
            </div>
            <div id='resources' align='center'>{/*Sixth Component of homepage*/}
                <div id='innerresources' align='left'>
                <h3>Resources by Cosmoblog</h3>
                <p>Useful resources like automatic mailing to stay in touch with your Audience</p>
                </div>
            </div>
            <div id='learning' align='center'>{/*Seventh Component of homepage(Last before footer)*/}
                <div id='innerresources' align='left'>
                <h3>CosmoBlog for Learning</h3>
                <p>Curate a series of related educative blogs into a comprehensive course for potential Students</p>
                </div>
            </div>
        </div>
        )
    }

export default Body;