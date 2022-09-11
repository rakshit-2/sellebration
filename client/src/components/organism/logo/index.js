import './index.css';

import { useEffect } from 'react';

const Logo=(props)=>{
      // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
return (
    <>
    Logo
    </>
);
}

export default Logo;