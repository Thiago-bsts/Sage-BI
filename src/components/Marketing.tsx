import React from 'react';
import { 
  Megaphone, 
  Rocket, 
  Mail, 
  MousePointer2, 
  Plus, 
  TrendingUp, 
  Search, 
  Filter, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Target,
  BarChart2,
  Calendar
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { motion } from 'motion/react';

const campaignPerformance = [
  { name: 'Jan', impressions: 4000, coversions: 2400 },
  { name: 'Fev', impressions: 3000, coversions: 1398 },
  { name: 'Mar', impressions: 2000, coversions: 9800 },
  { name: 'Abr', impressions: 2780, coversions: 3908 },
  { name: 'Mai', impressions: 1890, coversions: 4800 },
  { name: 'Jun', impressions: 2390, coversions: 3800 },
];

const targetAudience = [
  { name: 'Novos Clientes', value: 65, color: '#b8c4ff' },
  { name: 'Recorrência', value: 25, color: '#ffb59a' },
  { name: 'Inativos', value: 10, color: '#444653' },
];

const campaignHistory = [
  { 
    id: 'CMP-9042', 
    name: 'Liquidação de Inverno', 
    audience: 'VIPs + Engajados', 
    status: 'ATIVO', 
    reach: '45.200', 
    result: 'R$ 124k', 
    icon: 'shopping-bag'
  },
  { 
    id: 'CMP-8812', 
    name: 'Aniversário SAGE', 
    audience: 'Base Total', 
    status: 'CONCLUÍDO', 
    reach: '128.500', 
    result: 'R$ 482k', 
    icon: 'gift'
  },
  { 
    id: 'CMP-7721', 
    name: 'Lançamento Tech', 
    audience: 'Interesse: Gadgets', 
    status: 'PAUSADO', 
    reach: '12.400', 
    result: 'R$ 45k', 
    icon: 'cpu'
  }
];

export default function Marketing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Inteligência de Marketing</h2>
          <p className="text-on-surface-variant font-medium mt-1">Análise de performance e gestão estratégica de campanhas multicanal.</p>
        </div>
        <button className="bg-primary text-on-primary w-full md:w-auto px-8 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(184,196,255,0.3)] active:scale-95 shrink-0">
          <Plus size={20} className="stroke-[3]" />
          Criar Campanha
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Campanhas Ativas', val: '03', trend: '+15% vs mês ant.', icon: Rocket, color: 'text-primary' },
          { title: 'Taxa de Abertura', val: '24.8%', trend: 'Benchmark: 22%', icon: Mail, color: 'text-tertiary' },
          { title: 'Taxa de Conversão', val: '3.12%', trend: '+0.4% proj. trim.', icon: MousePointer2, color: 'text-secondary' },
        ].map((kpi, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">{kpi.title}</p>
                <h3 className="text-5xl font-black tracking-tighter">{kpi.val}</h3>
                <p className="mt-4 text-[11px] font-bold text-on-surface-variant flex items-center gap-2">
                  {idx === 1 ? '⚡' : idx === 2 ? '✓' : '↗'} {kpi.trend}
                </p>
              </div>
              <div className={`p-4 rounded-2xl bg-surface-container-high ${kpi.color} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <kpi.icon size={28} />
              </div>
            </div>
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-10 rounded-full bg-current ${kpi.color}`} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Performance Chart */}
        <div className="col-span-12 lg:col-span-8 glass-card p-8 rounded-3xl h-[450px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xl font-bold">Desempenho de Campanhas</h4>
            <div className="flex bg-surface-container-high rounded-xl p-1 border border-outline-variant">
              <button className="px-5 py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">Semanal</button>
              <button className="px-5 py-2 text-xs font-bold rounded-lg bg-primary-container text-on-primary-container shadow-md">Mensal</button>
            </div>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignPerformance} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#c4c5d5', fontSize: 11, fontWeight: 700 }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1c1f29', border: '1px solid #444653', borderRadius: '12px' }}
                />
                <Bar dataKey="impressions" fill="#444653" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar dataKey="coversions" fill="#b8c4ff" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Target Audience Chart */}
        <div className="col-span-12 lg:col-span-4 glass-card p-8 rounded-3xl flex flex-col items-center">
          <h4 className="text-xl font-bold self-start mb-10">Público Alvo</h4>
          <div className="flex-1 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={targetAudience}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {targetAudience.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black tracking-tighter">1.2M</span>
              <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Reach</span>
            </div>
          </div>
          <div className="w-full mt-10 space-y-4">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-bold text-on-surface-variant">{item.name}</span>
                </div>
                <span className="text-sm font-black">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border-white/5">
        <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/20">
          <h4 className="text-xl font-bold italic">Histórico de Campanhas</h4>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-bold text-xs uppercase tracking-widest">
            <Filter size={16} />
            Filtrar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-8 py-6">Campanha</th>
                <th className="px-8 py-6">Público</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Alcance</th>
                <th className="px-8 py-6">Resultado</th>
                <th className="px-8 py-6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40">
              {campaignHistory.map((camp) => (
                <tr key={camp.id} className="hover:bg-surface-container-high transition-all cursor-pointer group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant group-hover:bg-primary/20 group-hover:text-primary transition-all shadow-inner">
                        <Target size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{camp.name}</p>
                        <p className="text-[10px] font-medium text-on-surface-variant">ID: {camp.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-on-surface-variant">{camp.audience}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-tighter border ${
                      camp.status === 'ATIVO' ? 'bg-primary/10 text-primary border-primary/20' :
                      camp.status === 'PAUSADO' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' :
                      'bg-outline-variant/10 text-on-surface-variant border-outline-variant/20'
                    }`}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold tracking-tight">{camp.reach}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-sm font-black italic color-primary">
                      <TrendingUp size={16} />
                      {camp.result}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button className="text-on-surface-variant hover:text-on-surface p-2 rounded-full hover:bg-white/5 transition-all">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-10" />
    </motion.div>
  );
}
