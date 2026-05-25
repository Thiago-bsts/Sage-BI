
import React from 'react';
import { 
  User, 
  Shield, 
  Bell, 
  Database, 
  Globe, 
  Cloud, 
  Key, 
  Github, 
  Terminal,
  Settings as SettingsIcon,
  ChevronRight,
  LogOut,
  AppWindow,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

interface ConfiguracoesProps {
  onLogout?: () => void;
}

export default function Configuracoes({ onLogout }: ConfiguracoesProps) {
  const sections = [
    {
      title: 'Preferências do Sistema',
      items: [
        { icon: User, label: 'Perfil do Executivo', sub: 'Gerencie suas credenciais e acesso global', action: 'Editar' },
        { icon: Shield, label: 'Segurança & Privacidade', sub: 'Autenticação em dois fatores e logs de acesso', action: 'Configurar' },
        { icon: Bell, label: 'Notificações Estratégicas', sub: 'Defina alertas para KPIs críticos e rupturas', action: 'Definir' },
      ]
    },
    {
      title: 'Conectividade & API',
      items: [
        { icon: Database, label: 'Fontes de Dados (ERP)', sub: 'Status da sincronização com TOTVS/SAP', action: 'Sincronizado', status: 'success' },
        { icon: Cloud, label: 'Integração Google Cloud', sub: 'Processamento BigQuery e AI Insights', action: 'Ativo', status: 'success' },
        { icon: Key, label: 'Chaves de API', sub: 'Tokens de acesso para ferramentas externas', action: 'Gerenciar' },
      ]
    },
    {
      title: 'Interface SAGE',
      items: [
        { icon: Globe, label: 'Localização & Moeda', sub: 'Português (Brasil) - BRL (R$)', action: 'Alterar' },
        { icon: AppWindow, label: 'Configuração do Workspace', sub: 'Customização do sidebar e cards rápidos', action: 'Ajustar' },
        { icon: Cpu, label: 'Motor de Inteligência', sub: 'Sensibilidade de detecção de anomalias', action: '85%', status: 'info' },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-12 pb-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant pb-8">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Configurações</h2>
          <p className="text-sm text-on-surface-variant font-medium mt-1">Ambiente de controle e parametrização do SAGE BI.</p>
        </div>
        <button 
          onClick={onLogout}
          className="flex items-center justify-center gap-2 bg-error/10 text-error px-6 py-3 rounded-2xl font-bold text-sm hover:bg-error hover:text-on-error transition-all active:scale-95 shadow-lg w-full md:w-auto shrink-0"
        >
          <LogOut size={18} />
          Encerrar Sessão
        </button>
      </div>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-on-surface-variant flex items-center gap-3">
              <span className="w-8 h-px bg-outline-variant" />
              {section.title}
            </h3>
            <div className="grid gap-4">
              {section.items.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  className="glass-card p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 group cursor-pointer border-white/5 shadow-xl transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-6 w-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-surface-container-high rounded-2xl flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:bg-primary-container/20 transition-all shadow-inner shrink-0">
                      <item.icon size={24} className="sm:w-[28px] sm:h-[28px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors truncate">{item.label}</h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-medium line-clamp-2">{item.sub}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 border-outline-variant/30 pt-3 sm:pt-0">
                    <span className={`text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-outline-variant ${
                      item.status === 'success' ? 'text-green-400 bg-green-400/5' : 
                      item.status === 'info' ? 'text-primary bg-primary/5' : 
                      'text-on-surface-variant bg-surface-container-high'
                    }`}>
                      {item.action}
                    </span>
                    <ChevronRight size={18} className="text-on-surface-variant group-hover:translate-x-1 transition-transform self-center shrink-0 hidden sm:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Version Info */}
      <div className="pt-12 border-t border-outline-variant flex flex-col items-center gap-4 text-center">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-on-surface-variant opacity-50 mb-2">
          <SettingsIcon size={24} />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em]">SAGE BI - Retail Intelligence</p>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Versão 4.2.0-stable | Build 2024.05.12</p>
        </div>
        <div className="flex gap-6 mt-4">
          <Github size={18} className="text-on-surface-variant hover:text-white cursor-pointer transition-colors" />
          <Terminal size={18} className="text-on-surface-variant hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}
