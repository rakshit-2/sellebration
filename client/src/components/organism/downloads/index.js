import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import Carousel from "react-multi-carousel";
import logo from '../../assets/image/navbar_img/navbar_logo_img.svg';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import DownloadsData from '../../assets/store/downloadsData';
import down from '../../assets/image/downoads_img/download_icon.svg';
import Footer2 from '../../molecule/footer2';
import { useEffect,useState } from 'react';
import ApiLink from '../../assets/store/apiLink';
import LoadingScreen from '../../atom/loadingScreen';
import Axios from 'axios';
import img from "../../assets/image/test.png";

const Downloads=(props)=>{

    const[logData,setLogData]=useState();
    const[logLoading,setLogLoading]=useState(true);


    const[companyData,setCompanyData]=useState();
    const[companyLoading,setCompanyLoading]=useState(true);
    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function requestGetter(x)
    {
        if(x==="log")
        {
            Axios.get(ApiLink+'/download/log-data',
            {
            params:{
                name:"log",
            }
            }).then((res)=>{
                setLogData(res.data);
                setLogLoading(false);
            })
        }
        else if(x==="company")
        {
            Axios.get(ApiLink+'/download/company-data',
            {
            params:{
                name:"company",
            }
            }).then((res)=>{
                setCompanyData(res.data);
                setCompanyLoading(false);
            })
        }
    }

    useEffect(() => {
        requestGetter("log");
        requestGetter("company");
    }, []);




    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
    return (<>
        <div className='downloads__outer'>
            <div  className='downloads__inner'>
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
                <div className='downloads__sec1'>
                    <div className='downloads__sec1__head'>
                    Home / media
                    </div>
                    <div className='downloads__sec1__head__right'>
                            <div className='downloads__sec1__head__right__inner'>
                            Share
                            <img style={{padding:"0 0 0 1rem"}} src={image}/>
                            </div>
                    </div>
                    <div className='downloads__sec1__bottom'>
                        <div className='downloads__sec1__bottom__left' >
                            <div className='downloads__sec1__bottom__left__1'>
                            Downloads
                            </div>
                            <div className='downloads__sec1__bottom__left__2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            </div>
                            <div className='downloads__sec1__bottom__left__1'>
                            Lorem ipsum
                            </div>
                            <div className='downloads__sec1__bottom__left__2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Loremtry's standard dummy text
                            </div>
                        </div >
                        <div className='downloads__sec1__bottom__right' >
                            <img className='downloads_head_logo' src={logo}/>
                            <div className='downloads__sec1__bottom__right__inner'>
                                <div className='downloads__sec1__bottom__right__inner__left'>
                                    <div className='downloads__sec1__bottom__right__inner__each1'>
                                    2D coloured logo <img src={down}/>
                                    </div>
                                    <div className='downloads__sec1__bottom__right__inner__each2'>
                                    jpeg format (.zip 3.07 mb)
                                    </div>
                                </div>
                                <div className='downloads__sec1__bottom__right__inner__right'>
                                <div className='downloads__sec1__bottom__right__inner__each1'>
                                    3D coloured logo <img src={down}/>
                                    </div>
                                    <div className='downloads__sec1__bottom__right__inner__each2'>
                                    jpeg format (.zip 11.1 mb)

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='downloads__sec2' data-aos="fade-up">
                {
                                logLoading ? (

                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                    
                                ):(
                                <Carousel

                                responsive={responsive} 
                                draggable
                                autoPlay
                                autoPlaySpeed={2000}
                                infinite
                                showDots={true}
                                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                                {logData.map((ele)=>{
                                const{id,size,name,zip}=ele;
                                return(
                                    <>
                                    <div className='downloads__card1__outer'>
                                        <div className='downloads__card1__img__outer'>
                                            <img className='downloads__card1__img' src={img}/>  
                                        </div>
                                        <div className='downloads__card1__data'>
                                            {name}
                                        </div>
                                        <div className='downloads__card1__button__outer'>
                                            <div className='downloads__card1__button__inner'>
                                            Download
                                            </div>
                                        </div>
                                        <div className='downloads__card1__size'>
                                            {size}
                                        </div>

                                    </div>
                                    </>
                                )
                                })}
                                </Carousel>
                    )}
                </div>
                <div className='downloads__sec3'>
                    <div className='downloads__sec3__head'>
                    Company logos
                    </div>
                    <div className='downloads__sec3__card' data-aos="fade-up">

                    {
                                companyLoading ? (

                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                    
                                ):(
                            <Carousel 
                                responsive={responsive} 
                                draggable
                                autoPlay
                                autoPlaySpeed={2000}
                                infinite
                                showDots={true}
                                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                                {companyData.map((ele)=>{
                                const{id,size}=ele;
                                return(
                                    <>
                                    <div className='downloads__card2__outer'>
                                        <div className='downloads__card2__img__outer'>
                                            <img className='downloads__card2__img' src={img}/>  
                                        </div>
                                        
                                        <div className='downloads__card2__button__outer'>
                                            <div className='downloads__card2__button__inner'>
                                            Download
                                            </div>
                                        </div>
                                        <div className='downloads__card2__size'>
                                            {size}
                                        </div>

                                    </div>
                                    </>
                                )
                                })}
                                </Carousel>
                                )}
                    </div>


                </div>
                <Footer2/>
                <Footer/>
            </div>
        </div>
    
    </>)
}

export default Downloads;