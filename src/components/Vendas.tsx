
import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  MousePointerClick,
  Calendar,
  Filter,
  ShoppingCart,
  Store,
  Share2,
  ArrowRight,
  ChevronDown,
  Building2,
  Receipt,
  Wallet
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { motion } from 'motion/react';

const monthlySales = [
  { name: 'JAN', value: 300, meta: 280 },
  { name: 'MAR', value: 400, meta: 350 },
  { name: 'MAI', value: 350, meta: 380 },
  { name: 'JUL', value: 500, meta: 450 },
  { name: 'SET', value: 650, meta: 600 },
  { name: 'NOV', value: 600, meta: 650 },
  { name: 'DEZ', value: 850, meta: 800 },
];

const regionGrowth = [
  { name: 'Sudeste', value: 85, growth: '+18.5%' },
  { name: 'Sul', value: 65, growth: '+12.2%' },
  { name: 'Nordeste', value: 45, growth: '+9.8%' },
  { name: 'Centro-Oeste', value: 25, growth: '+4.1%' },
];

const salesDetails = [
  { id: 1, product: 'Smartphone Galaxy S24', count: '1,420', profit: 'R$ 145.200', channel: 'E-commerce', status: 'ALTA', icon: ShoppingCart },
  { id: 2, product: 'MacBook Air M3', count: '840', profit: 'R$ 212.000', channel: 'Físico', status: 'ESTÁVEL', icon: Store },
  { id: 3, product: 'Monitor UltraWide 34\'', count: '2,100', profit: 'R$ 88.400', channel: 'E-commerce', status: 'ALERTA', icon: ShoppingCart },
  { id: 4, product: 'Headset Gamer Wireless', count: '3,450', profit: 'R$ 54.120', channel: 'Marketplace', status: 'ALTA', icon: Building2 },
];

