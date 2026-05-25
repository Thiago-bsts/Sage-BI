
import React from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  TrendingDown, 
  Star, 
  LayoutGrid, 
  Search, 
  Download, 
  Filter, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const temporalData = [
  { name: 'Jan', real: 28, meta: 30 },
  { name: 'Fev', real: 32, meta: 30 },
  { name: 'Mar', real: 30, meta: 35 },
  { name: 'Abr', real: 41, meta: 40 },
  { name: 'Mai', real: 38, meta: 40 },
  { name: 'Jun', real: 40, meta: 45 },
  { name: 'Jul', real: 44, meta: 50 },
];

const categoryMargins = [
  { label: 'Fotografia', val: 42, color: 'bg-primary' },
  { label: 'Acessórios', val: 38, color: 'bg-primary' },
  { label: 'Eletrônicos', val: 32, color: 'bg-primary' },
  { label: 'Gaming', val: 29, color: 'bg-primary' },
  { label: 'Home Office', val: 24, color: 'bg-primary' },
];

const profitabilityAnalysis = [
  { id: 1, product: 'Câmera Alpha 7 IV', category: 'Fotografia', price: 'R$ 14.500,00', cost: 'R$ 8.337,50', margin: '42.5%', status: 'CRÍTICO-ALTO' },
  { id: 2, product: 'MacBook Pro M2', category: 'Eletrônicos', price: 'R$ 18.200,00', cost: 'R$ 12.376,00', margin: '32.0%', status: 'SAUDÁVEL' },
  { id: 3, product: 'Fone Noise Cancelling 700', category: 'Acessórios', price: 'R$ 2.400,00', cost: 'R$ 1.488,00', margin: '38.0%', status: 'SAUDÁVEL' },
  { id: 4, product: 'Monitor UltraWide 34"', category: 'Home Office', price: 'R$ 4.800,00', cost: 'R$ 3.648,00', margin: '24.0%', status: 'ATENÇÃO' },
  { id: 5, product: 'Teclado Mecânico RGB', category: 'Gaming', price: 'R$ 850,00', cost: 'R$ 744,60', margin: '12.4%', status: 'CRÍTICO-BAIXO' },
];

