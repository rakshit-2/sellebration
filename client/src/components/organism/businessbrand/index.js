
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import BusinessBrandData from '../../assets/store/businessbrandData';
import BusinessbBandCard1 from '../../atom/businessbrandCard1';



const BusinessBrand=(props)=>{
return (
    <>     
    <div className="BusinessBrand__outer">
        <div className="BusinessBrand__inner">
        <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="BusinessBrand__sec1">
                <div className="BusinessBrand__sec1__inner">
                    <div className="BusinessBrand__sec1__head">
                            Our Businesses
                    </div>
                    <div className="BusinessBrand__sec1__content">
                    Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old
                    . Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure 
                    e source.
                    </div>
                    <div className="BusinessBrand__sec1__buttons">

                    
                        <div className="BusinessBrand__sec1__button" >
                            COMPANIES
                        </div>
                        <div className="BusinessBrand__sec1__button" style={{backgroundColor:"grey"}} >
                            BRANDS
                        </div>
                    </div>
                </div>
            </div>
            <div className="BusinessBrand__sec2">
                <div className="BusinessBrand__sec2__inner">
                    <div className="BusinessBrand__sec2__head">
                        <div className="BusinessBrand__sec2__head__left">
                            view by sector
                        </div>
                        <div className="BusinessBrand__sec2__head__right">
                            <div className="BusinessBrand__sec2__head__right__field">
                                Search....
                            </div>
                        </div>
                    </div>
                    <div className="BusinessBrand__sec2__base">
                        <div className="BusinessBrand__sec2__base__left">
                                {BusinessBrandData.map((ele)=>{
                                    const{id,info}=ele;
                                    return(
                                        <BusinessbBandCard1 id={id} info={info}/>
                                    )
                                })}
                        </div>
                        <div className="BusinessBrand__sec2__base__right">

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

export default BusinessBrand;