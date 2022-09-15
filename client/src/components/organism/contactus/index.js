
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import ContactUsSection1 from '../../molecule/contactusSection1';
import ContactUsData from '../../assets/store/contactusData';
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from 'react';
import alert from './../../assets/image/event/alert.svg';

const ContactUs=(props)=>{



    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ariaLabel = { 'aria-label': 'description' };
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[organisation,setOrganisation]=useState("");
    const[contactNumber,setContactNumber]=useState("");
    const[queryIsFor,setQueryIsFor]=useState("Select Company");
    const[quaryType,setQuaryType]=useState("Select Query");
    const[yourQuery,setYourQuery]=useState("");
    const[errorMessage,setErrorMessage]=useState("fill all * marked fields")
    const[errHiding,setErrHiding]=useState("none");



  


    function onChange(value) {
        console.log("Captcha value:", value);
    }


    function checker(e,name)
    {
        switch(name) {
            case "Name":
                setName(e);
                break;
            case "Organisation":
                setOrganisation(e);
                break;
            case "Email":
                setEmail(e);
                break;
            case "Contact Number":
                setContactNumber(e);
                break;
            default:
                console.log("must not run if printing check file contactus/index.js default case")
          }
    }


    function checkerSelect1(e,name)
    {
        setQueryIsFor(name);
    }

    function checkerSelect2(e,name)
    {
        setQuaryType(name);
    }




    function hidingError()
    {
        setErrHiding("none")
    }


    function ContactUsSubmit()
    {
        // var li=[name,email,organisation,contactNumber,queryIsFor,quaryType,yourQuery];
        if(name==="")
        {
            setErrHiding("flex");
            setErrorMessage("Fill Name Field");
            setTimeout(hidingError, 3000);
            return;
        }
        else
        {
            let flagname=/^[A-Za-z]+$/;
            if(flagname.test(name)===false)
            {
                setErrHiding("flex");
                setErrorMessage("Fill Name Field With A-Z/a-Z");
                setTimeout(hidingError, 3000);
                return;
            }
        }

        if(email==="")
        {
            setErrHiding("flex");
            setErrorMessage("Fill Email Field");
            setTimeout(hidingError, 3000);
            return;
        }
        else
        {
            var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(emailCheck.test(email)===false)
            {
                setErrHiding("flex");
                setErrorMessage("Fill Email Field With @abc@example.com");
                setTimeout(hidingError, 3000);
                return;
            }
        }
        
        if(queryIsFor==="Select Company")
        {
            setErrHiding("flex");
            setErrorMessage("Select Company Name");
            setTimeout(hidingError, 3000);
            return;
        }
        
        
        if(quaryType==="Select Query")
        {
            setErrHiding("flex");
            setErrorMessage("Select Quary Type");
            setTimeout(hidingError, 3000);
            return;
        }


        if(yourQuery==="")
        {
            setErrHiding("flex");
            setErrorMessage("Your Query field is Empty");
            setTimeout(hidingError, 3000);
            return;
        }


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
                                <input type={type} placeholder={placeholder} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{checker(e.target.value,name)}} />
                            </div>
                        )
                    })}



                    <div className='contactus__inner__seaction2__dispaly__each'>
                        <div className='contactus__inner__seaction2__dispaly__each__heading'>
                            Query is for<span style={{color:"red"}}>*</span>
                        </div>
                        <select className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{checkerSelect1(e.target.value,name)}}>
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
                        <select className='contactus__inner__seaction2__dispaly__each__input'  onChange={(e)=>{checkerSelect2(e.target.value,name)}}>
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
                        <textarea type={ContactUsData.selectTextarea.type} placeholder={ContactUsData.selectTextarea.placeholder} style={{height:"4rem",paddingLeft:"5px"}} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{setYourQuery(e.target.value)}}/>
                    </div>
                    <div className='contactus__inner__seaction2__dispaly__each'>
                        <div className='contactus__inner__seaction2__dispaly__each__heading'>
                            Captcha<span style={{color:"red"}}>*</span>
                        </div>
                        <ReCAPTCHA
                            sitekey="Your client site key"
                            onChange={onChange}
                        />
                    </div>
                    
                </div>
                <div className='conatctus__error__display' style={{display:errHiding}}>
                    <div className='conatctus__error__display__inner'>
                        <img src={alert} style={{width:"30px",height:"30px"}}/>{'\u00A0'}{errorMessage}
                    </div>
                </div>
                <div className='contactus__inner__seaction2__bottom__out'>
                    <div className='contactus__inner__seaction2__button' onClick={()=>{ContactUsSubmit()}}>
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