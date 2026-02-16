import { useState } from "react";
import Icon from "@/components/ui/icon";

const Settings = () => {
  const [language, setLanguage] = useState("ru");
  const [voiceSpeed, setVoiceSpeed] = useState(50);
  const [autoListen, setAutoListen] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <div className="h-full overflow-y-auto px-4 py-8">
      <div className="max-w-lg mx-auto" style={{ animation: "fade-in-up 0.5s ease-out forwards" }}>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Настройки</h2>
        <p className="text-muted-foreground text-sm mb-8">Персонализируйте помощника</p>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon name="Languages" size={16} className="text-primary" />
              </div>
              <h3 className="font-medium text-foreground">Язык распознавания</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: "ru", label: "Русский" },
                { code: "en", label: "English" },
                { code: "auto", label: "Авто" },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                    language === lang.code
                      ? "gradient-bg text-white"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Icon name="Volume2" size={16} className="text-accent" />
              </div>
              <h3 className="font-medium text-foreground">Скорость речи</h3>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={voiceSpeed}
              onChange={(e) => setVoiceSpeed(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Медленно</span>
              <span>Быстро</span>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Icon name="Settings" size={16} className="text-emerald-400" />
              </div>
              <h3 className="font-medium text-foreground">Общие</h3>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Автозапуск микрофона</span>
              <button
                onClick={() => setAutoListen(!autoListen)}
                className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${
                  autoListen ? "bg-primary" : "bg-secondary"
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all duration-200 ${
                  autoListen ? "left-[22px]" : "left-0.5"
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Звуковые эффекты</span>
              <button
                onClick={() => setSoundEffects(!soundEffects)}
                className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${
                  soundEffects ? "bg-primary" : "bg-secondary"
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all duration-200 ${
                  soundEffects ? "left-[22px]" : "left-0.5"
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
