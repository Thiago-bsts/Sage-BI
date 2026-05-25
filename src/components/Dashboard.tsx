
import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Percent, 
  ShoppingBag, 
  MousePointerClick,
  Package,
  Users,
  Megaphone,
  ChevronRight,
  Laptop,
  Smartphone,
  Headphones
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

const salesData = [
  { name: 'JAN', value: 450000 },
  { name: 'FEV', value: 620000 },
  { name: 'MAR', value: 550000 },
  { name: 'ABR', value: 750000 },
  { name: 'MAI', value: 900000 },
  { name: 'JUN', value: 1200000 },
];

const categoryData = [
  { name: 'Eletrodomésticos', value: 42, color: '#b8c4ff' },
  { name: 'Moda', value: 25, color: '#d2bbff' },
  { name: 'Casa', value: 18, color: '#ffb59a' },
];

const topProducts = [
  { id: 1, icon: Laptop, name: 'MacBook Pro 14" M3', category: 'Eletro', sales: '1.240 unidades', profit: 'R$ 285.000', performance: 85 },
  { id: 2, icon: Smartphone, name: 'iPhone 15 Pro Max', category: 'Eletro', sales: '980 unidades', profit: 'R$ 210.000', performance: 65 },
  { id: 3, icon: Headphones, name: 'AirPods Max Space Gray', category: 'Acessórios', sales: '840 unidades', profit: 'R$ 42.000', performance: 40 },
];

