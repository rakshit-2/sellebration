
import './index.css';
import CareerData from './../../assets/store/careerData';
import Carousel from "react-multi-carousel";

const CareerSection6=(props)=>{


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1181 },
          items: 3,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1181, min: 750 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

return (
    <>
    <div className='career__inner__section6'>
        <div className='career__inner__section6__inner'  data-aos="fade-up">
            <div className='career__inner__section6__top'>
                {CareerData.section6.card.map((ele)=>{
                    const{id,text}=ele;
                    return(
                        <div key={id} className='career__inner__section6__top__each'>
                            {text}
                        </div>
                    )
                })}
            </div>
            <div className='career__inner__section6__top1'>
                <Carousel 
                responsive={responsive} 
                draggable
                autoPlay
                autoPlaySpeed={2000}
                pauseOnHover
                infinite
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                {CareerData.section6.card.map((ele)=>{
                    const{id,text}=ele;
                    return(
                        <div key={id} className='career__inner__section6__top__each'>
                            {text}
                        </div>
                    )
                })}
                </Carousel>
            </div>
            <div className='career__inner__section6__middle'>
                {CareerData.section6.heading}
            </div>
            <div className='career__inner__section6__button'>
                EXPLORE OUR INITIATIVES
            </div>
        </div>
    </div>
    </>
    
);
}

export default CareerSection6;