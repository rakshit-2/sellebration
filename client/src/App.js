import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Axios from 'axios';
import {useState,useEffect} from 'react';




import ApiLink from './components/assets/store/apiLink';
import Home from './components/organism/home/index';
import Bringchange from './components/organism/bringchange/index';
import Businessbrand from './components/organism/businessbrand/index';
import Csr from './components/organism/csr/index';
import Leadership from './components/organism/leadership/index';
import Milestone from './components/organism/milestone/index';
import Visionvalue from './components/organism/visionvalue/index';
import Womenleadership from './components/organism/womenleader/index';
import ContactUs from './components/organism/contactus/index';
import Career from './components/organism/career/index';
import Investor from './components/organism/investor/index';
import Event from './components/organism/event/index';
import Err from './components/organism/err/index';
import Innovation from './components/organism/innovation/index';
import MediaRelease from './components/organism/mediaRelease/index';
import PressReport from './components/organism/pressreport/index';

const App=(props)=>{


  

  

  const [navDisplay,setNavDisplay]=useState({
      nav:"none",
      nav1:"block",
  });

  function openNav(x)
  {
    setNavDisplay({nav:"block",nav1:"none",});
  }

  function closeNav()
  {
    setNavDisplay({nav:"none",nav1:"block",});
  }


  

















  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/bringchange" element={<Bringchange  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/bussinessbrand" element={<Businessbrand  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/csr" element={<Csr  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/leadership" element={<Leadership  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/milestone" element={<Milestone  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/visionvalue" element={<Visionvalue  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/womenleadership" element={<Womenleadership  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/contactus" element={<ContactUs  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/career" element={<Career  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/investor" element={<Investor  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/event" element={<Event  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/innovation" element={<Innovation navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/mediarelease" element={<MediaRelease navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/pressreoprt" element={<PressReport navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        
        
        
        <Route path="/err" element={<Err navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route
            path="*"
            element={<Navigate to="/err" replace />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
