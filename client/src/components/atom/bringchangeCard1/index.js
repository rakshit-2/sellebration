import './index.css';
const BringChangeCard1=(props)=>{
    return(
        <>
        <div className='bringchangecard1__outer'>
            <div className='bringchangecard1__image'>
                <img src={props.image}/>
            </div>
            <div className='bringchangecard1__title'>
                {props.title}
            </div>
        </div>
        </>
    )
}
export default BringChangeCard1;