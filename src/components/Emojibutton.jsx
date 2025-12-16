import "./emojibutton.css";

function Emojibutton({emoji,setEmoji}) {
  return (
    
      <div className="emoji" onClick={()=>
            setEmoji((emoji))
          }>{emoji}
          </div>
    
  )
}

export default Emojibutton;
