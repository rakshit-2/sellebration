import './index.css';
import nav_close from './../../assets/image/nav_img/nav_cross_img.svg';
import NavLocator from './../../molecule/NavLocator/index'

const Nav=(props)=>{
  return (
    <>
    <div className='nav__outer' style={{display:props.navDisplay.nav}}>
      <div className="nav__inner">
        <div className='nav__inner__inner'>
          {/* <div className="nav__inner__navbar">
            <div className="nav__right">
              <div className="nav__right__icon">
                <img src={nav_close} className="nav__icon" alt="" onClick={()=>{props.closeNav("nav")}}/>
              </div>
              <div className="nav__right__search">
                <input type="text" placeholder="Search..." className="nav__search__field"/>
              </div>
              <div className="navbar__right__select">
                <select className="navbar__language__select">
                  <option className="navbar__language__option">English</option>
                  <option className="navbar__language__option">German</option>
                  <option className="navbar__language__option">Polish</option>
                </select>
              </div>
            </div>
          </div> */}
          <NavLocator/>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Nav;