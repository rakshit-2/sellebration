import './index.css';

const Logo=(props)=>{
    a=6
    b=7
    console.log(a)
    c=a+b;
    setTimeout(()=>{console.log("Sum is = "+c)},5000)
    setTimeout(()=>{console.log("Multiplication is = "+a*b)},10000)
    console.log(b)
return (
    <>
    Logo
    </>
);
}

export default Logo;