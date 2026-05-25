
import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  Package, 
  Users, 
  TrendingUp, 
  Megaphone, 
  BellRing, 
  Settings, 
  Search, 
  Bell, 
  Contrast, 
  Download,
  ChevronRight,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { TabId, TABS } from '../types';

const ICON_MAP = {
  LayoutDashboard,
  CreditCard,
  Package,
  Users,
  TrendingUp,
  Megaphone,
  BellRing,
  Settings
};

interface MainLayoutProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  children: React.ReactNode;
}

export default function MainLayout({ activeTab, setActiveTab, children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Close sidebar on tap/selection of menu item in mobile view
  const handleTabSelect = (tabId: TabId) => {
    setActiveTab(tabId);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-surface-container-lowest text-on-surface overflow-x-hidden">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-surface-container border-r border-outline-variant flex flex-col py-6 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="px-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-on-surface">SAGE BI</h1>
            <p className="text-xs text-on-surface-variant opacity-70">Retail Intelligence</p>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-surface-container-high rounded-xl text-on-surface-variant hover:text-on-surface transition-all"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 space-y-1">
          {TABS.map((tab) => {
            const Icon = ICON_MAP[tab.icon as keyof typeof ICON_MAP];
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'text-primary font-bold border-r-4 border-primary bg-surface-container-high' 
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-primary' : 'group-hover:text-primary'} />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-4 mt-auto">
          <div className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl border border-outline-variant">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqVap0nl82MSIH7ome77BhQQSkRrJfnTZ81_w4hMktIHgsY0m_wXq224lBI457LDbBEhuz6qyxisuX6PwYk3s9lvHGbvJotXEWceBmt6oZOY40heeJW_qaEjMiEiuwga36aZZwMFz87tzGgbTA1Cudj2mikYgd_zvopWBNZEe_1MQZuwRkoUIjzvTgL-p7tKJ6fjLo33HM42eOI_Grg7_aWJntClzCD-vCiEput_N9i3IK0U7xrRJGlkpsTypAxEuPLA-eLong61z" 
              alt="Thiago Bastos" 
              className="w-10 h-10 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Thiago Bastos</p>
              <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Diretor Comercial</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 h-[72px] bg-surface-container/80 backdrop-blur-md border-b border-outline-variant shadow-sm z-40 flex justify-between items-center px-4 lg:px-8 gap-4">
          <div className="flex items-center gap-3">
            {/* Hamburger menu */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-surface-container-high rounded-xl text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
            <div className="lg:hidden overflow-hidden">
              <h1 className="text-base font-extrabold tracking-tight">SAGE BI</h1>
              <p className="text-[9px] uppercase tracking-widest text-primary font-bold">Retail Intelligence</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center flex-1 max-w-md lg:max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar relatórios, produtos ou clientes..."
                className="w-full bg-surface-container-high border border-outline-variant rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50 text-on-surface"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 ml-auto">
            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors" aria-label="Notificações">
              <Bell size={20} />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors" aria-label="Tema">
              <Contrast size={20} />
            </button>
            <div className="h-8 w-[1px] bg-outline-variant mx-1 lg:mx-2"></div>
            <button className="bg-primary-container text-on-primary-container font-semibold text-xs lg:text-sm px-3 lg:px-6 py-2 lg:py-2.5 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md">
              <Download size={18} />
              <span className="hidden md:inline">Exportar Relatório</span>
              <span className="md:hidden text-[11px]">Exportar</span>
            </button>
          </div>
        </header>

        {/* Small screen sub-header search bar */}
        <div className="sm:hidden px-4 py-3 border-b border-outline-variant bg-surface-container/60 backdrop-blur-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
            <input 
              type="text" 
              placeholder="Pesquisar no SAGE BI..."
              className="w-full bg-surface-container-high border border-outline-variant rounded-full pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-primary outline-none transition-all text-on-surface placeholder:text-on-surface-variant/60"
            />
          </div>
        </div>

        {/* Content */}
        <main className="p-4 md:p-8 flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
