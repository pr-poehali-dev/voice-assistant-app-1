import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "MessageSquare",
    title: "Текстовый чат с ИИ",
    desc: "Общайтесь текстом как в ChatGPT. Умный ассистент ответит на любой вопрос.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "Mic",
    title: "Голосовой ввод",
    desc: "Говорите голосом — ИИ распознает речь и ответит. Поддержка акцентов и диалектов.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Languages",
    title: "Мультиязычность",
    desc: "Работает на русском и других языках. Автоопределение языка.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "Brain",
    title: "Умный контекст",
    desc: "Помнит контекст разговора и даёт релевантные ответы на основе диалога.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: "AudioWaveform",
    title: "Распознавание акцентов",
    desc: "Продвинутый алгоритм понимает различные акценты и диалекты речи.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    desc: "Данные зашифрованы. Ваши разговоры остаются конфиденциальными.",
    color: "from-indigo-500 to-blue-600",
  },
];

const Features = () => {
  return (
    <div className="h-full overflow-y-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div style={{ animation: "fade-in-up 0.5s ease-out forwards" }}>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Возможности</h2>
          <p className="text-muted-foreground text-sm mb-8">Всё, что умеет НейроАссистент</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-default group"
              style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={f.icon} size={20} className="text-white" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
