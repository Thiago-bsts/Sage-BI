import React from 'react';
import { 
  Bell, 
  AlertCircle, 
  TrendingDown, 
  Package, 
  Users, 
  Target, 
  Search, 
  Filter, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Zap,
  ArrowRight,
  TrendingUp,
  Receipt,
  Truck
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { motion } from 'motion/react';

const alertActivity = [
  { time: '00:00', value: 20 },
  { time: '02:00', value: 15 },
  { time: '04:00', value: 30 },
  { time: '06:00', value: 55 },
  { time: '08:00', value: 40 },
  { time: '10:00', value: 45 },
  { time: '12:00', value: 35 },
  { time: '14:00', value: 50 },
  { time: '16:00', value: 42 },
  { time: '18:00', value: 65 },
  { time: '20:00', value: 48 },
  { time: 'Agora', value: 30 },
];

const severityStats = [
  { label: 'Crítico', count: 4, color: 'bg-error', total: 60 },
  { label: 'Atenção', count: 12, color: 'bg-tertiary', total: 60 },
  { label: 'Normal', count: 42, color: 'bg-primary', total: 60 },
];

const alertsList = [
  { 
    id: 1, 
    date: '14 Out, 2023', 
    time: '08:45:12', 
    title: 'Queda nas vendas (Sazonalidade Crítica)', 
    subtitle: 'Setor: Eletrônicos - Unidade Matriz', 
    severity: 'CRÍTICO', 
    type: 'Comercial', 
    icon: TrendingDown 
  },
  { 
    id: 2, 
    date: '14 Out, 2023', 
    time: '09:12:05', 
    title: 'Produto próximo do fim (SKU: 88291)', 
    subtitle: 'Estoque atual: 12 un. (Previsão: 2 dias)', 
    severity: 'ATENÇÃO', 
    type: 'Logística', 
    icon: Package 
  },
  { 
    id: 3, 
    date: '14 Out, 2023', 
    time: '10:30:00', 
    title: 'Cliente de alto valor inativo', 
    subtitle: 'ID #4421 - Sem compras há 45 dias', 
    severity: 'ATENÇÃO', 
    type: 'CRM', 
    icon: Users 
  },
  { 
    id: 4, 
    date: '14 Out, 2023', 
    time: '11:15:22', 
    title: 'Meta de Vendas Diária Atingida', 
    subtitle: 'Performance +12% acima da média', 
    severity: 'NORMAL', 
    type: 'Performance', 
    icon: Target 
  },
  { 
    id: 5, 
    date: '13 Out, 2023', 
    time: '23:55:01', 
    title: 'Margem de lucro abaixo do KPI', 
    subtitle: 'Linha: Vestuário Feminino (Margem 28.5%)', 
    severity: 'ATENÇÃO', 
    type: 'Financeiro', 
    icon: Receipt 
  },
];

export default function Alertas() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Central de Alertas</h2>
          <p className="text-on-surface-variant font-medium mt-1">Monitoramento estratégico em tempo real de toda a operação.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-container py-2 px-4 rounded-full border border-outline-variant shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Ativo & Sincronizado</span>
          </div>
        </div>
      </div>

      {/* Monitoring Grid */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 glass-card p-8 rounded-3xl h-[400px] flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-xl font-bold">Monitoramento em Tempo Real</h4>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Atividade de alertas nas últimas 24 horas</p>
            </div>
            <button className="bg-surface-container-high px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-outline-variant hover:bg-surface-container transition-all">Todas Categorias</button>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={alertActivity} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#8e909f', fontSize: 10, fontWeight: 700 }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1c1f29', border: '1px solid #444653', borderRadius: '12px' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={24}>
                  {alertActivity.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.value > 50 ? '#ffb4ab' : entry.value > 35 ? '#444653' : '#31353f'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-card p-8 rounded-3xl flex flex-col">
          <h4 className="text-xl font-bold mb-10">Severidade Hoje</h4>
          <div className="space-y-8 flex-1">
            {severityStats.map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                    <span className="text-sm font-bold text-on-surface-variant">{stat.label}</span>
                  </div>
                  <span className="text-xl font-black">{stat.count < 10 ? `0${stat.count}` : stat.count}</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.count / stat.total) * 100}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className={`h-full ${stat.color} shadow-lg`} 
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full bg-white/5 border border-outline-variant py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all mt-8">
            Ver Insights de IA
          </button>
        </div>
      </div>

      {/* Main Alert List */}
      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border-white/5">
        <div className="p-4 sm:p-8 border-b border-outline-variant flex flex-col lg:flex-row justify-between items-center gap-6 bg-surface-container-low/20">
          <h3 className="text-xl font-bold italic">Central de Alertas</h3>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-center">
            <div className="flex bg-surface-container-high rounded-xl p-1 border border-outline-variant shadow-inner w-full sm:w-auto justify-around sm:justify-start">
              {['Todos', 'Pendentes', 'Arquivados'].map((tab, i) => (
                <button key={i} className={`px-4 sm:px-6 py-2 rounded-lg text-xs font-black tracking-tight transition-all shrink-0 ${
                  i === 0 ? 'bg-primary-container text-on-primary-container shadow-md' : 'text-on-surface-variant hover:text-on-surface'
                }`}>
                  {tab}
                </button>
              ))}
            </div>
            <button className="flex items-center justify-center gap-2 border border-outline-variant px-5 py-2.5 rounded-xl hover:bg-surface-container transition-all text-[10px] font-black uppercase tracking-widest w-full sm:w-auto shrink-0">
              <Filter size={16} />
              Filtros
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-8 py-5">Data / Hora</th>
                <th className="px-8 py-5">Alerta</th>
                <th className="px-8 py-5">Gravidade</th>
                <th className="px-8 py-5">Tipo</th>
                <th className="px-8 py-5 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40">
              {alertsList.map((alert) => (
                <tr key={alert.id} className="hover:bg-surface-container-high transition-all cursor-pointer group">
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold">{alert.date}</p>
                    <p className="text-[10px] font-medium text-on-surface-variant">{alert.time}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-all shadow-inner">
                        <alert.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold group-hover:text-primary transition-all">{alert.title}</p>
                        <p className="text-[10px] font-medium text-on-surface-variant italic">{alert.subtitle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1 rounded-lg text-[9px] font-black tracking-[0.1em] shadow-sm uppercase border ring-1 ring-white/5 ${
                      alert.severity === 'CRÍTICO' ? 'bg-error/10 text-error border-error/20' :
                      alert.severity === 'ATENÇÃO' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' :
                      'bg-primary/10 text-primary border-primary/20'
                    }`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-xs font-bold text-on-surface-variant">{alert.type}</td>
                  <td className="px-8 py-6 text-center">
                    <button className="text-on-surface-variant hover:text-on-surface p-2 rounded-full hover:bg-white/5 transition-all">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-surface-container-low/30 border-t border-outline-variant flex justify-between items-center">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Mostrando 1-10 de 156 alertas detectados</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all"><ChevronLeft size={18} /></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-container text-on-primary-container font-black text-xs shadow-xl ring-2 ring-white/10 scale-110">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all text-xs font-bold">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all text-xs font-bold">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container transition-all"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>

      {/* Insight Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
        {[
          { label: 'Insight Logístico', desc: '6 produtos aguardam reposição urgente para evitar ruptura.', icon: Truck, link: 'Ver detalhes' },
          { label: 'Alerta de Fraude', desc: 'Nenhum comportamento suspeito detectado nas últimas 48h.', icon: ShieldAlert, link: 'Histórico' },
          { label: 'Churn Predictor', desc: 'Probabilidade de perda de clientes aumentou 2.4% este mês.', icon: Zap, link: 'Análise' },
        ].map((card, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -6 }}
            className="glass-card p-8 rounded-3xl border-white/5 flex flex-col justify-between group h-56 bg-surface-container-low/20"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-70 group-hover:opacity-100 transition-opacity">{card.label}</span>
              <p className="text-base font-bold leading-relaxed">{card.desc}</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mt-6 group-hover:gap-3 transition-all">
              {card.link}
              <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
