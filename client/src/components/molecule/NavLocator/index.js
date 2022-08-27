import './index.css';
import items from './../../assets/store/NavData'
import NavLocatorEach from './../../atom/NavLocatorEach/index'
import { useNavigate } from 'react-router-dom';


const NavLocator=(props)=>{
    const navigate = useNavigate();
    function onclickfunction(x,info)
    {
        var link=["Aboutus","/our-profile","leadership","women leadership","/vision-value","milestone","Businesses & Brands","Sustainability","CSR",
                "CSR At Sellebration","Bringing The Change","Our Strategy",
                "Stories of Hope","CSR Policy","Media","Media Releases","Media Reports",
                "Stories","Events","Downloads","Our Logo","Innovation","Investors",
                "Careers","Contact Us"];
        var check=["About Us","Our Profile","Leadership","Women Leaders","Vision&Values",
                    "Milestones","Businesses & Brands","Sustainability","CSR",
                    "CSR At Sellebration","Bringing The Change","Our Strategy",
                    "Stories of Hope","CSR Policy","Media","Media Releases","Media Reports",
                    "Stories","Events","Downloads","Our Logo","Innovation","Investors",
                    "Careers","Contact Us"]
            
        for(var i=0;i<check.length;i++)
        {
            if(info===check[i])
            {
                navigate(link[i]);
                return;
            }
            
        }
    }
    return (
    <>
    <div className='navlocator__outer'>
      <div className='navlocator__inner'>
              {items.map((item) => {
                  const {id,heading,data,icon}=item;
                  if(id===1)
                  {
                    return (
                        <>
                        <div key={id} className="navlocator__each">
                            <div className="navlocator__each__heading" onClick={()=>{onclickfunction(id,heading)}}>
                                {heading}
                            </div>
                            <div className="navlocator__white__line__outer">
                                <div className="navlocator__white__line"></div>
                            </div>
                            <NavLocatorEach data={data} index={id}/>
                        </div>
                        <div className='navlocator__white__line__nav'>
                        </div>
                        </>
                    );
                  }
                  if(id===4)
                  {
                    return (
                        <>
                        <div key={id} className="navlocator__each">
                            <NavLocatorEach data={data} index={id} icon={icon}/>
                        </div>
                        </>
                    );
                  }
                  else
                  {
                    return (
                        <>
                        <div key={id} className="navlocator__each">
                            <div className="navlocator__each__heading"  onClick={()=>{onclickfunction(id,heading)}}>
                                {heading}
                            </div>
                            <NavLocatorEach data={data} index={id}/>
                        </div>
                        <div className='navlocator__white__line__nav'>
                        </div>
                        </>
                    );
                  }
              })}
          </div>
        
    </div>
    </>
  );
}

export default NavLocator;