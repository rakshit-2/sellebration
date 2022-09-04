
import './index.css';
import Navbar from './../NavBar/index';
import img from '../../assets/image/womenleadership_img/women_leadership_img.svg';
const WomenLeadership=(props)=>{
return (
    <>
    <div className="womenleader__outer">
        <div className="womenleader__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="womenleader__sec1">
            <div className="home__inner__section2__display">
                        {/* <Carousel 
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        pauseOnHover
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                            {HomeDisplayData[clickedPanel].map((ele) => {
                                const {id,heading,info}=ele;
                                return(
                                    <HomeCard1 id={id} heading={heading} info={info}/>
                                )
                            })}
                        </Carousel> */}
                        </div>
            </div>
        </div>
    </div>

    <img src={img}/>
    </>
);
}

export default WomenLeadership;