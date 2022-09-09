
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import image from '../../assets/image/innovation_img/innovation_img.svg';
const Innovation=(props)=>{
return (
    <>
    <div className='innovation_outer'>
        <div className='innovation_inner'>

       
                <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
                <div className='innovation__sec1'>
                    <div className='innovation__sec1__top'>
                        <div className='innovation__sec1__top__inner'>
                            <div className='innovation__sec1__top__left'>
                                Innovation
                            </div>
                            <div className='innovation__sec1__top__right'>
                                <div className='innovation__sec1__top__right__inner'>
                                Share
                                <img style={{padding:"0 0 0 1rem"}} src={image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='innovation__sec1__bottom'>
                        <div className='innovation__sec1__bottom__inner'>
                            <div className='innovation__sec1__bottom__inner_head'>
                            Innovation insights
                            </div>
                            <div className='innovation__sec1__bottom__inner_title'>
                            More stories
                            </div>
                            <div className='innovation__sec1__bottom__inner_card'>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
);
}

export default Innovation;