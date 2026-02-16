import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import ChatMessage from "@/components/ChatMessage";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "Расскажи о себе",
  "Какая погода сегодня?",
  "Напиши стихотворение",
  "Помоги с задачей",
];

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateResponse = (userMessage: string) => {
    setIsTyping(true);
    const responses: Record<string, string> = {
      "Расскажи о себе": "Привет! Я НейроАссистент — ваш умный AI-помощник с поддержкой голосового ввода. Могу отвечать на вопросы, помогать с задачами и вести диалог на русском языке. Попробуйте голосовой режим — просто перейдите в раздел «Голосовой режим» в меню!",
      "Какая погода сегодня?": "Для получения актуальной погоды мне нужно подключение к API погодного сервиса. Пока что я могу помочь с другими вопросами! Спросите что-нибудь интересное 😊",
      "Напиши стихотворение": "Нейронная сеть мечтает,\nСлова и мысли собирая.\nОна ответы создаёт,\nИ смысл в каждом находёт.\n\nВаш голос — ключ к общению,\nА я — готов к решению! 🎭",
      "Помоги с задачей": "Конечно! Опишите задачу, с которой вам нужна помощь, и я постараюсь предложить решение. Я могу помочь с текстами, ответами на вопросы, идеями и многим другим.",
    };

    setTimeout(() => {
      setIsTyping(false);
      const response = responses[userMessage] ||
        `Спасибо за ваше сообщение! Это демо-версия интерфейса. В полной версии здесь будет настоящий ИИ, который обработает ваш запрос: "${userMessage}"`;

      setMessages(prev => [...prev, {
        id: Date.now(),
        role: "assistant",
        content: response,
      }]);
    }, 1500);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages(prev => [...prev, {
      id: Date.now(),
      role: "user",
      content: text,
    }]);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    simulateResponse(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center"
            style={{ animation: "fade-in-up 0.6s ease-out forwards" }}
          >
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6 glow-purple animate-float">
              <Icon name="Sparkles" size={36} className="text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Привет! Я НейроАссистент</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Умный AI-помощник с голосовым управлением. Задайте вопрос или выберите тему:
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-md w-full">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setInput(s);
                    setTimeout(() => {
                      setMessages(prev => [...prev, { id: Date.now(), role: "user", content: s }]);
                      setInput("");
                      simulateResponse(s);
                    }, 100);
                  }}
                  className="glass rounded-xl px-4 py-3 text-sm text-foreground hover:bg-white/10 transition-all duration-200 text-left hover:scale-[1.02]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
            ))}
            {isTyping && <ChatMessage role="assistant" content="" isTyping />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="shrink-0 border-t border-border bg-card/50 backdrop-blur-xl p-4">
        <div className="max-w-2xl mx-auto flex items-end gap-3">
          <div className="flex-1 glass rounded-2xl flex items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Напишите сообщение..."
              rows={1}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none max-h-[120px]"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`
              w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200
              ${input.trim()
                ? "gradient-bg text-white hover:opacity-90 hover:scale-105"
                : "bg-secondary text-muted-foreground"
              }
            `}
          >
            <Icon name="ArrowUp" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
