import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

export default function Login({ onLogin, onNavigateToRegister }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-surface-container-lowest">
      {/* Logo Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-black tracking-widest text-on-surface">SAGE BI</h1>
        <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mt-1">Retail Intelligence</p>
      </motion.div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-surface-container rounded-3xl p-10 border border-outline-variant shadow-2xl relative overflow-hidden"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-on-surface">Bem-vindo</h2>
          <p className="text-sm text-on-surface-variant font-medium mt-1">Acesse sua conta para gerenciar seus dados.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Usuário ou E-mail</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="seu@email.com"
                className="w-full bg-surface-container-high border border-outline-variant rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Senha</label>
              <button type="button" className="text-[10px] font-black uppercase tracking-tighter text-primary hover:underline underline-offset-4">Esqueceu a senha?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-surface-container-high border border-outline-variant rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary-container text-on-primary-container py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg mt-8"
          >
            Entrar
            <ChevronRight size={18} strokeWidth={3} />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-outline-variant text-center">
          <p className="text-sm font-medium text-on-surface-variant">Ainda não tem acesso?</p>
          <button 
            onClick={onNavigateToRegister}
            className="mt-2 text-primary font-bold text-sm hover:underline underline-offset-4 flex items-center gap-2 mx-auto transition-all"
          >
            Solicite agora
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Copyright Footer */}
      <p className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-50">
        © 2024 SAGE BI Systems. Todos os direitos reservados.
      </p>
    </div>
  );
}
