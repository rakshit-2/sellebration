import './index.css';
const innovationCard1=(props)=>{
    return(
        <div className='innovationCard1__outer'>
            <div className='innovationCard1__img'>
                <img src={props.img} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
            </div>
            <div className='innovationCard1__title'>
                {props.title}
            </div>
        </div>

    )
}

export default innovationCard1;