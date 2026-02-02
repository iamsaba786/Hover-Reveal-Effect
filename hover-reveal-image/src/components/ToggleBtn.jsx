import React from "react";

const ToggleBtn = ({ isSpiderMan, onToggle }) => (
  <button
    onClick={onToggle}
    className={`
      p-3 rounded-2xl backdrop-blur-sm border-2 border-white/30
      hover:border-white/60 hover:scale-110 active:scale-95
      transition-all duration-300 shadow-xl
      ${
        isSpiderMan
          ? "bg-gradient-to-br from-red-600/30 to-red-800/30 text-red-200"
          : "bg-gradient-to-br from-emerald-600/40 to-black/60 text-emerald-200"
      }
    `}
  >
    <div className="text-2xl mb-1">{isSpiderMan ? "🕷️" : "🦹‍♂️"}</div>
    <span className="block text-xs font-bold tracking-wider uppercase">
      {isSpiderMan ? "VENOM" : "SPIDER"}
    </span>
  </button>
);

export default ToggleBtn;
