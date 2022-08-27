import './index.css';
import navbar_logo from './../../assets/image/navbar_img/navbar_logo_img.svg'
import navbar_icon from './../../assets/image/navbar_img/navbar_button_img.svg'
import NavPanel from './../Nav/index';
import nav_close from './../../assets/image/nav_img/nav_cross_img.svg';
import { useState } from 'react';





const NavBar=(props)=>{


  const[navOperator,setNavOperator]=useState({open:"flex",close:"none"})

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop>80 || document.documentElement.scrollTop>80) 
    {
      document.getElementById("navbar").style.height="4rem";
      document.getElementById("logo").style.width="4rem" ;
    }
    else 
    {
      document.getElementById("navbar").style.height="7rem";
      document.getElementById("logo").style.width="7rem" ;
    }
  }



  function openNavClicked()
  {
    setNavOperator({open:"none",close:"flex"});
    props.openNav();
  }

  function closeNavClicked()
  {
    setNavOperator({open:"flex",close:"none"});
    props.closeNav("nav");
  }
  return (
    <>
    <div className="navbar__outer" id="navbar">
      <div className="navbar__inner">
        <div className="navbar__left"  id="logo">
          <img src={navbar_logo} className="navbar__logo" alt=""/>
        </div>
        <div className="navbar__right">
          <div className="navbar__right__icon" style={{display:navOperator.open}}>
            <img src={navbar_icon} className="navbar__icon" alt="" onClick={()=>{openNavClicked()}}/>
          </div>
          <div className="navbar__right__icon"  style={{display:navOperator.close}}>
            <img src={nav_close} className="navbar__icon" alt="" onClick={()=>{closeNavClicked()}}/>
          </div>
          <div className="navbar__right__search">
            <input type="text" placeholder="Search..." className="navbar__search__field"/>
          </div>
          <div className="navbar__right__select">
            <select className="navbar__language__select">
              <option className="navbar__language__option">English</option>
              <option className="navbar__language__option">German</option>
              <option className="navbar__language__option">Polish</option>
            </select>
          </div>
        </div>
      </div>
      <NavPanel navDisplay={props.navDisplay} closeNav={props.closeNav}/>
    </div>
    
    </>
  );
}

export default NavBar;