import './index.css';
import Navbar from './../NavBar/index';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import ApiLink from './../../assets/store/apiLink'

import LoadingScreen from './../../atom/loadingScreen/index';
import test from './../../assets/image/test.png';
import calendar_img from './../../assets/image/event/calendar_img.svg';
import EventCard1 from '../../atom/eventCard1';
import alert from './../../assets/image/event/alert.svg'

const Event=(props)=>{

    const d = new Date();
    const Day=d.getDate();
    const Month=d.getMonth();
    const Year=d.getFullYear();
    const default_date=Year+"-"+Month+"-"+Year;




    const[all,setAll]=useState();
    const[displayerData,setDisplayerData]=useState()
    const[company,setCompany]=useState();
    const[cname,setCname]=useState("");
    const[fromDate,setFromDate]=useState("");
    const[toDate,setToDate]=useState("");


    const[errHiding,setErrHiding]=useState("none")

    const monthLis=["January","February","March","April","May","June","July","August","September","October","November","December"]
    const[eventLoading,setEventLoading]=useState(true);
    
    
    
    
    function filterAllData(li)
    {
        var lis=[];
        var company_name=[{id:0,name:"Company Name"}];
        var checker=[]
        var k=1;
        for(var i=0;i<li.length;i++)
        {
            var year=parseInt(li[i].date.slice(0,4));
            var month=parseInt(li[i].date.slice(5, 7));
            var day=parseInt(li[i].date.slice(8,10));
            if(day>=Day && month>=Month && year>=Year)
            {
                var flag=0;
                for(var j=0;j<checker.length;j++)
                {
                    if(checker[j]==li[i].name)
                    {
                        flag=1;
                        break
                    }
                }
                if(flag===0)
                {
                    company_name.push({id:k,name:li[i].name});
                    checker.push(li[i].name)
                    k+=1;
                }
                lis.push(li[i]);
            }
        }
        setCompany(company_name);
        setAll(lis);
        setDisplayerData(lis);
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



    function hidingError()
    {
        setErrHiding("none")
    }

    function filterClicked()
    {
        if((cname==="" || cname==="Company Name") || fromDate==="" || toDate==="")
        {
            setErrHiding("flex")
            setTimeout(hidingError, 3000);
        }
        else
        {
            var fromyear=fromDate.slice(0,4);
            var frommonth=fromDate.slice(5, 7);
            var fromday=fromDate.slice(8,10);
            var fromDateFull=parseInt(fromyear+frommonth+fromday) 
            var toyear=toDate.slice(0,4);
            var tomonth=toDate.slice(5, 7);
            var today=toDate.slice(8,10);
            var toDateFull=parseInt(toyear+tomonth+today) 
            
            if(toDateFull<fromDateFull)
            {
                setErrHiding("flex")
                setTimeout(hidingError, 3000);
            }
            var li=[]
            for(var i=0;i<all.length;i++)
            {
                var year=all[i].date.slice(0,4);
                var month=all[i].date.slice(5, 7);
                var day=all[i].date.slice(8,10);
                var dayFull=parseInt(year+month+day)

                if(dayFull>=fromDateFull && dayFull<=toDateFull)
                {
                    if(all[i].name==cname)
                    {
                        li.push(all[i])
                    }
                }
            }
            if(li.length===0)
            {
                setDisplayerData([{id:0,name:"no data",date:"",info:"",link:"",img:""}]);
            }
            else
            {
                setDisplayerData(li);
            }
           
        }
    }
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
                                <select className='event__inner__section2__left__panel__field' onChange={(e)=>[setCname(e.target.value)]}>
                                    {company.map((ele)=>{
                                        const{id,name}=ele;
                                        return(
                                            <option key={id} value={name}>{name}</option>
                                        )
                                    })}
                                    
                                </select>
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
                            </div>
                            <div className='event__inner__section2__left__display'>
                                {displayerData.map((ele)=>{
                                    const{id,name,date,info,link,img}=ele;
                                    var year=date.slice(0,4);
                                    var month=parseInt(date.slice(5, 7));
                                    var day=date.slice(8,10);
                                    var date_value=day+" "+monthLis[month-1]+" "+year;

                                    return(
                                        <EventCard1 test={test} id={id} name={name} info={info} link={link} img={img} date_value={date_value}/>
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