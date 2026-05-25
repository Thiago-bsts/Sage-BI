
import React from 'react';
import { 
  Users, 
  Crown, 
  Repeat, 
  AlertTriangle, 
  Search, 
  PlusCircle, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Download,
  Filter,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { title: 'Clientes Premium', value: '1.284', sub: 'Gasto médio: R$ 4.250/mês', trend: '+12.5%', color: 'text-secondary', icon: Crown, bg: 'bg-secondary-container/20' },
  { title: 'Clientes Frequentes', value: '4,892', sub: 'Frequência: 3.4 visitas/mês', trend: '+4.2%', color: 'text-primary', icon: Repeat, bg: 'bg-primary-container/20' },
  { title: 'Clientes em Risco', value: '845', sub: 'Sem compra há +45 dias', trend: '-8.1%', color: 'text-error', icon: AlertTriangle, bg: 'bg-error-container/20' },
];

const customerData = [
  { id: 1, name: 'Ana Maria Silva', email: 'ana.silva@email.com', status: 'Alto Valor', frequency: '8x / mês', ticket: 'R$ 542,00', last: 'Hoje, 10:45', initials: 'AM', color: 'bg-primary-container/30 text-primary' },
  { id: 2, name: 'Ricardo Castro', email: 'r.castro@corp.com', status: 'Frequente', frequency: '4x / mês', ticket: 'R$ 215,30', last: 'Ontem, 16:20', initials: 'RC', color: 'bg-secondary-container/30 text-secondary' },
  { id: 3, name: 'Juliana Paes', email: 'jupaes@gmail.com', status: 'Em Risco', frequency: '1x / mês', ticket: 'R$ 1.200,00', last: '45 dias atrás', initials: 'JP', color: 'bg-error-container/30 text-error' },
  { id: 4, name: 'Lucas Mendes', email: 'lucas.m@uol.com', status: 'Novo', frequency: '1x / único', ticket: 'R$ 89,90', last: 'Há 3 dias', initials: 'LM', color: 'bg-tertiary-container/30 text-tertiary' },
];

