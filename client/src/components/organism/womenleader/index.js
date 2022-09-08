
import './index.css';
import Navbar from './../NavBar/index';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import img from '../../assets/image/womenleadership_img/women_leadership_img.svg';
import WomenLeadershipCardData from './../../assets/store/womenleadershipcardData';
import WomenLeadershipCard1 from '../../atom/womenleadershipCard1';
const WomenLeadership=(props)=>{
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
                    {WomenLeadershipCardData.map((ele)=>{
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

                  </div>
            </div>
        </div>
    </div>

    
    </>
);
}

export default WomenLeadership;