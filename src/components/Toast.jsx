import { useEffect } from "react";

function Toast({ message, icon, onClose, duration = 2500 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-24 right-6 z-50 animate-bounce-in">
      <div className="relative rounded-xl p-0.5 bg-linear-to-r from-[#e81cff] to-[#40c9ff] shadow-[0_0_25px_rgba(232,28,255,0.25)]">
        <div className="bg-[#080808] text-white px-5 py-3 rounded-[10px] text-sm font-semibold flex items-center gap-3 backdrop-blur-md">
          <svg
            className="w-5 h-5 text-[#40c9ff]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{message}</span>
          {icon && icon}
          <button
            onClick={onClose}
            className="ml-2 text-white/40 hover:text-white transition-colors text-xs p-1"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
