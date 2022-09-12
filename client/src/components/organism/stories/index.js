import './index.css';
import Navbar from './../NavBar/index';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import calendar_img from './../../assets/image/event/calendar_img.svg';
import LoadingScreen from '../../atom/loadingScreen';
import share_img from './../../assets/image/event/share_img.svg';


const Stories=(props)=>{
    const[all,setAll]=useState();
    const[displayerData,setDisplayerData]=useState();
    const[company,setCompany]=useState();
    const[cname,setCname]=useState("");
    const[errHiding,setErrHiding]=useState("none");
    const[splitting,setSplitting]=useState();
    
    
    
    const[len,setLen]=useState(14);



    


    const monthLis=["January","February","March","April","May","June","July","August","September","October","November","December"]
    const[storiesLoading,setStoriesLoading]=useState(true);


    // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  function filterAllData(li)
  {
    var ele=parseInt(len/3);
    var per=parseInt(len%3);
    var n=parseInt(ele);
    var lis=[0,ele,ele,n+ele,n+ele,n+n+ele];
    var flag=0;
    for(var i=0;i<per;i++)
    {
        if(flag===0)
        {
            for(var j=1;j<lis.length;j++)
            {
                lis[j]=lis[j]+1;
            }
            flag=1;
        }
        else if(flag===1)
        {
            for(var j=3;j<lis.length;j++)
            {
                lis[j]=lis[j]+1;
            }
            flag=2
        }
        else if(flag===2)
        {
            lis[5]=lis[5]+1
            flag=0
        }
    }
    setSplitting(lis);
    setStoriesLoading(false);
  }


  
  useEffect(() => {
      Axios.get(ApiLink+'/stories/all-data',
      {
      params:{
          name:"all",
      }
      }).then((res)=>{
            filterAllData(res.data);
            setDisplayerData(res.data);
      })
  }, []);


  return (
    <>
    <div className="stories__outer">
        <div className="stories__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            
            
            <div className="stories__inner__section1">
                <div className="stories__inner__section1__inner">
                    <div className="stories__inner__section1__inner__top">
                        Home / media
                    </div>
                    <div className="stories__inner__section1__inner__bottom">
                        Stories
                    </div>
                </div>
            </div>

            

            <div className='stories__inner__section2'>
                <div className='stories__inner__section2__left__panel'>
                    <select className='stories__inner__section2__left__panel__field' >
                        <option>Company1</option>
                    </select>
                    <select className='stories__inner__section2__left__panel__field' >
                        <option>Topic</option>
                    </select>
                    <div className='stories__inner__section2__button__filter'>
                        Filters
                    </div>
                </div>
                {
                    storiesLoading ? (
                        <div className='loading__outer'>
                            <LoadingScreen/>    
                        </div>
                        
                    ):(
                    <div className='stories__inner__section2__display'>
                        <div className='stories__inner__section2__col'>
                            {displayerData.slice(splitting[0],splitting[1]).map((ele)=>{
                                const{id,name,date,info,topic,link}=ele;
                                var year=date.slice(0,4);
                                var month=parseInt(date.slice(5, 7));
                                var day=date.slice(8,10);
                                var date_value=day+" "+monthLis[month-1]+" "+year;
                                return(
                                <div key={id} className='stories__inner__section2__col__each'>
                                    <div className='stories__inner__section2__col__each__img'>

                                    </div>
                                    <div className='stories__inner__section2__col__each__text'>
                                        <div className='stories__inner__section2__col__each__text__topic'>
                                            {topic}
                                        </div>
                                        <div className='stories__inner__section2__col__each__text__date'>
                                            {date_value}
                                        </div>
                                        <div className='stories__inner__section2__col__each__text__heading'>
                                            {name}
                                        </div>
                                        <div className='stories__inner__section2__col__each__text__info'>
                                            {info}
                                        </div>
                                        <div className='stories__inner__section2__button'>
                                            Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                        </div>
                                    </div>
                                </div>   
                                 )
                                
                            })}
                        </div>
                        <div className='stories__inner__section2__col'>
                            {displayerData.slice(splitting[2],splitting[3]).map((ele)=>{
                                const{id,name,date,info,topic,link}=ele;
                                var year=date.slice(0,4);
                                var month=parseInt(date.slice(5, 7));
                                var day=date.slice(8,10);
                                var date_value=day+" "+monthLis[month-1]+" "+year;
                                return(
                                <div  key={id} className='stories__inner__section2__col__each'>
                                    <div className='stories__inner__section2__col__each__img'>

                                    </div>
                                    <div className='stories__inner__section2__col__each__text'>
                                        <div className='stories__inner__section2__col__each__text__topic'>
                                            {topic}
                                        </div>
                                        <div className='stories__inner__section2__col__each__text__date'>
                                            {date_value}
                                        </div>
                                        <div className='stories__inner__section2__col__each__text__heading'>
                                            {name}
                                        </div>
                                        <div className='stories__inner__section2__col__each__text__info'>
                                            {info}
                                        </div>
                                        <div className='stories__inner__section2__button'>
                                            Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                        </div>
                                    </div>
                                </div> 
                                 )
                                
                            })}
                        </div>
                        <div className='stories__inner__section2__col'>
                            {displayerData.slice(splitting[4],splitting[5]).map((ele)=>{
                                const{id,name,date,info,topic,link}=ele;
                                var year=date.slice(0,4);
                                var month=parseInt(date.slice(5, 7));
                                var day=date.slice(8,10);
                                var date_value=day+" "+monthLis[month-1]+" "+year;
                                return(
                                    <div  key={id} className='stories__inner__section2__col__each'>
                                        <div className='stories__inner__section2__col__each__img'>
    
                                        </div>
                                        <div className='stories__inner__section2__col__each__text'>
                                            <div className='stories__inner__section2__col__each__text__topic'>
                                                {topic}
                                            </div>
                                            <div className='stories__inner__section2__col__each__text__date'>
                                                {date_value}
                                            </div>
                                            <div className='stories__inner__section2__col__each__text__heading'>
                                                {name}
                                            </div>
                                            <div className='stories__inner__section2__col__each__text__info'>
                                                {info}
                                            </div>
                                            <div className='stories__inner__section2__button'>
                                                Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                            </div>
                                        </div>
                                    </div>  
                                )
                            })}
                        </div>
                    </div>
                    )
                }
                
                
            </div>

        </div>
    </div>
    </>
  );
}

export default Stories;