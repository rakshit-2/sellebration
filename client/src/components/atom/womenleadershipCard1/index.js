import './index.css';

const WomenLeadershipCard1=(props)=>{
    return (
        <>
        <div className="WomenLeadershipCard1__outer">
            <div className="WomenLeadershipCard1__heading">
                {props.heading}
            </div>
            <div>
                {props.info}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.title}
            </div>
        </div>
        </>
    );
    }

export default WomenLeadershipCard1;