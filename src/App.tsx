
import React, { useState } from 'react';
import MainLayout from './components/MainLayout';
import { TabId, AuthView } from './types';
import Dashboard from './components/Dashboard';
import Vendas from './components/Vendas';
import Estoque from './components/Estoque';
import Clientes from './components/Clientes';
import MargemDeLucro from './components/MargemDeLucro';
import Marketing from './components/Marketing';
import Alertas from './components/Alertas';
import Configuracoes from './components/Configuracoes';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const [authView, setAuthView] = useState<AuthView>('login');
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'vendas':
        return <Vendas />;
      case 'estoque':
        return <Estoque />;
      case 'clientes':
        return <Clientes />;
      case 'margem':
        return <MargemDeLucro />;
      case 'marketing':
        return <Marketing />;
      case 'alertas':
        return <Alertas />;
      case 'configuracoes':
        return <Configuracoes onLogout={() => setAuthView('login')} />;
      default:
        return <Dashboard />;
    }
  };

  if (authView === 'login') {
    return <Login onLogin={() => setAuthView('app')} onNavigateToRegister={() => setAuthView('register')} />;
  }

  if (authView === 'register') {
    return <Register onBackToLogin={() => setAuthView('login')} />;
  }

  return (
    <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-[1600px] mx-auto">
        {renderTabContent()}
      </div>
    </MainLayout>
  );
};

export default App;