const KPI_CARDS = [
  { 
    title: 'Vendas Totais', 
    value: 'R$1.250.000', 
    trend: '+12.4%', 
    isPositive: true, 
    icon: DollarSign, 
    color: 'text-primary', 
    bg: 'bg-primary-container/20' 
  },
  { 
    title: 'Margem de Lucro', 
    value: '28%', 
    trend: '+2.1%', 
    isPositive: true, 
    icon: TrendingUp, 
    color: 'text-secondary', 
    bg: 'bg-secondary-container/20' 
  },
  { 
    title: 'Ticket Médio', 
    value: 'R$142', 
    trend: '-0.8%', 
    isPositive: false, 
    icon: ShoppingBag, 
    color: 'text-tertiary', 
    bg: 'bg-tertiary-container/20' 
  },
  { 
    title: 'Taxa de Conversão', 
    value: '5,8%', 
    trend: '+1.2%', 
    isPositive: true, 
    icon: MousePointerClick, 
    color: 'text-primary', 
    bg: 'bg-primary-container/10' 
  },
];

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">Visão Geral Executiva</h2>
        <p className="text-sm text-on-surface-variant">Bem-vindo de volta, Thiago. Aqui está o desempenho da rede nas últimas 24 horas.</p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((kpi, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card p-6 rounded-xl cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>
                <kpi.icon size={24} />
              </div>
              <span className={`text-xs font-bold flex items-center gap-1 ${kpi.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {kpi.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {kpi.trend}
              </span>
            </div>
            <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">{kpi.title}</p>
            <h3 className="text-2xl font-bold">{kpi.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Bento Charts Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Line Chart Component */}
        <div className="col-span-12 lg:col-span-8 glass-card p-6 rounded-xl flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold">Vendas últimos meses</h4>
            <div className="flex gap-2">
              <button className="bg-surface-container-high px-3 py-1 rounded text-xs hover:text-primary">Mês</button>
              <button className="bg-primary px-3 py-1 rounded text-xs text-on-primary font-bold">Semana</button>
            </div>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b8c4ff" stopOpacity={1} />
                    <stop offset="100%" stopColor="#7582c7" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="5 5" stroke="#252a37" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#8e909f', fontSize: 11, fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#8e909f', fontSize: 10, fontWeight: 600 }}
                  tickFormatter={(val) => {
                    if (val >= 1000000) return `R$ ${(val / 1000000).toFixed(1)}M`;
                    return `R$ ${val / 1000}k`;
                  }}
                  dx={-10}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(184, 196, 255, 0.04)', radius: 8 }}
                  contentStyle={{ 
                    backgroundColor: '#1b1d28', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                    padding: '12px 16px'
                  }}
                  labelStyle={{ color: '#8e909f', fontWeight: 'bold', fontSize: '11px', marginBottom: '4px', textTransform: 'uppercase' }}
                  itemStyle={{ color: '#b8c4ff', fontWeight: '800', fontSize: '14px' }}
                  formatter={(value) => [new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(Number(value)), 'Faturamento']}
                />
                <Bar 
                  dataKey="value" 
                  fill="url(#colorSales)" 
                  radius={[8, 8, 0, 0]}
                  barSize={32}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Categories Donut Chart */}
        <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl flex flex-col">
          <h4 className="text-lg font-bold mb-6">Vendas por Categoria</h4>
          <div className="flex-1 flex items-center justify-center relative min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-[12px] text-on-surface-variant uppercase">Eletro</span>
              <span className="text-2xl font-bold">42%</span>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {categoryData.map((cat, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-on-surface-variant">{cat.name}</span>
                </div>
                <span className="font-bold">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ x: 4 }} className="bg-surface-container border border-outline-variant p-6 rounded-xl flex items-center gap-5 cursor-pointer hover:bg-surface-container-high transition-all group">
          <div className="w-14 h-14 bg-error-container/20 rounded-full flex items-center justify-center text-error border border-error/20">
            <Package size={28} />
          </div>
          <div>
            <h5 className="text-error text-xl font-bold">8 produtos</h5>
            <p className="text-on-surface-variant text-sm">Estoque Crítico detectado</p>
          </div>
          <ChevronRight className="ml-auto text-on-surface-variant group-hover:translate-x-1 transition-transform" />
        </motion.div>
        
        <motion.div whileHover={{ x: 4 }} className="bg-surface-container border border-outline-variant p-6 rounded-xl flex items-center gap-5 cursor-pointer hover:bg-surface-container-high transition-all group">
          <div className="w-14 h-14 bg-tertiary-container/20 rounded-full flex items-center justify-center text-tertiary border border-tertiary/20">
            <Users size={28} />
          </div>
          <div>
            <h5 className="text-tertiary text-xl font-bold">24 clientes</h5>
            <p className="text-on-surface-variant text-sm">Risco de Churn (Inativos)</p>
          </div>
          <ChevronRight className="ml-auto text-on-surface-variant group-hover:translate-x-1 transition-transform" />
        </motion.div>

        <motion.div whileHover={{ x: 4 }} className="bg-surface-container border border-outline-variant p-6 rounded-xl flex items-center gap-5 cursor-pointer hover:bg-surface-container-high transition-all group">
          <div className="w-14 h-14 bg-primary-container/20 rounded-full flex items-center justify-center text-primary border border-primary/20">
            <Megaphone size={28} />
          </div>
          <div>
            <h5 className="text-primary text-xl font-bold">3 campanhas</h5>
            <p className="text-on-surface-variant text-sm">Marketing em execução</p>
          </div>
          <ChevronRight className="ml-auto text-on-surface-variant group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>

      {/* Table Section */}
      <div className="glass-card rounded-xl overflow-hidden border border-outline-variant">
        <div className="px-6 py-4 flex items-center justify-between border-b border-outline-variant">
          <h4 className="text-lg font-bold">Produtos Mais Vendidos</h4>
          <button className="text-primary font-semibold text-sm hover:underline hover:underline-offset-4">Ver Todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 text-on-surface-variant text-xs uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Produto</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Vendas</th>
                <th className="px-6 py-4">Lucro</th>
                <th className="px-6 py-4">Desempenho</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {topProducts.map((p) => (
                <tr key={p.id} className="hover:bg-surface-container-high/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                        <p.icon size={20} />
                      </div>
                      <span className="font-semibold text-sm">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{p.category}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{p.sales}</td>
                  <td className="px-6 py-4 text-sm font-semibold">{p.profit}</td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-surface-container-high rounded-full h-1.5 max-w-[100px] overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${p.performance}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-primary h-full rounded-full" 
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-4" />
    </motion.div>
  );
}
