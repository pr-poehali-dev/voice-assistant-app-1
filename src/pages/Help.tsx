import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqItems = [
  {
    q: "Как начать голосовой ввод?",
    a: "Перейдите в раздел «Голосовой режим» в боковом меню и нажмите на кнопку микрофона. Начните говорить — ИИ распознает вашу речь и ответит.",
  },
  {
    q: "Какие языки поддерживаются?",
    a: "Основные языки — русский и английский. Также поддерживается автоматическое определение языка. Распознавание работает с различными акцентами.",
  },
  {
    q: "Можно ли использовать текстовый чат?",
    a: "Да! На главной странице доступен полноценный текстовый чат, как в ChatGPT. Просто напишите сообщение и нажмите Enter.",
  },
  {
    q: "Как изменить настройки голоса?",
    a: "Откройте раздел «Настройки» и выберите язык, скорость речи и другие параметры по вашему вкусу.",
  },
  {
    q: "Данные сохраняются?",
    a: "История чата хранится только в текущей сессии браузера. После обновления страницы чат очищается для вашей конфиденциальности.",
  },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="h-full overflow-y-auto px-4 py-8">
      <div className="max-w-lg mx-auto" style={{ animation: "fade-in-up 0.5s ease-out forwards" }}>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Справка</h2>
        <p className="text-muted-foreground text-sm mb-8">Ответы на частые вопросы</p>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden transition-all duration-300"
              style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s forwards`, opacity: 0 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-foreground pr-4">{item.q}</span>
                <Icon
                  name="ChevronDown"
                  size={16}
                  className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-5 text-center">
          <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-3" />
          <h3 className="font-medium text-foreground mb-1">Остались вопросы?</h3>
          <p className="text-sm text-muted-foreground">Напишите в чат — ИИ поможет разобраться</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