export default function Vendas() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      {/* Filters Row */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant ring-1 ring-white/5 shadow-xl">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-surface-container-high rounded-lg cursor-pointer transition-colors shrink-0">
            <Calendar size={18} className="text-on-surface-variant" />
            <span className="text-sm font-semibold">Últimos 30 Dias</span>
            <ChevronDown size={14} className="text-on-surface-variant" />
          </div>
          <div className="hidden xl:block h-6 w-px bg-outline-variant mx-1" />
          <div className="flex flex-wrap gap-2">
            {['Loja: Todas', 'Região: Sudeste', 'Categoria: Eletrônicos', 'Canal: E-commerce'].map((filter, idx) => (
              <button key={idx} className="px-3 py-1.5 rounded-lg border border-outline-variant hover:bg-surface-container-high transition-all flex items-center gap-2 text-xs font-semibold shrink-0">
                {filter}
                <ChevronDown size={12} />
              </button>
            ))}
          </div>
        </div>
        <button className="xl:ml-auto flex items-center gap-2 text-primary font-bold text-sm hover:underline transition-all">
          <Filter size={16} />
          Limpar Filtros
        </button>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Vendido', value: 'R$ 1.284.550,00', trend: '+12.4%', icon: DollarSign, color: 'text-primary' },
          { title: 'Lucro Líquido', value: 'R$ 412.330,00', trend: '+8.2%', icon: Wallet, color: 'text-secondary' },
          { title: 'Ticket Médio', value: 'R$ 458,90', trend: '-2.1%', icon: Receipt, color: 'text-tertiary', isNegative: true },
          { title: 'Taxa de Conversão', value: '4.82%', trend: '+0.4%', icon: MousePointerClick, color: 'text-primary' },
        ].map((kpi, idx) => (
          <div key={idx} className="glass-card p-6 rounded-xl relative group">
            <div className="flex justify-between items-start mb-4">
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">{kpi.title}</p>
              <div className={`p-2 rounded-lg bg-white/5 ${kpi.color}`}>
                <kpi.icon size={20} />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{kpi.value}</h3>
            <div className={`mt-2 flex items-center gap-1 text-xs font-bold ${kpi.isNegative ? 'text-red-400' : 'text-primary'}`}>
              {kpi.isNegative ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
              {kpi.trend} vs mês anterior
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 glass-card p-6 rounded-xl overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-lg font-bold">Vendas Mensais</h4>
              <p className="text-xs text-on-surface-variant uppercase tracking-tighter">Evolução do faturamento bruto por período</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary-container/20 text-primary rounded-full text-[10px] font-bold">REALIZADO</span>
              <span className="px-3 py-1 bg-outline-variant/20 text-on-surface-variant rounded-full text-[10px] font-bold">META</span>
            </div>
          </div>
          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlySales}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e40af" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1e40af" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#c4c5d5' }} dy={10} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#1e40af" strokeWidth={3} fillOpacity={1} fill="url(#salesGradient)" />
                <Area type="monotone" dataKey="meta" stroke="#444653" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl">
          <h4 className="text-lg font-bold mb-1">Crescimento por Região</h4>
          <p className="text-xs text-on-surface-variant uppercase mb-8">Performance regional vs ano anterior</p>
          <div className="space-y-6">
            {regionGrowth.map((region, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">{region.name}</span>
                  <span className="text-primary font-bold text-sm tracking-tight">{region.value}%</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${region.value}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className="bg-primary h-full rounded-full" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl flex flex-col justify-between">
          <h4 className="text-lg font-bold mb-6">Comparativo Anual</h4>
          <div className="flex items-end justify-between h-40 px-4 space-x-6">
            <div className="flex flex-col items-center w-full">
              <div className="w-full bg-primary/20 rounded-t-lg h-24 relative overflow-hidden">
                <motion.div initial={{ height: 0 }} animate={{ height: '70%' }} className="absolute bottom-0 w-full bg-primary/40 rounded-t-lg" />
              </div>
              <span className="mt-2 text-xs font-bold text-on-surface-variant">2023</span>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="w-full bg-secondary/20 rounded-t-lg h-40 relative overflow-hidden">
                <motion.div initial={{ height: 0 }} animate={{ height: '90%' }} className="absolute bottom-0 w-full bg-secondary rounded-t-lg shadow-lg" />
              </div>
              <span className="mt-2 text-xs font-bold text-on-surface-variant">2024</span>
            </div>
          </div>
          <div className="mt-8 p-4 bg-surface-container rounded-xl border border-outline-variant flex items-center justify-between shadow-inner">
            <span className="text-xs font-bold text-on-surface-variant uppercase uppercase tracking-widest">Delta Anual</span>
            <span className="text-primary font-bold text-lg">+22.4%</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden border border-outline-variant shadow-2xl">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center shadow-sm">
            <h4 className="text-lg font-bold">Detalhamento de Vendas</h4>
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:bg-primary/5 px-4 py-2 rounded-lg transition-all">
              Ver Completo
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-high/50 text-on-surface-variant text-xs uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">Produto</th>
                  <th className="px-6 py-4">Vendas (Qtd)</th>
                  <th className="px-6 py-4">Lucro</th>
                  <th className="px-6 py-4">Canal</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {salesDetails.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-high/40 transition-colors cursor-pointer ring-inset hover:ring-1 hover:ring-primary/20">
                    <td className="px-6 py-4 text-sm font-bold">{item.product}</td>
                    <td className="px-6 py-4 text-sm">{item.count}</td>
                    <td className="px-6 py-4 text-sm font-bold">{item.profit}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <item.icon size={16} className="text-on-surface-variant" />
                        {item.channel}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-black tracking-tighter ${
                        item.status === 'ALTA' ? 'bg-primary/10 text-primary' : 
                        item.status === 'ESTÁVEL' ? 'bg-secondary/10 text-secondary' : 
                        'bg-error/10 text-error'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Callout */}
      <div className="bg-primary-container p-8 rounded-2xl shadow-inner relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Pronto para a reunião de diretoria?</h2>
          <p className="text-on-primary-container opacity-90 max-w-md text-sm font-medium">Gere uma análise detalhada consolidando todos os filtros e indicadores ativos para apresentação estratégica.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 relative z-10 w-full sm:w-auto shrink-0">
          <button className="bg-white text-primary-container px-6 py-3 rounded-xl font-bold text-sm hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
            <TrendingUp size={20} />
            Exportar Análise
          </button>
          <button className="bg-primary-container border-2 border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
            <Share2 size={20} />
            Compartilhar
          </button>
        </div>
        {/* Background Decor */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}
