import './index.css';
import Navbar from './../NavBar/index';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import { useEffect } from 'react';

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
                        
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
    </>
);
}

export default Logo;