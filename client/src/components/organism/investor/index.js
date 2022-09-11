import './index.css';
import Carousel from "react-multi-carousel";
import { useEffect } from 'react';
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import InvestorData from './../../assets/store/investorData';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';

const Investor=(props)=>{


  // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 750 },
          items: 3,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
      };


return (
    <>
    <div className="inverstor__outer">
        <div className="investor__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="investor__inner__section1">
                <div className="investor__inner__section1__inner">
                    <div className="investor__inner__section1__inner__left">
                        INVESTORS
                    </div>
                    <div className='investor__inner__section1__inner__right'>
                        SHARE
                    </div>
                </div>
            </div>
            <div className="investor__inner__section2">
                <div className="investor__inner__section2__heading">
                    UPDATES
                </div>
                <Carousel 
                responsive={responsive} 
                draggable
                autoPlay
                autoPlaySpeed={2000}
                pauseOnHover
                infinite
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {InvestorData.update.map((ele)=>{
                        const{id,text}=ele;
                        return(
                            <div key={id} className='investor__inner__section2__each'>
                                {text}
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className='investor__inner__section3'>
                <div className='investor__inner__section3__heading'>
                    Company financials
                </div>
                {InvestorData.card.map((ele)=>{
                    const{id,img,name,innerEach,text}=ele;
                    if(id%2===0)
                    {
                        return(
                            <div key={id} className='investor__inner__section3__display'>
                                <div className='investor__inner__section3__display__left'>
                                    <div className='investor__inner__section3__display__left__top'>
                                        <img src={img} className="investor__inner__section3__display__left__top__pic"/>
                                    </div>
                                    <div className='investor__inner__section3__display__left__bottom'>
                                        {name}
                                    </div>
                                </div>
                                <div className='investor__inner__section3__display__right'>
                                    <div className='investor__inner__section3__display__right__top'>
                                        {text}
                                    </div>
                                    <div className='investor__inner__section3__display__right__bottom'>
                                        {innerEach.map((val)=>{
                                            const{id,v}=val;
                                            return(
                                                <div key={id} className='investor__inner__section3__display__right__bottom__each'>
                                                    {v}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else
                    {
                        return(
                            <div key={id} className='investor__inner__section3__display'>
                                <div className='investor__inner__section3__display__right'>
                                    <div className='investor__inner__section3__display__right__top'>
                                        {text}
                                    </div>
                                    <div className='investor__inner__section3__display__right__bottom'>
                                        {innerEach.map((val)=>{
                                            const{id,v}=val;
                                            return(
                                                <div key={id} className='investor__inner__section3__display__right__bottom__each'>
                                                    {v}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='investor__inner__section3__display__left'>
                                    <div className='investor__inner__section3__display__left__top'>
                                        <img src={img} className="investor__inner__section3__display__left__top__pic"/>
                                    </div>
                                    <div className='investor__inner__section3__display__left__bottom'>
                                        {name}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                
            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default Investor;