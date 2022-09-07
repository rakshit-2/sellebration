
import './index.css';
import CareerData from './../../assets/store/careerData';

const CareerSection6=(props)=>{
return (
    <>
    <div className='career__inner__section6'>
        <div className='career__inner__section6__top'>
            {CareerData.section6.card.map((ele)=>{
                const{id,text}=ele;
                return(
                    <div key={id} className='career__inner__section6__top__each'>
                        {text}
                    </div>
                )
            })}
        </div>
        <div className='career__inner__section6__middle'>
            {CareerData.section6.heading}
        </div>
        <div className='career__inner__section3__right__right__button'>
            EXPLORE OUR INITIATIVES
        </div>
    </div>
    </>
    
);
}

export default CareerSection6;