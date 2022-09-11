import './index.css';
import share_img from './../../assets/image/event/share_img.svg'


const MediaReleaseCard1=(props)=>{

    
    return(
    <>
    <div className='mediareleasecard1__outer'>
        <div className='mediareleasecard1__outer__date'>
            14 July, 2022 
        </div>
        <div className='mediareleasecard1__outer__text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </div>
        <div className='mediareleasecard1__outer__button'>
            Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
        </div>
    </div>
    </>
  );
}

export default MediaReleaseCard1;