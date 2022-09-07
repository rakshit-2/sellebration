

import './index.css';
import CareerData from './../../assets/store/careerData';

const CareerSection5=(props)=>{
return (
    <>
    <div className='career__inner__section5'>
        <div className='career__inner__section5__head'>
            {CareerData.section5.heading}
        </div>
        <div className='career__inner__section5__head__small'>
            {CareerData.section5.text}
        </div>
        <div className='career__inner__section5__display'>
            {CareerData.section5.card.map((ele)=>{
                const{id,img,text,col}=ele;
                return(
                <div key={id} className='career__inner__section5__display__each'>
                    <div className='career__inner__section5__display__each__img'>
                        <img src={img} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                    </div>
                    <div className='career__inner__section5__display__each__text' style={{color:col}}>
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

export default CareerSection5;