import { useState } from "react";
import VoiceOrb from "@/components/VoiceOrb";
import Icon from "@/components/ui/icon";

const Voice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      setTranscript("Привет, как дела?");
      setTimeout(() => {
        setResponse("Здравствуйте! У меня всё отлично, спасибо! Я готов помочь вам с любыми вопросами. Что вас интересует?");
      }, 1200);
    } else {
      setIsListening(true);
      setTranscript("");
      setResponse("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-center max-w-md" style={{ animation: "fade-in-up 0.6s ease-out forwards" }}>
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Голосовой режим активен
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-2">Голосовой ввод</h2>
        <p className="text-muted-foreground text-sm mb-12">
          Нажмите на кнопку и начните говорить. Поддержка акцентов и диалектов.
        </p>

        <div className="flex justify-center mb-12">
          <VoiceOrb isListening={isListening} onClick={toggleListening} />
        </div>

        {transcript && (
          <div className="glass rounded-2xl p-4 mb-4 text-left"
            style={{ animation: "fade-in-up 0.4s ease-out forwards" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon name="User" size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">Вы сказали:</span>
            </div>
            <p className="text-sm text-foreground">{transcript}</p>
          </div>
        )}

        {response && (
          <div className="glass rounded-2xl p-4 text-left"
            style={{ animation: "fade-in-up 0.4s ease-out forwards" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Sparkles" size={14} className="text-accent" />
              <span className="text-xs text-muted-foreground">Ответ:</span>
            </div>
            <p className="text-sm text-foreground">{response}</p>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-6 text-muted-foreground">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Icon name="Languages" size={18} />
            </div>
            <span className="text-[11px]">Языки</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Icon name="AudioWaveform" size={18} />
            </div>
            <span className="text-[11px]">Акценты</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Icon name="Volume2" size={18} />
            </div>
            <span className="text-[11px]">Озвучка</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
