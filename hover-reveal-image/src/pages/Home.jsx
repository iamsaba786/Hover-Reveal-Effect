import { useState } from "react";
import Sidebar from "../components/Sidebar";
import HoverRevealImage from "../components/HoverRevealImage";
import AboutContent from "../pages/AboutContent";

const Home = () => {
  const [isSpiderMan, setIsSpiderMan] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {/* DYNAMIC FULL BRIGHT BACKGROUND */}
      <div
        className="fixed inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url("/images/${
            isSpiderMan ? "top-image.jpg" : "bottom-image.jpg"
          }")`,
          opacity: 1,
        }}
      />

      <Sidebar
        isSpiderMan={isSpiderMan}
        onToggle={() => setIsSpiderMan(!isSpiderMan)}
        onAbout={() => setShowAbout(!showAbout)}
      />

      <HoverRevealImage isSpiderMan={isSpiderMan} />

      {/* DYNAMIC ABOUT */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 flex items-center justify-center p-4">
          <div className="max-w-lg w-full mx-4">
            <AboutContent isSpiderMan={isSpiderMan} />
            <button
              onClick={() => setShowAbout(false)}
              className="mt-8 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all text-white font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
