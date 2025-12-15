import { useState } from "react";
import Emojibutton from "./Emojibutton.jsx";
import Colorbutton from "./colorbutton.jsx";
import "./Home.css";

function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [slidervalue, setslidervalue] = useState(50);
  const [bgcolor, setbgcolor]=useState('');

  return (
    <div className="min-h-screen w-full bg-white relative">


      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      ></div>


      <div className="relative z-10">
        <h1 className="header">Emoji Editor</h1>

        <h2 className="description">
          This is a simple application that users can use for fun with emoji
        </h2>


        <div className="emoji-container" style={{ fontSize: `${slidervalue}px` }}>
          {emoji}
        </div>

        <div className="slider-container">
          {slidervalue}
          <input type="range" min="0" max="100" className="slider" onChange={(e) => { setslidervalue(e.target.value); }} value={slidervalue}></input>

        </div>
        <div className="emoji-picker">
          <Emojibutton emoji="😇" setEmoji={setEmoji} />
          <Emojibutton emoji="😄" setEmoji={setEmoji} />
          <Emojibutton emoji="😎" setEmoji={setEmoji} />
          <Emojibutton emoji="🎯" setEmoji={setEmoji} />
          <Emojibutton emoji="🌈" setEmoji={setEmoji} />
          <Emojibutton emoji="🔥" setEmoji={setEmoji} />
        </div>
        <div className="color-picker">
          <Colorbutton bgcolor={`red`} setbgcolor={bgcolor}/>
          <Colorbutton bgcolor={`maroon`} setbgcolor={bgcolor}/>
          <Colorbutton bgcolor={`blue`} setbgcolor={bgcolor}/>
          <Colorbutton bgcolor={`brown`} setbgcolor={bgcolor}/>






        </div>
      </div>

    </div>
  );
}

export default Home;
