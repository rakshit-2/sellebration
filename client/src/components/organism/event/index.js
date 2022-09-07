import './index.css';
import Navbar from './../NavBar/index';
import share_img from './../../assets/image/event/share_img.svg';

const Event=(props)=>{
return (
    <>
    <div className="event__outer">
        <div className="event__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="event__inner__section1">
                <div className="event__inner__section1__inner">
                    <div className="event__inner__section1__inner__left">
                        Events
                    </div>
                </div>
            </div>
            <div className='event__inner__section2'>
                <div className='event__inner__section2__left'>
                    <div className='event__inner__section2__left__panel'>
                        <select className='event__inner__section2__left__panel__field'>
                            <option>Company Name</option>
                        </select>
                        <div className='event__inner__section2__left__panel__field'>
                            From Date : <input type="date" placeolder="Date" className='event__inner__section2__left__panel__fieldinn'/>
                        </div>
                        <div className='event__inner__section2__left__panel__field'>
                            To Date : <input type="date" placeolder="Date" className='event__inner__section2__left__panel__fieldinn'/>
                        </div>
                         <div className='event__inner__section2__button'>
                            Filters
                         </div>
                    </div>
                    <div className='event__inner__section2__left__display'>
                        <div className='event__inner__section2__left__each'>
                            <div className='event__inner__section2__left__each__left'>

                            </div>
                            <div className='event__inner__section2__left__each__right'>
                                <div className='event__inner__section2__left__each__right__date'>
                                    22 April, 2022
                                </div>
                                <div className='event__inner__section2__left__each__right__name'>
                                    Name
                                </div>
                                <div className='event__inner__section2__left__each__right__text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                                </div>
                                <div className='event__inner__section2__left__each__right__button'>
                                    <div className='event__inner__section2__button'>
                                        Know more
                                    </div>
                                    <div className='event__inner__section2__button'>
                                        Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='event__inner__section2__left__each'>
                            <div className='event__inner__section2__left__each__left'>

                            </div>
                            <div className='event__inner__section2__left__each__right'>
                                <div className='event__inner__section2__left__each__right__date'>
                                    22 April, 2022
                                </div>
                                <div className='event__inner__section2__left__each__right__name'>
                                    Name
                                </div>
                                <div className='event__inner__section2__left__each__right__text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                                </div>
                                <div className='event__inner__section2__left__each__right__button'>
                                    <div className='event__inner__section2__button'>
                                        Know more
                                    </div>
                                    <div className='event__inner__section2__button'>
                                        Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='event__inner__section2__left__each'>
                            <div className='event__inner__section2__left__each__left'>

                            </div>
                            <div className='event__inner__section2__left__each__right'>
                                <div className='event__inner__section2__left__each__right__date'>
                                    22 April, 2022
                                </div>
                                <div className='event__inner__section2__left__each__right__name'>
                                    Name
                                </div>
                                <div className='event__inner__section2__left__each__right__text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                                </div>
                                <div className='event__inner__section2__left__each__right__button'>
                                    <div className='event__inner__section2__button'>
                                        Know more
                                    </div>
                                    <div className='event__inner__section2__button'>
                                        Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='event__inner__section2__right'>
                    
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default Event;