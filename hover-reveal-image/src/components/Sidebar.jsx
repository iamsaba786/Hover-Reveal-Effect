import { FaHome, FaInfoCircle } from "react-icons/fa";
import ToggleBtn from "./ToggleBtn";

const Sidebar = ({ isSpiderMan, onToggle, onAbout }) => (
  <aside className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 w-14 sm:w-16 h-72 sm:h-80 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col items-center justify-between p-4 sm:p-6 shadow-2xl z-40 hidden lg:flex">
    <div className="space-y-3 sm:space-y-4 flex flex-col items-center">
      <ToggleBtn isSpiderMan={isSpiderMan} onToggle={onToggle} />
      <button className="p-2 sm:p-3 rounded-xl border border-white/20 bg-red-700/50 hover:border-white/50 hover:bg-white/20 transition-all w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
        <FaHome className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      {/* ABOUT BUTTON WITH ACTION */}
      <button
        onClick={onAbout}
        className="p-2 sm:p-3 rounded-xl border-2 border-white/30 bg-red-700/50 hover:border-white/60 hover:bg-white/20 hover:scale-110 transition-all w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg"
      >
        <FaInfoCircle className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
    <div className="w-1.5 sm:w-2 h-16 sm:h-20 bg-gradient-to-b from-white/30 to-transparent mt-2 rounded-full" />
  </aside>
);

export default Sidebar;
