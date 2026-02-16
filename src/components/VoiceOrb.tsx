import { useState, useEffect } from "react";

interface VoiceOrbProps {
  isListening: boolean;
  onClick: () => void;
}

const VoiceOrb = ({ isListening, onClick }: VoiceOrbProps) => {
  const [bars, setBars] = useState<number[]>(Array(12).fill(8));

  useEffect(() => {
    if (!isListening) {
      setBars(Array(12).fill(8));
      return;
    }
    const interval = setInterval(() => {
      setBars(Array(12).fill(0).map(() => Math.random() * 40 + 8));
    }, 100);
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <button
      onClick={onClick}
      className="relative group cursor-pointer focus:outline-none"
      aria-label={isListening ? "Остановить запись" : "Начать запись"}
    >
      {isListening && (
        <>
          <div className="absolute inset-0 rounded-full gradient-bg opacity-20 animate-pulse-ring" />
          <div className="absolute inset-0 rounded-full gradient-bg opacity-10 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
        </>
      )}

      <div className={`
        relative w-24 h-24 rounded-full flex items-center justify-center
        transition-all duration-300 ease-out
        ${isListening
          ? "gradient-bg glow-purple scale-110"
          : "bg-secondary hover:bg-secondary/80 group-hover:scale-105"
        }
      `}>
        {isListening ? (
          <div className="flex items-center gap-[3px]">
            {bars.slice(0, 5).map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-white transition-all duration-100"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" fill="currentColor" opacity="0.9"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>

      <p className={`
        text-xs mt-3 text-center transition-colors duration-300
        ${isListening ? "text-primary" : "text-muted-foreground"}
      `}>
        {isListening ? "Слушаю..." : "Нажмите для записи"}
      </p>
    </button>
  );
};

export default VoiceOrb;
