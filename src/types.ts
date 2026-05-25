
export type TabId = 'dashboard' | 'vendas' | 'estoque' | 'clientes' | 'margem' | 'marketing' | 'alertas' | 'configuracoes';

export type AuthView = 'login' | 'register' | 'app';

export interface TabInfo {
  id: TabId;
  label: string;
  icon: string;
}

export const TABS: TabInfo[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'vendas', label: 'Vendas', icon: 'CreditCard' },
  { id: 'estoque', label: 'Estoque', icon: 'Package' },
  { id: 'clientes', label: 'Clientes', icon: 'Users' },
  { id: 'margem', label: 'Margem de Lucro', icon: 'TrendingUp' },
  { id: 'marketing', label: 'Marketing', icon: 'Megaphone' },
  { id: 'alertas', label: 'Alertas', icon: 'BellRing' },
  { id: 'configuracoes', label: 'Configurações', icon: 'Settings' },
];
