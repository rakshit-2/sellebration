import './index.css';
import Navbar from './../NavBar/index'




const Stories=(props)=>{
  return (
    <>
    <div className="stories__outer">
        <div className="stories__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            
            
            <div className="stories__inner__section1">
                <div className="stories__inner__section1__inner">
                    <div className="stories__inner__section1__inner__top">
                        Home / media
                    </div>
                    <div className="stories__inner__section1__inner__bottom">
                        Stories
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    </>
  );
}

export default Stories;