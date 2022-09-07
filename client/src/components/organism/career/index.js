
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import insta from './../../assets/image/nav_img/nav_insta_img.svg';
import quote from './../../assets/image/career/quote_img.svg';
import section8_img from './../../assets/image/career/section8_background.svg';


const Career=(props)=>{
return (
    <>
    <div className="career__outer">
        <div className="career__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="career__inner__section1">
                <div className="career__inner__section1__inner">
                    <div className='career__inner__section1__inner__head'>
                        <div className='career__inner__section1__inner__head__left'>
                            A world full of possibilities awaits you
                        </div>
                        <div className='career__inner__section1__inner__head__right'>
                            <img src={insta} className="career__section1__each"/>
                            <img src={insta} className="career__section1__each"/>
                            <img src={insta} className="career__section1__each"/>
                        </div>
                    </div>
                    <div className='career__inner__section1__inner__content'>
                        <div className='career__inner__section1__inner__content__vid'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B7bSbcYNfRw" title="Demons, Counting Stars, Hymn for the Weekend - Imagine Dragons, OneRepublic, Coldplay (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='career__inner__section1__inner__content__text'>
                        Take a glimse at the selebration journey here
                        </div>
                    </div>
                </div>
            </div>



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


            <div className='career__inner__section3'>
                <div className='career__inner__section3__left'>
                    
                </div>
                <div className='career__inner__section3__right'>
                    <div className='career__inner__section3__right__left'>
                        <img src={quote} className="career__inner__section3__right__left__pic"/>
                    </div>
                    <div className='career__inner__section3__right__right'>
                        <div className='career__inner__section3__right__right__top'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, the industry's standard dummy text ever since the 1500s,
                        </div>
                        <div className='career__inner__section3__right__right__line'></div>
                        <div className='career__inner__section3__right__right__bottom'>
                            XYZ NAME
                        </div>
                        <div className='career__inner__section3__right__right__button'>
                           Know More
                        </div>
                    </div>
                </div>
            </div>


            <div className='career__inner__section4'>
                <div className='career__inner__section4__heading'>
                    OUR BRANDS
                </div>
                <div className='career__inner__section4__display'>
                    <div className='career__inner__section4__display__each'>
                        <div className='career__inner__section4__display__each__img'>

                        </div>
                        <div className='career__inner__section4__display__each__text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </div>
                    </div>
                </div>
            </div>



            <div className='career__inner__section3'>
                <div className='career__inner__section3__right'>
                    <div className='career__inner__section3__right__left'>
                        <img src={quote} className="career__inner__section3__right__left__pic"/>
                    </div>
                    <div className='career__inner__section3__right__right'>
                        <div className='career__inner__section3__right__right__top'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, the industry's standard dummy text ever since the 1500s,
                        </div>
                        <div className='career__inner__section3__right__right__bottom' style={{marginTop:"3rem"}}>
                            XYZ NAME
                        </div>
                        <div className='career__inner__section3__right__right__button'>
                           View Message
                        </div>
                    </div>
                </div>
                <div className='career__inner__section3__left'>
                    
                </div>
            </div>



            <div className='career__inner__section5'>
                <div className='career__inner__section5__head'>
                    A world of opportunities
                </div>
                <div className='career__inner__section5__head__small'>
                    Click THROUGH AND EXPLORE THE 4 PILLARS OF OUR EMPLOYEE VALUE PROPOSITION
                </div>
                <div className='career__inner__section5__display'>
                    <div className='career__inner__section5__display__each'>
                        <div className='career__inner__section5__display__each__img'>

                        </div>
                        <div className='career__inner__section5__display__each__text'>
                        ENHANCE CAREERS
                        </div>
                    </div>
                </div>
            </div>
            


            <div className='career__inner__section6'>
                <div className='career__inner__section6__top'>
                    <div className='career__inner__section6__top__each'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
                </div>
                <div className='career__inner__section6__middle'>
                    CORPORATE 
                    SOCIAL
                    RESPONSIBILITY
                </div>
                <div className='career__inner__section3__right__right__button'>
                    EXPLORE OUR INITIATIVES
                </div>
            </div>


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