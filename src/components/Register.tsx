import React from 'react';
import { Mail, User, Building, ChevronDown, ShieldCheck, Zap, ArrowLeft, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface RegisterProps {
  onBackToLogin: () => void;
}

export default function Register({ onBackToLogin }: RegisterProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest overflow-hidden">
      {/* Left Content - Branding & Hero */}
      <div className="hidden lg:flex flex-col justify-center px-16 xl:px-24 space-y-12 relative overflow-hidden">
        {/* Background blobs for depth */}
        <div className="absolute top-0 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-16 group cursor-default">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(184,196,255,0.3)]">
              <Zap className="text-on-primary fill-on-primary" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-widest text-on-surface">SAGE BI</h1>
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Retail Intelligence</p>
            </div>
          </div>

          <h2 className="text-5xl xl:text-6xl font-black leading-[1.1] text-on-surface">
            Impulsione sua estratégia com <span className="text-primary italic">dados precisos.</span>
          </h2>
          <p className="text-lg font-medium text-on-surface-variant max-w-xl mt-8">
            Acesso exclusivo para parceiros corporativos e clientes estratégicos. Transforme complexidade em clareza com nossa plataforma de análise de alto desempenho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl">
            <div className="bg-surface-container-low border border-outline-variant p-8 rounded-3xl space-y-4 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Alta Performance</h4>
                <p className="text-sm text-on-surface-variant font-medium">Processamento em tempo real de grandes volumes de dados.</p>
              </div>
            </div>
            
            <div className="bg-surface-container-low border border-outline-variant p-8 rounded-3xl space-y-4 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Segurança Enterprise</h4>
                <p className="text-sm text-on-surface-variant font-medium">Dados protegidos e auditados com protocolos de última geração.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Form */}
      <div className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg bg-surface-container border border-outline-variant p-10 lg:p-14 rounded-[2.5rem] shadow-2xl overflow-hidden relative"
        >
          {/* Header */}
          <div className="mb-10">
            <h3 className="text-3xl font-black tracking-tight text-on-surface">Solicitar Acesso</h3>
            <p className="text-sm text-on-surface-variant font-medium mt-3">Preencha os campos abaixo para iniciar seu processo de credenciamento.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Nome Completo</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Ex: Thiago Bastos"
                  className="w-full bg-surface-container-high border border-outline-variant rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">E-mail Corporativo</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="email" 
                  placeholder="nome@empresa.com.br"
                  className="w-full bg-surface-container-high border border-outline-variant rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Empresa</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Nome da empresa"
                    className="w-full bg-surface-container-high border border-outline-variant rounded-2xl py-4 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Segmento</label>
                <div className="relative group">
                  <select 
                    className="w-full bg-surface-container-high border border-outline-variant rounded-2xl py-4 px-4 pr-10 text-sm font-medium outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Selecione...</option>
                    <option value="retail">Varejo</option>
                    <option value="tech">Tecnologia</option>
                    <option value="finance">Financeiro</option>
                    <option value="other">Outro</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" size={18} />
                </div>
              </div>
            </div>

            <button 
              type="button"
              className="w-full bg-primary-container text-on-primary-container py-4.5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(30,64,175,0.2)] mt-8"
            >
              Enviar Solicitação
              <Send size={18} strokeWidth={2.5} />
            </button>

            <div className="pt-8 border-t border-outline-variant text-center flex flex-col items-center">
              <button 
                type="button"
                onClick={onBackToLogin}
                className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface font-bold text-xs uppercase tracking-widest transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Voltar para o Login
              </button>
              
              <p className="text-[10px] font-medium text-on-surface-variant italic opacity-60">
                Reservamo-nos o direito de analisar todas as solicitações.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
