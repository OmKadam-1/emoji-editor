import "./colorbutton.css";

function Colorbutton({bgcolor,setbgcolor}) {
  return (
    
      <div className="color" onClick={()=>
            setbgcolor((bgcolor))
         
         } style={{backgroundColor:bgcolor}}>

          </div>
    
  )
}

export default Colorbutton;
