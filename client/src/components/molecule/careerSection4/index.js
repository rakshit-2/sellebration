

import './index.css';
import CareerData from './../../assets/store/careerData';

const CareerSection4=(props)=>{
return (
    <>
    <div className='career__inner__section4'>
        <div className='career__inner__section4__heading'>
           {CareerData.section4.heading}
        </div>
        <div className='career__inner__section4__display'>
            
            {CareerData.section4.card.map((ele)=>{
                const{id,img,text}=ele;
                return(
                <div key={id} className='career__inner__section4__display__each'>
                    <div className='career__inner__section4__display__each__img'>
                        <img src={img} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div className='career__inner__section4__display__each__text'>
                        {text}
                    </div>
                </div>
                )
            })}
            
        </div>
    </div>
    </>
    
);
}

export default CareerSection4;