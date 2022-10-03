import './index.css';
import Navbar from './../NavBar/index';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import { useEffect } from 'react';
import Footer2 from './../../molecule/footer2/index';
import Footer from './../../molecule/footer/index';
import logo from '../../assets/image/navbar_img/navbar_logo_img.svg';
import centerimg from '../../assets/image/logo/logo_mid.svg';
const Logo=(props)=>{
      // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
return (
    <>
    <div className='logo__outer'>
        <div className='logo__inner'>
        <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
        <div className='logo__sec1'>
            <div className='logo__sec1__inner'>
                <div className='logo__sec1__head'>
                Home / media
                </div>
                <div  className='logo__sec1__mid'>
                    <div className='logo__sec1__mid__left'>    
                    Our Corporate logo
                    </div>

                    <div className='logo__sec1__mid__right'>
                        Share
                        <img style={{padding:"0 0 0 1rem"}} src={image}/>
                    </div>
                </div>
                <div className='logo__sec1__bottom'>
                    <div className='logo__sec1__bottom__left'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </div>
                    <div className='logo__sec1__bottom__right'>
                        <img class="logo__sec1__bottom__right__logo" src={logo}/>
                    </div>

                </div>
            </div>
        </div>

        <div className='logo__sec2'>
            <div className='logo__sec2__head'>
                Our new mark for new milestones
            </div>

            <div className='logo__sec2__mid'>
                <div className='logo__sec2__mid__top'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum 
                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                 has been the industry's standard dummy text ever Lorem Ipsum is simply 
                 dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                 the industry's standard dummy text ever Lorem Ipsum is simply dummy text 
                 of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever 
                </div>
                <div className='logo__sec2__mid__center' >
                    <img className='logo__sec2__mid__center_img' src={centerimg}/>
                </div>
                <div className='logo__sec2__mid__bottom'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum 
                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                 has been the industry's standard dummy text ever Lorem Ipsum is simply 
                 dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                 the industry's standard dummy text ever Lorem Ipsum is simply dummy text 
                 of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever 
                </div>

            </div>
        </div>
        <Footer2/>
        <Footer/>
        </div>
    </div>
    </>
);
}

export default Logo;