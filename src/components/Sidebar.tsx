import { NavLink } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: "/", icon: "MessageSquare", label: "Чат" },
  { to: "/voice", icon: "Mic", label: "Голосовой режим" },
  { to: "/features", icon: "Zap", label: "Возможности" },
  { to: "/settings", icon: "Settings", label: "Настройки" },
  { to: "/help", icon: "HelpCircle", label: "Справка" },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-card/95 backdrop-blur-xl border-r border-border z-50
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Icon name="Bot" size={22} className="text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground text-lg leading-tight">НейроАссистент</h1>
              <p className="text-xs text-muted-foreground">AI помощник</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                  ${isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }
                `}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="glass rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Распознавание речи</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-foreground">Активно</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