export default function Clientes() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Base de Clientes</h2>
          <p className="text-sm text-on-surface-variant font-medium">Análise comportamental e segmentação de audiência em tempo real.</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="border border-outline-variant px-4 sm:px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container transition-all text-xs font-bold shadow-sm flex-1 sm:flex-initial">
            <Filter size={16} />
            Filtros
          </button>
          <button className="border border-outline-variant px-4 sm:px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container transition-all text-xs font-bold shadow-sm flex-1 sm:flex-initial">
            <Download size={16} />
            Exportar
          </button>
        </div>
      </div>

      {/* Segment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 relative group border-white/5 shadow-xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} ring-1 ring-white/5 shadow-inner`}>
                <stat.icon size={24} strokeWidth={2.5} />
              </div>
              <span className={`font-bold text-xs ${stat.title === 'Clientes em Risco' ? 'text-error' : 'text-primary'}`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-[0.1em]">{stat.title}</h3>
            <p className="text-4xl font-black tracking-tight">{stat.value}</p>
            <p className="text-[11px] font-bold text-on-surface-variant mt-3 opacity-80">{stat.sub}</p>
            <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-${stat.color.split('-')[1]} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
          </motion.div>
        ))}
      </div>

      {/* Visual Analytics Row */}
      <div className="grid grid-cols-12 gap-6">
        {/* Retention Flow */}
        <div className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-8 shadow-2xl relative overflow-hidden border-white/5">
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div>
              <h3 className="text-xl font-bold">Fluxo de Retenção</h3>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Análise mensal de conversão de novos clientes</p>
            </div>
            <select className="bg-surface-container border border-outline-variant rounded-xl px-4 py-2 text-xs font-bold outline-none focus:ring-1 ring-primary transition-all">
              <option>Últimos 6 Meses</option>
              <option>Último Ano</option>
            </select>
          </div>
          
          <div className="h-48 w-full flex items-end justify-between gap-4 px-6 relative z-10">
            {[70, 80, 50, 95, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full bg-primary/10 rounded-t-xl relative group h-40">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="absolute bottom-0 w-full bg-primary/40 rounded-t-xl group-hover:bg-primary shadow-[0_0_20px_rgba(184,196,255,0.2)] transition-all" 
                  />
                </div>
                <span className="text-[10px] font-black text-on-surface-variant">
                  {['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'][i]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-outline-variant pt-8 relative z-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Taxa de Churn</p>
              <p className="text-2xl font-black text-error">2.4%</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">LTV Médio</p>
              <p className="text-2xl font-black text-primary">R$ 1.840</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">NPS Geral</p>
              <p className="text-2xl font-black text-secondary">84</p>
            </div>
          </div>
        </div>

        {/* Segmentation Card */}
        <div className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-8 flex flex-col justify-between border-white/5 shadow-2xl">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold">Segmentação</h3>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"><MoreVertical size={20} /></button>
          </div>
          
          <div className="relative flex justify-center py-6">
            <div className="w-48 h-48 rounded-full border-[15px] border-surface-container-low/50 relative flex items-center justify-center">
              <div className="absolute inset-[-15px] rounded-full border-[15px] border-primary border-l-transparent border-b-transparent -rotate-45" />
              <div className="absolute inset-[-15px] rounded-full border-[15px] border-secondary border-l-transparent border-t-transparent group-hover:rotate-12 transition-transform duration-1000" style={{ transform: 'rotate(180deg)' }} />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black tracking-tight">10.2k</span>
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Total</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            {[
              { label: 'Frequentes', val: '48%', color: 'bg-primary' },
              { label: 'Premium', val: '25%', color: 'bg-secondary' },
              { label: 'Novos', val: '15%', color: 'bg-tertiary' },
              { label: 'Em Risco', val: '12%', color: 'bg-error' },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${s.color} shadow-sm shadow-black`} />
                  <span className="text-xs font-bold text-on-surface-variant">{s.label}</span>
                </div>
                <span className="text-xs font-black">{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Base Table */}
      <div className="glass-card rounded-3xl overflow-hidden border-white/5 shadow-2xl">
        <div className="p-4 sm:p-8 border-b border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low/20">
          <h3 className="text-lg sm:text-xl font-bold italic">Base Estratégica</h3>
          <div className="flex items-center gap-4 w-full md:w-auto justify-center">
            <div className="flex bg-surface-container-high rounded-xl p-1 border border-outline-variant shadow-inner w-full sm:w-auto justify-around sm:justify-start">
              {['Todos', 'VIP', 'Churn Watch'].map((filter, i) => (
                <button key={i} className={`px-3 sm:px-6 py-2 rounded-lg text-xs font-black tracking-tight transition-all ${
                  i === 0 ? 'bg-primary text-on-primary shadow-lg' : 'text-on-surface-variant hover:text-on-surface'
                }`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/50 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-8 py-5">Cliente</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Frequência</th>
                <th className="px-8 py-5 text-right">Ticket Médio</th>
                <th className="px-8 py-5">Última Compra</th>
                <th className="px-8 py-5 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant ring-1 ring-white/5">
              {customerData.map((c) => (
                <tr key={c.id} className="hover:bg-surface-container-high/30 transition-all cursor-pointer group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shadow-inner ${c.color}`}>
                        {c.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold group-hover:text-primary transition-colors">{c.name}</p>
                        <p className="text-[11px] font-medium text-on-surface-variant">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-black tracking-tighter border ${
                      c.status === 'Alto Valor' ? 'bg-secondary/10 text-secondary border-secondary/20' :
                      c.status === 'Em Risco' ? 'bg-error/10 text-error border-error/20' :
                      c.status === 'Novo' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' :
                      'bg-primary/10 text-primary border-primary/20'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right text-xs font-bold text-on-surface-variant">{c.frequency}</td>
                  <td className="px-8 py-6 text-right text-sm font-black italic">{c.ticket}</td>
                  <td className="px-8 py-6 text-xs font-bold tracking-tight">{c.last}</td>
                  <td className="px-8 py-6 text-center">
                    <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-surface-container-low/30 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs font-black text-on-surface-variant tracking-widest opacity-60 uppercase">Mostrando 4 de 10.245 clientes</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all shadow-sm"><ChevronLeft size={18} /></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-black text-xs shadow-xl scale-110 ring-1 ring-white/20">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all text-xs font-bold">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all text-xs font-bold">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all shadow-sm"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
      <div className="h-10" />
    </motion.div>
  );
}
