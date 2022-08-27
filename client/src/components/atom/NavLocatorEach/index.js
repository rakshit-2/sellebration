import './index.css';
import { useNavigate } from 'react-router-dom';



const NavLocatorEach=(props)=>{

    const navigate = useNavigate();


    function onclickfunction(x,info)
    {
        var link=["","/our-profile","leadership","","/vision-value","milestone","Businesses & Brands","Sustainability","CSR at sellebrations",
                "/csr","Bringing The Change","Our Strategy",
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
        {props.data.map((ele) => {
            const {id,info}=ele;
            if(props.index===1)
            {
                return(
                <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                    {info}
                </div>
                )
                
            }
            else if(props.index===4)
            {
                if(id===3)
                {
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        <div className="navlocatoreach__white__line__outer">
                            <div className="navlocatoreach__white__line"></div>
                        </div>
                        <div className="navlocatoreach__each__heading" style={{display:"flex",alignItem:"center",justifyContent:"space-around",width:"88%" ,cursor:"default"}}>
                        {props.icon.map((elel) => {
                            const {id,info,link}=elel;
                            return (
                                <>
                                <a key={id} href={link}><img src={info} /></a>
                                </>
                            );
                        })}
                        </div>
                        </>
                    );
                }
                else
                {
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        <div className="navlocatoreach__white__line__outer">
                            <div className="navlocatoreach__white__line"></div>
                        </div>
                        </>
                    );
                }
            }
            else
            {
                return (
                    <>
                    <div key={id} className="navlocatoreach__each__each" onClick={()=>{onclickfunction(id,info)}}>
                        {info}
                    </div>
                    </>
                );
            }
            
        })}
        </>
    );
}

export default NavLocatorEach;