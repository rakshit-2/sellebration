import './index.css';


const LeadershipCard1=(props)=>{

    
    return(
    <>
        <div className="leadershipcard1__each__card">
            <div className="leadershipcard1__each__card__image">
                <img src={props.img} className="leadershipcard1__each__card__image__img"/>
            </div>
            <div className="leadershipcard1__each__card__name">
                {props.name}
            </div>
            <div className="leadershipcard1__each__card__jobtitle">
                {props.job}
            </div>
        </div>
    </>
  );
}

export default LeadershipCard1;