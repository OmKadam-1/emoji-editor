import { useState } from "react";
import Emojibutton from "./Emojibutton.jsx";
import Colorbutton from "./colorbutton.jsx";
import "./Home.css";

function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [slidervalue, setslidervalue] = useState(50);
  const [bgcolor, setbgcolor] = useState("transparent");

  return (
    <div className="min-h-screen w-full relative bg-white">

      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10">
        <h1 className="header">Emoji Editor</h1>

        <h2 className="description">
          This is a simple application that users can use for fun with emoji
        </h2>

        {/* Emoji display */}
        <div
          className="emoji-container"
          style={{
            fontSize: `${slidervalue}px`,
            backgroundColor: bgcolor,
          }}
        >
          {emoji}
        </div>

        {/* Slider */}
        <div className="slider-container">
          {slidervalue}
          <input
            type="range"
            min="0"
            max="100"
            className="slider"
            value={slidervalue}
            onChange={(e) => setslidervalue(Number(e.target.value))}
          />
        </div>

        {/* Emoji buttons */}
        <div className="emoji-picker">
          <Emojibutton emoji="😇" setEmoji={setEmoji} />
          <Emojibutton emoji="😄" setEmoji={setEmoji} />
          <Emojibutton emoji="😎" setEmoji={setEmoji} />
          <Emojibutton emoji="🎯" setEmoji={setEmoji} />
          <Emojibutton emoji="🌈" setEmoji={setEmoji} />
          <Emojibutton emoji="🔥" setEmoji={setEmoji} />
        </div>

        {/* Color buttons */}
        <div className="color-picker">
          <Colorbutton bgcolor="red" setbgcolor={setbgcolor} />
          <Colorbutton bgcolor="maroon" setbgcolor={setbgcolor} />
          <Colorbutton bgcolor="blue" setbgcolor={setbgcolor} />
          <Colorbutton bgcolor="brown" setbgcolor={setbgcolor} />
        </div>
      </div>
    </div>
  );
}

export default Home;
