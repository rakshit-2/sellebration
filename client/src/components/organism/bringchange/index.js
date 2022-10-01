
import './index.css';
import BringChangeData from '../../assets/store/bringchangeData.js';
import img from './../../assets/image/test.png';
import Navbar from './../NavBar/index';
import button_image from './../../assets/image/bringchange_img/bringchange_img.svg';
import BringChangeCard1 from '../../atom/bringchangeCard1';
import Footer from './../../molecule/footer/index';
import {useState,useEffect} from 'react';




const BringChange=(props)=>{

  // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [idb,setId]=useState(0);
   function checker(id){
    setId(id)
   }

return (
    <>
    <div className="bringchange__outer">
        <div className="bringchange__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="bringchange__sec1">
                <div className="bringchange__sec1__home">
                    HOME/ABOUT US
                </div>
                <div className="bringchange__sec1__title">
                   Bring The Change
                </div>
                <div className="bringchange__sec1__text">
                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC”
                </div>
            </div>

            <div className="bringchange__sec2">
                <div className="bringchange__sec2__title">
                    Our Focus Area
                </div>
                <div className="bringchange__sec2__buttons">
                {BringChangeData.buttonData.map((ele)=>{
                    const {id,title}=ele;
                    if(id===idb)
                    {
                        console.log(id)
                        return(
                        <>
                        <div  className="bringchange__sec2__button1" >
                            <div  style={{backgroundColor:"#2F528E"}} key={id} className="bringchange__sec2__button1__head">
                                {title}
                            </div>
                            <img style={{display:"flex"}} className="bringchange__sec2__button1_img" src={button_image}/>
                        </div>
                        </>
                        )
                    }
                    else{
                        return(
                            <div  className="bringchange__sec2__button1" onClick={()=>{checker(id)}}>
                                <div   key={id} className="bringchange__sec2__button1__head">
                                   {title}
                                </div>
                            </div>
                            )
                    }
                    
                    
                })}
                </div>
                {BringChangeData.imageData.map((ele)=>{
                    const{id,pic}=ele;
                    if(id===idb){
                        return(
                        <div>
                            <img className='bringchange__sec2__button1__images' src={pic}/>
                        </div>
                        )
                    }
                
                })}
            </div>
            <div className="bringchange__sec3">
                <div className="bringchange__sec3__head">
                    Lorem Ipsum
                </div>
                
                {
                    BringChangeData.iconData.map((ele)=>{
                        const{icon,data}=ele;
                        return(
                        <div className='bringchange__sec3__data'>
                        <div className='bringchange__sec3__data__inner1'>
                           <img src= {icon}/>
                        </div>
                        <div className='bringchange__sec3__data__inner'>
                            {data}
                        </div>
                        </div>
                       
                        )
                    })}
                
            </div>
            <div className='bringchange__sec4'>
                    <div className='bringchange__sec4__head'>
                        Govenment schemes we work with
                    </div>
                    <div className='bringchange__sec4__content'>
                        { BringChangeData.cardData.map((ele)=>{
                            const {id,image,title}=ele;
                            return(<>
                            <BringChangeCard1  id={id}  image={image}  title={title}    />
                            </>)
                        })}
                    </div>
            </div>
            <div className='bringchange__sec5'>
                <div className='bringchange__sec5__1'>
                    <div className='bringchange__sec5__1__left'>
                        <img className='bringchange__sec5__image1' src={img}/>
                    </div>
                    <div className='bringchange__sec5__1__right'>
                        <div className='bringchange__sec5__1__right__title'>
                            AT MACRO THE LEVEL
                        </div >
                        <div className='bringchange__sec5__1__right__content'>
                            {BringChangeData.seccontent[0]}
                        </div>

                    </div>
                </div>
                <div className='bringchange__sec5__2'>
                    <div className='bringchange__sec5__2__left'>
                        <div className='bringchange__sec5__2__right__title'>
                            IN SUM
                        </div>
                        <div className='bringchange__sec5__2__right__content'>
                        {BringChangeData.seccontent[1]}
                        </div>
                        <div className='bringchange__sec5__2__right__content'>
                        {BringChangeData.seccontent[2]}
                        </div>
                    </div>
                    <div className='bringchange__sec5__2__right'>
                    <img className='bringchange__sec5__image2' src={img}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    </div>
    </>
);
}

export default BringChange;