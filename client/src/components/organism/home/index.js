
import './index.css';
import {useState} from 'react';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import map from './../../assets/image/home_img/map1.svg';
import HomePanelData from './../../assets/store/homepanelData';
import HomeDisplayData from './../../assets/store/homedisplayData';
import HomeCard1 from '../../atom/homeCard1';
import HomeLatestData from './../../assets/store/homelatestData';
import HomeCard2 from './../../atom/homeCard2/index';
import twitter from './../../assets/image/home_img/twitter.svg';
import facebook from './../../assets/image/home_img/facebook.svg';
import HomeCard3 from './../../atom/homeCard3/index';
import HomeNewsData from './../../assets/store/homenewsData';
import Footer from './../../molecule/footer/index';


const Home=(props)=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 750 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const[clickedPanel,setClickedPanel]=useState(0);
        
    function panelClicked(id,name)
    {
        setClickedPanel(id);
    }



    return (
        <>
        <div className="home__outer">
            <div className="home__inner">
                <div className="home__inner__inner">
                    <div className="home__inner__section1">
                        <img src={map} className="home__inner__section1__img"/>
                    </div>
                    <div className="home__inner__section2">
                        <div className="home__inner__section2__heading">
                            Our Stories
                        </div>
                        <div className="home__inner__section2__panel">
                            <div className="home__inner__section2__panel__left">
                                {HomePanelData.map((item) => {
                                    const {id,name}=item;
                                    if(id===clickedPanel)
                                    {
                                        return(
                                            <>
                                                <div key={id}className="home__inner__section2__panel__left__each" style={{borderBottom:"2px solid orange"}} onClick={()=>{panelClicked(id,name)}}>
                                                    {name}
                                                </div>
                                            </>
                                            )  
                                    }
                                    else
                                    {
                                        return(
                                            <>
                                                <div key={id}className="home__inner__section2__panel__left__each" onClick={()=>{panelClicked(id,name)}}>
                                                    {name}
                                                </div>
                                            </>
                                            )
                                    }
                                })}
                            </div>
                            <div className="home__inner__section2__panel__right">
                                <div className="home__inner__section2__panel__right__button">
                                    View All
                                </div>
                            </div>
                        </div>
                        <div className="home__inner__section2__display">
                        <Carousel responsive={responsive} swipeable={true} draggable={true} containerClass="carousel-container" utoPlaySpeed={1000}>
                            {HomeDisplayData[clickedPanel].map((ele) => {
                                const {id,heading,info}=ele;
                                return(
                                    <HomeCard1 id={id} heading={heading} info={info}/>
                                )
                            })}
                        </Carousel>
                        </div>
                    </div>
                    <div className="home__inner__section3">
                        <div className="home__inner__section3__heading">
                            Latest news
                        </div>
                        <div className='home__inner__section3__display'>
                            <div className='home__inner__section3__display__left'>
                            {HomeLatestData.map((ele) => {
                                const {id,date,info}=ele;
                                return(
                                    <>
                                        <HomeCard2 id={id} date={date} info={info}  />
                                    </>
                                )
                            })}
                            </div>
                            <div className='home__inner__section3__display__right'>
                                <iframe className='home__inner__section3__display__right__vid' src="https://www.youtube.com/embed/HlWISmjCfb8" title="Kanye West - Heartless (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className='home__inner__section3__display__right__vidbottom'>
                                    <div className='home__inner__section3__display__right__vidbottom__button'>
                                        View More Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home__inner__section3__viewmore'>
                        <div className='home__inner__section3__viewmorebutton'>
                            View All
                        </div>
                    </div>
                    {/* section 4 */}
                    <div className='home__inner__section4'>
                        <div className='home__inner__section4__left'>
                            <img src={twitter} className="home__inner__section4__img"/>
                            <div className='home__inner__section4__left__out'>
                                {HomeNewsData.map((ele) => {
                                    const {id,time,info}=ele;
                                    return(
                                        <>
                                            <HomeCard3 id={id} time={time} info={info}  />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='home__inner__section4__left'>
                            <img src={facebook} className="home__inner__section4__img"/>
                            <div className='home__inner__section4__left__out'>
                                {HomeNewsData.map((ele) => {
                                    const {id,time,info}=ele;
                                    return(
                                        <>
                                            <HomeCard3 id={id} time={time} info={info}  />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
        </>
    );
    }

export default Home;