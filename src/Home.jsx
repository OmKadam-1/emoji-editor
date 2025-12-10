import "./Home.css";

function Home() {
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
      />

      
      <div className="relative z-10">
        <h1 className="header">Emoji Editor</h1>
      </div>

    </div>
  );
}

export default Home;
