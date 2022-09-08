import './index.css';
import Navbar from './../NavBar/index';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import ApiLink from './../../assets/store/apiLink'
import share_img from './../../assets/image/event/share_img.svg';
import LoadingScreen from './../../atom/loadingScreen/index';
import test from './../../assets/image/test.png';
import calendar_img from './../../assets/image/event/calendar_img.svg';

const Event=(props)=>{

    const d = new Date();
    const Day=d.getDate();
    const Month=d.getMonth();
    const Year=d.getFullYear();
    const default_date=Year+"-"+Month+"-"+Year;




    const[all,setAll]=useState();
    const[company,setCompany]=useState();



    const monthLis=["January","February","March","April","May","June","July","August","September","October","November","December"]
    const[eventLoading,setEventLoading]=useState(true);

    function filterAllData(li)
    {
        var lis=[];
        var company_name=[];
        const checker = new Set();
        for(var i=0;i<li.length;i++)
        {
            var year=parseInt(li[i].date.slice(0,4));
            var month=parseInt(li[i].date.slice(5, 7));
            var day=parseInt(li[i].date.slice(8,10));
            if(day>=Day && month>=Month && year>=Year)
            {
                company_name.push({id:li[i].id,name:li[i].name})
                lis.push(li[i]);
            }
        }
        setCompany(company_name);
        setAll(lis);
    }
    
    useEffect(() => {
        Axios.get(ApiLink+'/event/all-data',
        {
        params:{
            name:"all",
        }
        }).then((res)=>{
            filterAllData(res.data);
            setEventLoading(false);
        })
    }, []);



return (
    <>
    <div className="event__outer">
        <div className="event__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="event__inner__section1">
                <div className="event__inner__section1__inner">
                    <div className="event__inner__section1__inner__left">
                        Events
                    </div>
                </div>
            </div>
            <div className='event__inner__section2'>
                {
                    eventLoading ? (
                        <div className='loading__outer'>
                            <LoadingScreen/>    
                        </div>
                        
                    ):(
                        <div className='event__inner__section2__left'>
                            <div className='event__inner__section2__left__panel'>
                                <select className='event__inner__section2__left__panel__field'>
                                    {company.map((ele)=>{
                                        const{id,name}=ele;
                                        return(
                                            <option key={id} value={name}>{name}</option>
                                        )
                                    })}
                                    
                                </select>
                                <div className='event__inner__section2__left__panel__field'>
                                    From {'\u00A0'}<img src={calendar_img} style={{width:"20px",height:"20px"}}/> {'\u00A0'}: {'\u00A0'} <input type="date" className='event__inner__section2__left__panel__fieldinn'/>
                                </div>
                                <div className='event__inner__section2__left__panel__field'>
                                    To {'\u00A0'}<img src={calendar_img} style={{width:"20px",height:"20px"}}/> {'\u00A0'}:  {'\u00A0'}<input type="date" className='event__inner__section2__left__panel__fieldinn'/>
                                </div>
                                <div className='event__inner__section2__button'>
                                    Filters
                                </div>
                            </div>
                            <div className='event__inner__section2__left__display'>
                                {all.map((ele)=>{
                                    const{id,name,date,info,link,imh}=ele;
                                    var year=date.slice(0,4);
                                    var month=parseInt(date.slice(5, 7));
                                    var day=date.slice(8,10);
                                    var date_value=day+" "+monthLis[month-1]+" "+year;

                                    return(
                                        <div key={id} className='event__inner__section2__left__each'>
                                            <div className='event__inner__section2__left__each__left'>
                                                <img src={test} style={{width:"100%",height:"100%"}}/>
                                            </div>
                                            <div className='event__inner__section2__left__each__right'>
                                                <div className='event__inner__section2__left__each__right__date'>
                                                    {date_value}
                                                </div>
                                                <div className='event__inner__section2__left__each__right__name'>
                                                    {name}
                                                </div>
                                                <div className='event__inner__section2__left__each__right__text'>
                                                    {info}
                                                </div>
                                                <div className='event__inner__section2__left__each__right__button'>
                                                    <div className='event__inner__section2__button'>
                                                        Know more
                                                    </div>
                                                    <div className='event__inner__section2__button'>
                                                        Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>          
                        )
                    }
                <div className='event__inner__section2__right'>
                    
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default Event;