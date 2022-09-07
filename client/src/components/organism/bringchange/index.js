
import './index.css';

import Navbar from './../NavBar/index';
import button_image from ''

const BringChange=(props)=>{
return (
    <>
    <div className="bringchange__outer">
        <div className="bringchange__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="bringchange__sec1">
                <div>
                    <img src={button_image}/>
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default BringChange;