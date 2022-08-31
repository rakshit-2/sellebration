
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import ContactUsSection1 from '../../molecule/contactusSection1';
import ContactUsData from '../../assets/store/contactusData';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs=(props)=>{


    function onChange(value) {
        console.log("Captcha value:", value);
      }
return (
    <>
    <div className="contactus__outer">
        <div className="contactus__inner">

            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            
            <ContactUsSection1/>



            <div className='contactus__inner__seaction2'>
                <div className='contactus__inner__seaction2__heading'>
                    Write to us
                </div>
                <div className='contactus__inner__seaction2__dispaly'>
                    {ContactUsData.input.map((ele)=>{
                        const{id,name,type,star,placeholder,inputfield}=ele;
                        return(
                            <div key={id} className='contactus__inner__seaction2__dispaly__each'>
                                <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                    {name}<span style={{color:"red",display:`${star}`}}>*</span>
                                </div>
                                <input type={type}placeholder={placeholder} className='contactus__inner__seaction2__dispaly__each__input'/>
                            </div>
                        )
                    })}
                    <div className='contactus__inner__seaction2__dispaly__each'>
                        <div className='contactus__inner__seaction2__dispaly__each__heading'>
                            Query is for<span style={{color:"red"}}>*</span>
                        </div>
                        <select className='contactus__inner__seaction2__dispaly__each__input'>
                            {ContactUsData.selectCompany.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <option key={id} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='contactus__inner__seaction2__dispaly__each'>
                        <div className='contactus__inner__seaction2__dispaly__each__heading'>
                            Query type<span style={{color:"red"}}>*</span>
                        </div>
                        <select className='contactus__inner__seaction2__dispaly__each__input'>
                            {ContactUsData.selectQuery.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <option key={id} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='contactus__inner__seaction2__dispaly__each'>
                        <div className='contactus__inner__seaction2__dispaly__each__heading'>
                            Your query<span style={{color:"red"}}>*</span>
                        </div>
                        <textarea type={ContactUsData.selectTextarea.type} placeholder={ContactUsData.selectTextarea.placeholder} style={{height:"4rem",paddingLeft:"5px"}} className='contactus__inner__seaction2__dispaly__each__input'/>
                    </div>
                    <div className='contactus__inner__seaction2__dispaly__each'>
                        <div className='contactus__inner__seaction2__dispaly__each__heading'>
                            Captcha<span style={{color:"red"}}>*</span>
                        </div>
                        <ReCAPTCHA
                            sitekey="Your client site key"
                            onChange={onChange}
                        />,
                    </div>
                    
                </div>
                <div className='contactus__inner__seaction2__bottom__out'>
                    <div className='contactus__inner__seaction2__button'>
                        Submit
                    </div>
                </div>
            </div>







            <div className='contactus__inner__seaction3'>
                <div className='contactus__inner__seaction3__left'>
                    <div className='contactus__inner__seaction3__left__heading'>
                        Our location
                    </div>
                    <div className='contactus__inner__seaction3__left__text'>
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. 
                    Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,
                    </div>
                    <div className='contactus__inner__seaction3__left__heading'>
                        <div className='contactus__inner__seaction2__button' style={{fontSize:"18px"}}>
                            get direction
                        </div>
                    </div>
                </div>
                <div className='contactus__inner__seaction3__right'>
                </div>
            </div>


            <Footer/>
        </div>
    </div>

    </>
);
}

export default ContactUs;