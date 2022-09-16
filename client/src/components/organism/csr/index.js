
import './index.css';
import Navbar from './../NavBar/index';



import AOS from 'aos';
import 'aos/dist/aos.css'


import Footer from './../../molecule/footer/index';
import CsrSection1 from '../../molecule/csrSection1';
import CsrSection2 from '../../molecule/csrSection2';
import CsrCardData from './../../assets/store/csrcardData';
import CsrSection4 from '../../molecule/csrSection4';
import CsrInitiativeData from '../../assets/store/csrinitiativeData';
import CsrCard2 from '../../atom/csrCard2';
import csr_pdf_img from './../../assets/image/csr_img/csr_policy_img.svg';
import { useEffect } from 'react';

const Csr=(props)=>{


    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });


return (
    <>
    <div className="csr__outer">
        <div className="csr__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>

            <CsrSection1/>

            <CsrSection2/>

            <div style={{width:"100%",height:"fit-content",overflowX:"hidden"}}>
            {CsrCardData.map((ele)=>{
                const{id,heading,img,text,button}=ele;
                if(id%2===0)
                {
                    return(
                        <div className='csr__inner__section3' data-aos="fade-left">
                            <div className='csr__inner__section3__each1'>
                                <div className='csr__inner__section3__each1__inner'>
                                    <img src={img} className="csr__section3__img"/>
                                </div>
                            </div>
                            <div className='csr__inner__section3__each2'>
                                <div className='csr__inner__section3__each2__inner'>
                                    <div className='csr__inner__section3__each2__inner__up'>
                                        <div className='csr__inner__section3__each2__inner__heading'>
                                            {heading}
                                        </div>
                                        <div className='csr__inner__section3__each2__inner__text'>
                                            {text}
                                        </div>
                                    </div>
                                    <div className='csr__inner__section3__each2__inner__down'>
                                        <div className='csr__button'>
                                            {button}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }
                else
                {
                    return (
                        <div className='csr__inner__section3'  data-aos="fade-right">
                            <div className='csr__inner__section3__each1' style={{justifyContent:"flex-end"}}>
                                <div className='csr__inner__section3__each1__inner'>
                                    <img src={img} className="csr__section3__img"/>
                                </div>
                            </div>
                            <div className='csr__inner__section3__each2' style={{justifyContent:"flex-start"}}>
                                <div className='csr__inner__section3__each2__inner'>
                                    <div className='csr__inner__section3__each2__inner__up'>
                                        <div className='csr__inner__section3__each2__inner__heading'>
                                            {heading}
                                        </div>
                                        <div className='csr__inner__section3__each2__inner__text'>
                                            {text}
                                        </div>
                                    </div>
                                    <div className='csr__inner__section3__each2__inner__down'>
                                        <div className='csr__button'>
                                            {button}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
            </div>
            
            


            <CsrSection4/>
            

            <div className='csr__inner__section5'>
                <div className='csr__inner__section5__heading'>
                    Our Initiatives
                </div>
                <div className='csr__inner__section5__display'  data-aos="fade-up">
                    {CsrInitiativeData.map((ele)=>{
                        const{id,img,heading,text}=ele;
                        return(
                            <CsrCard2 id={id} img={img} heading={heading} text={text}/>
                        )
                    })}
                </div>
            </div>

            <div className='csr__inner__section6'>
                <div className='csr__inner__section6__inner' data-aos="fade-up">
                    <div className='csr__inner__section6__inner__each'>
                        <div className='csr__inner__section6__inner__each__left'>
                            Businesses:
                        </div>
                        <div className='csr__inner__section6__inner__each__left' style={{cursor:"pointer"}}>
                            CSR Policy <img src={csr_pdf_img} className="csr__pdf__img"/>
                        </div>
                    </div>

                    <div className='csr__inner__section6__inner__each'>
                        <div className='csr__inner__section6__inner__each__left'>
                            Sellebration:
                        </div>
                        <div className='csr__inner__section6__inner__each__left'  style={{cursor:"pointer"}}>
                            Transcending business <img src={csr_pdf_img} className="csr__pdf__img"/>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default Csr;