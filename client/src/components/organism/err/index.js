
import './index.css';
import Navbar from './../NavBar/index';
import Footer from '../../molecule/footer';

const Err=(props)=>{
return (
    <>
    <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
    <div className='err__outer'>
    Error 404 wrong route
    </div>
    
    </>
);
}

export default Err;