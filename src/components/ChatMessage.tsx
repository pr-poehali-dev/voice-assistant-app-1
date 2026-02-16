import Icon from "@/components/ui/icon";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
}

const ChatMessage = ({ role, content, isTyping }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
      style={{ animation: "fade-in-up 0.4s ease-out forwards" }}
    >
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center shrink-0
        ${isUser ? "bg-primary/20" : "gradient-bg"}
      `}>
        <Icon
          name={isUser ? "User" : "Sparkles"}
          size={16}
          className={isUser ? "text-primary" : "text-white"}
        />
      </div>

      <div className={`
        max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed
        ${isUser
          ? "bg-primary text-primary-foreground rounded-tr-sm"
          : "glass rounded-tl-sm text-foreground"
        }
      `}>
        {isTyping ? (
          <div className="flex gap-1 py-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
