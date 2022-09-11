
import './index.css';
import { useEffect } from 'react';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import img from '../../assets/image/womenleadership_img/women_leadership_img.svg';
import icon from '../../assets/image/womenleadership_img/women_leadership_img2.svg';
import WomenLeadershipCardData from './../../assets/store/womenleadershipcardData';
import WomenLeadershipCard1 from '../../atom/womenleadershipCard1';
import WomenLeadershipCard2 from '../../atom/womenleadershipCard2';
import React from 'react';
const WomenLeadership=(props)=>{


  // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);










  // const [files,setFiles]=useState();s
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
return (
    <>
    <div className="womenleader__outer">
        <div className="womenleader__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="womenleader__sec1">
                
                    <Carousel 
                    responsive={responsive} 
                    draggable
                    autoPlay
                    autoPlaySpeed={2000}
                    pauseOnHover
                    infinite
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {WomenLeadershipCardData.crouselData.map((ele)=>{
                      const{id,info,heading,name,title}=ele;
                      return(
                        <WomenLeadershipCard1 id={id} heading={heading} info={info} name={name} title={title}/>
                      )
                    })}
                    </Carousel>
                
            </div>
            <div className='womenleader__sec2'>
                  <div className='womenleader__sec2__head'>
                  Expanding Horizons
                  </div>
                  <img className='womenleader__sec2__img' src={img}/>
            </div>
            <div className='womenleader__sec3'>
                  <div className='womenleader__sec3__head'>
                  Redefining Boundaries
                  </div>
                  <div className='womenleader__sec3__cards'>
                      {
                        WomenLeadershipCardData.boundryData.map((ele)=>{
                            const{id,title,info}=ele;
                            return(
                              <WomenLeadershipCard2 id={id} info={info} title={title}/>
                            )
                        })}
                  </div>
            </div>
            <div className='womenleader__sec3'>
                  <div className='womenleader__sec3__head'>
                 Better Together
                  </div>
                  <div className='womenleader__sec3__cards'>
                      {
                        WomenLeadershipCardData.betterData.map((ele)=>{
                            const{id,title,info}=ele;
                            return(
                              <WomenLeadershipCard2 dis={"center"} col={"#D9D9D9"} id={id} info={info} title={title}/>
                            )
                        })}
                  </div>
            </div>

            <div className='womenleader__sec4'>
              <div className='womenleader__sec4__inner'>
                      <div>
                        <img src={icon}/>
                      </div>
                      <div className='womenleader__sec4__inner__info' >
                      See more inspiring world of women stories
                      </div>
              </div>
            </div>
            <Footer/>
        </div>
    </div>

    
    </>
);
}

export default WomenLeadership;