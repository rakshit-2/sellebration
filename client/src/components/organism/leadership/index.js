
import './index.css';
import Nabvbar from './../NavBar/index';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import {useState,useEffect} from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css'


import LeadershipPanelData from './../../assets/store/leadershippanelData';
import LeadershipCard1 from '../../atom/leadershipCard1';
import LeaderShipData from './../../assets/store/LeadershipData';
import Footer from './../../molecule/footer/index';
import LoadingScreen from '../../atom/loadingScreen';
import profile from './../../assets/image/profile.png';


const Leadership=(props)=>{



    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });


    
    const[director,setDirector]=useState([])
    const[head,setHead]=useState([])
    const[leader,setLeader]=useState([])
    const[vanguard,setVanguard]=useState([])

    const[loadingLeadership,setLoadingLeadership]=useState(true);

    function getterLeadership(x,i)
    {
        Axios.get(ApiLink+'/leadership/detail-each',
        {
        params:{
            name:x,
        }
        }).then((res)=>{
        if(i==0)
        {
            setDirector(res.data);
            setLoadingLeadership(false)
        }
        else if(i===2)
        {
            setHead(res.data);
        }
        else if(i===1)
        {
            setLeader(res.data);
        }
        else if(i===3)
        {
            setVanguard(res.data);
        }
        
        });
    }
    useEffect(() => {
        var li=["director",'head','leader','vanguard']
        for(var i=0;i<4;i++)
        {
            getterLeadership(li[i],i);
        }
    }, []);

    const[val,setVal]=useState("");
    function panelClicked(id)
    {
        var ele=parseInt(id);
        var ss="#"+ele.toString();
        setVal(ss);
    }


return (
    <>
    <div className='leadership__outer'>
        <div className='leadership__inner'>
            <Nabvbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className='leadership__inner__seaction1'>
                <div className='leadership__inner__seaction1__inner'>
                    <div className='leadership__inner__seaction1__button'>
                        View Profile
                    </div>
                    <div className='leadership__inner__seaction1__button'>
                        Chairman’s message
                    </div>
                </div>
            </div>
            <div className='leadership__inner__seaction2'>
                {LeadershipPanelData.map((ele)=>{
                    const{id,name}=ele;
                    return(
                        <a href={val} key={id} className='leadership__inner__seaction2__button' onClick={()=>{panelClicked(id)}}>
                            {name}
                        </a>
                    )
                })}
            </div>
            <div className='leadership__inner__seaction3'>
                <p id="0"></p>
                <div className="leadership__inner__seaction3__innerheading">
                    Bussiness Directors
                </div>
                <div className="leadership__inner__seaction3__innerdisplay" data-aos="fade-up">
                    {
                        loadingLeadership ? (
                            <div className='loading__outer'>
                                <LoadingScreen/>    
                            </div>
                            
                        ):(
                        director.map((ele)=>{
                            const{id,jobtitle,name}=ele;
                            return(
                                <><LeadershipCard1 name={name} img={profile} job={jobtitle} /></>
                            )
                        })
                        )
                    }
                </div>
                <p id="1"></p><br></br><br></br>
                <div className="leadership__inner__seaction3__innerheading">
                    Business Heads
                </div>
                <div className="leadership__inner__seaction3__innerdisplay" data-aos="fade-up"> 
                    {
                        loadingLeadership ? (
                            <div className='loading__outer'>
                                <LoadingScreen/>    
                            </div>
                            
                        ):(
                        head.map((ele)=>{
                            const{id,jobTitle,name}=ele;
                            return(
                                <><LeadershipCard1 name={name} img={profile} job={jobTitle} /></>
                            )
                        })
                        )
                    }
                </div>

                <p id="2"></p><br></br><br></br>
                <div className="leadership__inner__seaction3__innerheading" >
                    Senior Leaders
                </div>
                <div className="leadership__inner__seaction3__innerdisplay" data-aos="fade-up">
                    {
                        loadingLeadership ? (
                            <div className='loading__outer'>
                                <LoadingScreen/>    
                            </div>
                            
                        ):(
                            leader.map((ele)=>{
                            const{id,jobTitle,name}=ele;
                            return(
                                <><LeadershipCard1 name={name} img={profile} job={jobTitle} /></>
                            )
                        })
                        )
                    }
                </div>
                <p id="3"></p><br></br><br></br>
                <div className="leadership__inner__seaction3__innerheading">
                    The Vanguard
                </div>
                <div className="leadership__inner__seaction3__innerdisplayv" data-aos="fade-up">
                    <div className='leadership__inner__seaction3__innerdisplay__text'>
                        {LeaderShipData.TheVanguardText.text}
                    </div>
                    <div className='leadership__inner__seaction3__innerdisplay__dis'>
                    {
                        loadingLeadership ? (
                            <div className='loading__outer'>
                                <LoadingScreen/>    
                            </div>
                        ):(
                            vanguard.map((ele)=>{
                            const{id,name}=ele;
                            return(
                                <>
                                <div key={id} className='leadership__inner__seaction3__innerdisplay__dis__each'>
                                    {name}
                                </div>
                                </>
                                )
                            })
                        )
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default Leadership;