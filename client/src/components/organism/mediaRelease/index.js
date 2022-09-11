import './index.css';
import Navbar from './../NavBar/index';
import LoadingScreen from '../../atom/loadingScreen';
import { useState,useEffect } from 'react';
import MediaReleaseCard1 from '../../atom/mediareleaseCard1';
import calendar_img from './../../assets/image/event/calendar_img.svg'

const MediaRelease=(props)=>{



    const[mediaReleaseLoading,setMediaReleaseLoading]=useState(false);

return (
    <>
    <div className="mediarelease__outer">
        <div className="mediarelease__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="mediarelease__inner__section1">
                <div className="mediarelease__inner__section1__inner">
                    <div className="mediarelease__inner__section1__inner__top">
                        Home / media
                    </div>
                    <div className="mediarelease__inner__section1__inner__bottom">
                        Media releases
                    </div>
                </div>
            </div>


            <div className='mediarelease__inner__section2'>
                {
                    mediaReleaseLoading ? (
                        <div className='loading__outer' style={{width:"70%"}}>
                            <LoadingScreen/>    
                        </div>
                        
                    ):(
                        <>
                        <div className='event__inner__section2__left'>
                            {/* <div className='event__inner__section2__left__panel'>
                                <div className='event__inner__section2__left__panel__field'>
                                    From {'\u00A0'}<img src={calendar_img} style={{width:"20px",height:"20px"}}/> {'\u00A0'}: {'\u00A0'} <input type="date" className='event__inner__section2__left__panel__fieldinn'  onChange={(e)=>{setFromDate(e.target.value)}}/>
                                </div>
                                <div className='event__inner__section2__left__panel__field'>
                                    To {'\u00A0'}<img src={calendar_img} style={{width:"20px",height:"20px"}}/> {'\u00A0'}:  {'\u00A0'}<input type="date" className='event__inner__section2__left__panel__fieldinn'  onChange={(e)=>{setToDate(e.target.value)}}/>
                                </div>
                                <div className='event__inner__section2__button' onClick={()=>{filterClicked()}}>
                                    Filters
                                </div>
                            </div>
                            <div className='event__wronddata__modale' style={{display:errHiding}}>
                                <div className='event__wronddata__modale__text'>
                                    <img src={alert} className="event__wronddata__modale__text__img"></img>{'\u00A0'}{'\u00A0'}Invalid Information Entered 
                                </div>
                            </div> */}
                            <div className='event__inner__section2__left__display'>
                                {/* {displayerData.slice(splicing.start, splicing.end).map((ele)=>{
                                    const{id,name,date,info,link,img}=ele;
                                    var year=date.slice(0,4);
                                    var month=parseInt(date.slice(5, 7));
                                    var day=date.slice(8,10);
                                    var date_value=day+" "+monthLis[month-1]+" "+year;

                                    return( */}
                                        <MediaReleaseCard1 />
                                    {/* )
                                })} */}
                            </div>
                            {/* <div className='event__inner__left__bottom__panel'>
                                <div className='event__inner__left__bottom__panel__left' onClick={()=>{pageChange("dec")}}>
                                    <img src={arrow_left} style={{width:"80%",height:"80%"}}/>
                                </div>
                                <div className='event__inner__left__bottom__panel__line'>
                                    
                                </div>
                                <div className='event__inner__left__bottom__panel__page'>
                                    <div className='event__inner__left__bottom__panel__page__each' style={{width:"50px",height:"50px",backgroundColor:"#0AB1EE"}}>
                                        {pageCount}
                                    </div>
                                    {'\u00A0'} of {'\u00A0'}
                                    <div className='event__inner__left__bottom__panel__page__each' style={{width:"30px",height:"30px"}}>
                                        {pageLen}
                                    </div>
                                </div>
                                <div className='event__inner__left__bottom__panel__line'>
                                    
                                </div>
                                <div className='event__inner__left__bottom__panel__left' onClick={()=>{pageChange("inc")}}>
                                    <img src={arrow_right} style={{width:"80%",height:"80%"}}/>
                                </div>
                            </div>  */}
                        </div>
                        
                        </>
                    )
                }
            </div>
        </div>
    </div>
    </>
);
}

export default MediaRelease;