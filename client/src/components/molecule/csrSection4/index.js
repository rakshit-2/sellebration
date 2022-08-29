import './index.css';
import CsrStoriesData from './../../assets/store/csrstoriesData';
import CsrCard1 from '../../atom/csrCard1';

const CsrSection4=(props)=>{
return (
    <>
    <div className='csr__inner__section4'>
        <div className='csr__inner__section4__heading'>
            {CsrStoriesData.intro.hading}
        </div>
        <div className='csr__inner__section4__heading2'>
            <div className='csr__button'>
                {CsrStoriesData.intro.button}
            </div>
        </div>
        <div className='csr__inner__section4__display'>
            {CsrStoriesData.display.map((ele)=>{
                const{id,heading,img,text}=ele;
                return(
                    <CsrCard1 id={id} heading={heading} img={img} text={text}/>
                )
            })}
            
        </div>
    </div>
    </>
);
}

export default CsrSection4;