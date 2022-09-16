
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import Innovationdata from '../../assets/store/innovationData';
import InnovationCard1 from '../../atom/innovationCard1';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import LoadingScreen from '../../atom/loadingScreen';
import img from './../../assets/image/test.png';




const Innovation=(props)=>{


    const[insight,setInsight]=useState()
    const[insightLoading,setInsightLoading]=useState(true)

    const[card,setCard]=useState()
    const[cardLoading,setCardLoading]=useState(true)

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function requestGetter(x)
    {
        if(x==="insight")
        {
            Axios.get(ApiLink+'/innovation/insight-data',
            {
            params:{
                name:"insight",
            }
            }).then((res)=>{
                setInsight(res.data);
                setInsightLoading(false);
            })
        }
        else if(x==="card")
        {
            Axios.get(ApiLink+'/innovation/card-data',
            {
            params:{
                name:"card",
            }
            }).then((res)=>{
                setCard(res.data);
                setCardLoading(false);
            })
        }
    }

    useEffect(() => {
        requestGetter("insight");
        requestGetter("card");
    }, []);


    return (
    <>
    <div className='innovation_outer'>
        <div className='innovation_inner'>

       
                <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
                <div className='innovation__sec1'>
                    <div className='innovation__sec1__top'>
                        <div className='innovation__sec1__top__inner'>
                            <div className='innovation__sec1__top__left'>
                                Innovation
                            </div>
                            <div className='innovation__sec1__top__right'>
                                <div className='innovation__sec1__top__right__inner'>
                                Share
                                <img style={{padding:"0 0 0 1rem"}} src={image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='innovation__sec1__bottom'>
                        <div className='innovation__sec1__bottom__image'>
                        </div>
                        <div className='innovation__sec1__bottom__inner'>
                            <div className='innovation__sec1__bottom__inner_head'>
                            Innovation insights
                            </div>
                            <div className='innovation__sec1__bottom__inner_title'>
                            More stories
                            </div>
                            {
                                insightLoading ? (

                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                    
                                ):(
                                <div className='innovation__sec1__bottom__inner_card'>
                                    {insight.map((ele)=>{
                                        const{id,info}=ele;
                                        return(
                                            <>
                                            <InnovationCard1 id={id} img={img} title={info}/>
                                            </>
                                        )
                                    })}
                                </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>

                {
                    cardLoading ? (

                    <div className='loading__outer'>
                        <LoadingScreen/>    
                    </div>
                        
                    ):(
                        <>
                        {card.map((ele)=>{
                            const{id,name,info}=ele;
                            if(id%2===0)
                            {
                                return(
                                    <div className='innovation__sec2__inner__section3'>
                                        <div className='innovation__sec2__inner__section3__each1'>
                                            <div className='innovation__sec2__inner__section3__each1__inner'>
                                                <img src={img} className="innovation__sec2__section3__img"/>
                                            </div>
                                        </div>
                                        <div className='innovation__sec2__inner__section3__each2'>
                                            <div className='innovation__sec2__inner__section3__each2__inner'>
                                                <div className='innovation__sec2__inner__section3__each2__inner__up'>
                                                    <div className='innovation__sec2__inner__section3__each2__inner__heading'>
                                                        {name}
                                                    </div>
                                                    <div className='innovation__sec2__inner__section3__each2__inner__text'>
                                                        {info}
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            else
                            {
                                return (
                                    <div className='innovation__sec2__inner__section3'>
                                        <div className='innovation__sec2__inner__section3__each1' style={{justifyContent:"flex-end"}}>
                                            <div className='innovation__sec2__inner__section3__each1__inner'>
                                                <img src={img} className="innovation__sec2__section3__img"/>
                                            </div>
                                        </div>
                                        <div className='innovation__sec2__inner__section3__each2' style={{justifyContent:"flex-start"}}>
                                            <div className='innovation__sec2__inner__section3__each2__inner'>
                                                <div className='innovation__sec2__inner__section3__each2__inner__up'>
                                                    <div className='innovation__sec2__inner__section3__each2__inner__heading'>
                                                        {name}
                                                    </div>
                                                    <div className='innovation__sec2__inner__section3__each2__inner__text'>
                                                        {info}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        </>
                    )
                }
                

            <Footer/>
        </div>
    </div>
    </>
);
}

export default Innovation;