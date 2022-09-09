import './index.css';
const innovationCard1=(props)=>{
    return(
        <div className='innovationCard1__outer'>
            <div className='innovationCard1__img'>
                <img src={props.img}/>
            </div>
            <div className='innovationCard1__title'>
                {props.title}
            </div>
        </div>

    )
}

export default innovationCard1;