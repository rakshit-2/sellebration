
import './index.css';
import Nabvbar from './../NavBar/index';
import LeadershipPanelData from './../../assets/store/leadershippanelData';
import LeadershipCard1 from '../../atom/leadershipCard1';
import LeaderShipData from './../../assets/store/LeadershipData';
import Footer from './../../molecule/footer/index'


const Leadership=(props)=>{
return (
    <>
    <div className='leadership__outer'>
        <div className='leadership__inner'>
            <Nabvbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className='leadership__inner__seaction1'>
                <div className='leadership__inner__seaction1__inner'>
                    <div className='leadership__inner__seaction1__button'>
                        View Profile
                    </div>
                    <div className='leadership__inner__seaction1__button'>
                        Chairman’s message
                    </div>
                </div>
            </div>
            <div className='leadership__inner__seaction2'>
                {LeadershipPanelData.map((ele)=>{
                    const{id,name}=ele;
                    return(
                        <div key={id} className='leadership__inner__seaction2__button'>
                            {name}
                        </div>
                    )
                })}
            </div>
            <div className='leadership__inner__seaction3'>
                <div className="leadership__inner__seaction3__innerheading">
                    Directors
                </div>
                <div className="leadership__inner__seaction3__innerdisplay">
                    {LeaderShipData.BusinessDirector.map((ele)=>{
                        const{img,jobTitle,name}=ele;
                        return(
                            <><LeadershipCard1 name={name} img={img} job={jobTitle} /></>
                        )
                    })}
                </div>

                <div className="leadership__inner__seaction3__innerheading">
                    Business Heads
                </div>
                <div className="leadership__inner__seaction3__innerdisplay">
                    {LeaderShipData.BusinessHeads.map((ele)=>{
                        const{img,jobTitle,name}=ele;
                        return(
                            <><LeadershipCard1 name={name} img={img} job={jobTitle} /></>
                        )
                    })}
                </div>

                <div className="leadership__inner__seaction3__innerheading">
                    Senior Leaders
                </div>
                <div className="leadership__inner__seaction3__innerdisplay">
                    {LeaderShipData.SeniorLeaders.map((ele)=>{
                        const{img,jobTitle,name}=ele;
                        return(
                            <><LeadershipCard1 name={name} img={img} job={jobTitle} /></>
                        )
                    })}
                </div>

                <div className="leadership__inner__seaction3__innerheading">
                    The Vanguard
                </div>
                <div className="leadership__inner__seaction3__innerdisplayv">
                    <div className='leadership__inner__seaction3__innerdisplay__text'>
                        {LeaderShipData.TheVanguardText.text}
                    </div>
                    <div className='leadership__inner__seaction3__innerdisplay__dis'>
                        {LeaderShipData.TheVanguard.map((ele)=>{
                            const{id,name}=ele;
                            return(
                                <>
                                <div className='leadership__inner__seaction3__innerdisplay__dis__each'>
                                    {name}
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default Leadership;