export default function MargemDeLucro() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-black italic tracking-tighter">Análise de Margem de Lucro</h2>
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-[0.2em] opacity-80">Monitoramento estratégico de rentabilidade e performance financeira.</p>
      </div>

      {/* Bantu Grid KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Produto Mais Lucrativo', val: 'Câmera Alpha 7 IV', sub: 'Margem: 42.5%', icon: Star, color: 'text-primary', bg: 'bg-primary/10' },
          { title: 'Categoria Mais Lucrativa', val: 'Acessórios Premium', sub: 'Média: 38.2%', icon: BarChart2, color: 'text-tertiary', bg: 'bg-tertiary/10' },
          { title: 'Pior Desempenho', val: 'Linha de Entrada', sub: 'Média: 12.4%', icon: TrendingDown, color: 'text-error', bg: 'bg-error/10' },
        ].map((kpi, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className={`glass-card p-8 rounded-2xl flex flex-col justify-between h-44 shadow-2xl border-white/5 ${kpi.title === 'Pior Desempenho' ? 'border-r-error/30' : ''}`}
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em]">{kpi.title}</span>
              <div className={`w-12 h-12 ${kpi.bg} ${kpi.color} rounded-2xl flex items-center justify-center shadow-inner ring-1 ring-white/5`}>
                <kpi.icon size={24} strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight">{kpi.val}</h3>
              <p className={`text-sm font-bold italic mt-1 ${kpi.color}`}>{kpi.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Margin per Category */}
        <div className="glass-card p-8 rounded-3xl lg:col-span-5 shadow-2xl border-white/5">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-xl font-black italic">Margem por Categoria</h4>
            <button className="text-on-surface-variant hover:text-on-surface transition-all"><MoreVertical size={20} /></button>
          </div>
          <div className="space-y-7">
            {categoryMargins.map((cat, idx) => (
              <div key={idx} className="space-y-2 group cursor-default">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">{cat.label}</span>
                  <span className="text-primary">{cat.val}%</span>
                </div>
                <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden shadow-inner ring-1 ring-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.val}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.1, ease: "circOut" }}
                    className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(184,196,255,0.4)]" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Temporal Margin Comparison */}
        <div className="glass-card p-8 rounded-3xl lg:col-span-7 flex flex-col shadow-2xl border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h4 className="text-xl font-black italic">Comparativo Temporal</h4>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mt-1">Margem líquida mensal vs. Projeção</p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-lg bg-primary shadow-sm" />
                <span className="text-[10px] font-black uppercase tracking-tighter">Real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-lg bg-outline-variant/50 shadow-sm" />
                <span className="text-[10px] font-black uppercase tracking-tighter">Meta</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[300px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={temporalData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="5 5" stroke="#30363D" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontStyle: 'italic', fontWeight: 900, fill: '#8e909f' }}
                  dy={15}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} 
                  contentStyle={{ backgroundColor: '#1c1f29', border: '1px solid #444653', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="meta" fill="#444653" radius={[4, 4, 4, 4]} barSize={40} />
                <Bar dataKey="real" fill="#b8c4ff" radius={[4, 4, 4, 4]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Table Section */}
      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border-white/5">
        <div className="p-8 border-b border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-high/30">
          <h4 className="text-xl font-black italic">Análise Detalhada de Rentabilidade</h4>
          <div className="flex gap-3">
            <button className="p-3 rounded-2xl hover:bg-surface-container-highest transition-all border border-outline-variant group shadow-sm">
              <Filter size={18} className="text-on-surface-variant group-hover:text-primary" />
            </button>
            <button className="p-3 rounded-2xl hover:bg-surface-container-highest transition-all border border-outline-variant text-primary group shadow-sm">
              <Search size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left order-collapse">
            <thead>
              <tr className="bg-surface-container text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant border-b border-outline-variant">
                <th className="px-8 py-5">Produto</th>
                <th className="px-8 py-5">Categoria</th>
                <th className="px-8 py-5">Preço de Venda</th>
                <th className="px-8 py-5 text-right">Custo Unitário</th>
                <th className="px-8 py-5 text-center">Margem (%)</th>
                <th className="px-8 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40">
              {profitabilityAnalysis.map((item) => (
                <tr key={item.id} className="hover:bg-surface-container-high transition-all cursor-pointer group">
                  <td className="px-8 py-6 text-sm font-bold group-hover:text-primary transition-colors">{item.product}</td>
                  <td className="px-8 py-6 text-xs font-bold text-on-surface-variant italic">{item.category}</td>
                  <td className="px-8 py-6 text-sm font-black italic tracking-tight">{item.price}</td>
                  <td className="px-8 py-6 text-right text-xs font-bold text-on-surface-variant opacity-60">
                    <motion.span whileHover={{ opacity: 1 }}>{item.cost}</motion.span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={`text-sm font-black italic underline decoration-2 decoration-offset-4 ${
                      item.margin.startsWith('4') ? 'text-primary decoration-primary' : 
                      item.margin.startsWith('1') ? 'text-error decoration-error' : 
                      'text-secondary decoration-secondary'
                    }`}>
                      {item.margin}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1 rounded-lg text-[9px] font-black tracking-[0.1em] shadow-sm uppercase border ring-1 ring-white/5 ${
                      item.status.includes('ALTO') ? 'bg-primary/10 text-primary border-primary/20' :
                      item.status.includes('BAIXO') ? 'bg-error/10 text-error border-error/20' :
                      item.status === 'ATENÇÃO' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' :
                      'bg-primary/10 text-primary border-primary/20 opacity-80'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-surface-container flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-outline-variant">
          <p className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant">Mostrando 5 de 142 itens</p>
          <div className="flex gap-4">
            <button className="w-11 h-11 flex items-center justify-center rounded-2xl border border-outline-variant hover:bg-surface-container-high transition-all shadow-sm hover:scale-105 active:scale-95">
              <ChevronLeft size={20} />
            </button>
            <button className="w-11 h-11 flex items-center justify-center rounded-2xl border border-outline-variant bg-primary-container text-on-primary-container font-black shadow-xl ring-2 ring-white/10 scale-110">1</button>
            <button className="w-11 h-11 flex items-center justify-center rounded-2xl border border-outline-variant hover:bg-surface-container-high transition-all text-xs font-black">2</button>
            <button className="w-11 h-11 flex items-center justify-center rounded-2xl border border-outline-variant hover:bg-surface-container-high transition-all shadow-sm hover:scale-105 active:scale-95">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-10" />
    </motion.div>
  );
}
