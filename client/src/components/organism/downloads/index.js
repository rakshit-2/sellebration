import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import Carousel from "react-multi-carousel";
import logo from '../../assets/image/navbar_img/navbar_logo_img.svg';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import DownloadsData from '../../assets/store/downloadsData';
import down from '../../assets/image/downoads_img/download_icon.svg';
import Footer2 from '../../molecule/footer2';
import { useEffect } from 'react';


const Downloads=(props)=>{


    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
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
                <div className='downloads__sec2'>
                    <Carousel 
                    responsive={responsive} 
                    draggable
                    autoPlay
                    autoPlaySpeed={2000}
                    infinite
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {DownloadsData.card1Data.map((ele)=>{
                      const{id,size,data,img}=ele;
                      return(
                        <>
                        <div className='downloads__card1__outer'>
                            <div className='downloads__card1__img__outer'>
                                <img className='downloads__card1__img' src={img}/>  
                            </div>
                            <div className='downloads__card1__data'>
                                {data}
                            </div>
                            <div className='downloads__card1__button__outer'>
                                <div className='downloads__card1__button__inner'>
                                Download
                                </div>
                            </div>
                            <div className='downloads__card1__size'>
                                ZIP {size}
                            </div>

                        </div>
                        </>
                      )
                    })}
                    </Carousel>
                </div>
                <div className='downloads__sec3'>
                    <div className='downloads__sec3__head'>
                    Company logos
                    </div>
                    <div className='downloads__sec3__card'>
                    <Carousel 
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                        {DownloadsData.card2Data.map((ele)=>{
                        const{id,size,data,img}=ele;
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
                                    ZIP {size}
                                </div>

                            </div>
                            </>
                        )
                        })}
                        </Carousel>
                    </div>


                </div>
                <Footer2/>
                <Footer/>
            </div>
        </div>
    
    </>)
}

export default Downloads;