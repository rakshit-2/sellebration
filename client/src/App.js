import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState } from 'react';


import Home from './components/organism/home/index';
import Bringchange from './components/organism/bringchange/index';
import Businessbrand from './components/organism/businessbrand/index';
import Csr from './components/organism/csr/index';
import Leadership from './components/organism/leadership/index';
import Milestone from './components/organism/milestone/index';
import Visionvalue from './components/organism/visionvalue/index';
import Womenleadership from './components/organism/womenleader/index';

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
        <Route path="/bring-change" element={<Bringchange  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/bussiness-brand" element={<Businessbrand  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/csr" element={<Csr  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/leadership" element={<Leadership  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/milestone" element={<Milestone  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/vision-value" element={<Visionvalue  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/women-leadership" element={<Womenleadership  navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
