
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';

import section8_img from './../../assets/image/career/section8_background.svg';


import Section1 from './../../molecule/careerSection1/index';
import Section3 from './../../molecule/careerSection3/index';
import Section4 from './../../molecule/careerSection4/index';
import Section3Copy from './../../molecule/careerSection3Copy/index';
import Section5 from './../../molecule/careerSection5/index';
import Section6 from './../../molecule/careerSection6/index';

const Career=(props)=>{
return (
    <>
    <div className="career__outer">
        <div className="career__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            

            <Section1/>

            <div className='career__inner__section2'>
                <div className='career__inner__section2__each'>
                    CAREERS BY BUSINESS
                </div>
                <div className='career__inner__section2__each'>
                    CAREERS BY FUNCTION
                </div>
                <div className='career__inner__section2__each'>
                    NOT SURE? (UPLOAD RESUME)
                </div>
            </div>


            <Section3/>


            <Section4/>



            <Section3Copy/>



            
            <Section5/>


            
            <Section6/>

            <div className='career__inner__section7'>
                <div className='career__inner__section7__inner'>
                    <div className='career__inner__section7__inner__top'>
                        SHE
                    </div>
                    <div className='career__inner__section7__inner__mid'>
                        Become part of the league of exceptional women at the celebration, as they embrace the world of success and transcend barriers.
                    </div>
                    <div className='career__inner__section3__right__right__button' style={{backgroundColor:"white",color:"black"}}>
                        EXPLORE
                    </div>
                </div>
            </div>


            <div className='career__inner__section8'>
                <div className='career__inner__section8__head'>
                    Name
                </div>
                <div className='career__inner__section8__text'>
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, the industry's standard dummy text ever since the 1500s,” 
                </div>
                <img src={section8_img} className="career__inner__section8__img"/>
            </div>

            <Footer/>
        </div>
    </div>
    </>
);
}

export default Career;