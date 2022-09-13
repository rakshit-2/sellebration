import './index.css';
import share_img from './../../assets/image/event/share_img.svg'


const MediaReleaseCard1=(props)=>{

    
    return(
    <>
    <div key={props.id} className='mediareleasecard1__outer'>
        <div className='mediareleasecard1__outer__date'>
            <div className='mediareleasecard1__outer__date__left'>
                {props.date}
            </div>
            <div className='media__line' style={{display:props.nameDisplay}}></div>
            <div className='mediareleasecard1__outer__date__right' style={{display:props.nameDisplay}}>
                {props.name}
            </div>
        </div>
        <div className='mediareleasecard1__outer__text'>
            {props.info}
        </div>
        <div className='mediareleasecard1__outer__button' style={{display:props.buttonDisplay}}>
            Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
        </div>
    </div>
    </>
  );
}

export default MediaReleaseCard1;