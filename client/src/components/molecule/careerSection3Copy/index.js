
import './index.css';
import CareerData from './../../assets/store/careerData';
import quote from './../../assets/image/career/quote_img.svg';

const CareerSection3Copy=(props)=>{
return (
    <>
    <div className='career__inner__section3'>
        <div className='career__inner__section3__right'>
            <div className='career__inner__section3__right__left'>
                <img src={quote} className="career__inner__section3__right__left__pic"/>
            </div>
            <div className='career__inner__section3__right__right'>
                <div className='career__inner__section3__right__right__top'>
                    {CareerData.section5.text}
                </div>
                <div className='career__inner__section3__right__right__bottom' style={{marginTop:"3rem"}}>
                    {CareerData.section5.name}
                </div>
                <div className='career__inner__section3__right__right__button'>
                View Message
                </div>
            </div>
        </div>
        <div className='career__inner__section3__left'>
            
        </div>
    </div>
    </>
    
);
}

export default CareerSection3Copy;