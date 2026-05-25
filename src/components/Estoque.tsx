
import React from 'react';
import { 
  PlusCircle, 
  Search, 
  BellRing, 
  Filter, 
  Download, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Truck,
  ShoppingCart
} from 'lucide-react';
import { motion } from 'motion/react';

const criticalProducts = [
  { 
    id: 1, 
    sku: '#992-8812', 
    name: 'Tênis Performance X1', 
    quantity: '12 unidades', 
    location: 'Matriz São Paulo', 
    status: 'CRÍTICO', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9nS8UsmHWsrwOl31JGtiioFI6bnK2zT3ZDBVYDDpDGIBQUchxljjJsnDHSJNccHLWsUCX9a9r44FHNacjSzsyTnM_Y8lDtlIKyorBSCOZXvMShfOl3sjr7Wr__qRTb4w_MJS6SrLeV5983s2YWlNnl37tFQpAFh6Vwq_bBZbbMbkl34oBcGCGflJf6AJ3hp3BfzsjYoivgcFk-5pCKABudhaJJQKoArHHQXM361HdqMEoi1hk_C_24LPozNyLKLBbpIe7R8dPe3V' 
  },
  { 
    id: 2, 
    sku: '#102-4451', 
    name: 'Relógio Smart Elegance', 
    quantity: '45 unidades', 
    location: 'Unidade Campinas', 
    status: 'ATENÇÃO', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg4wCRCqP_E_ru5C_GqEK1PbAY1wdX9BlrLI4Fr859satQo6o6Utqh_Cv9oq-cX9gsjJUwQ3ZRKgYIeG38IeWG5OHRLY1HMRiQ5xRQ4j8ilnyuRB5oRQ5oFnlY-heBijTdj7UKV7eovX-BXsCU33_Fcxi-72pHXa1q0qejiWbvEZNy13smpTR02Jvz4LXjH6i592RpnWtLxY7LLdnHplIxwHah4yetAL2DovVitsKwpowVQ3FVTwP6TeNxxr9mNVZEPsYVBlhGSpqk' 
  },
  { 
    id: 3, 
    sku: '#771-3320', 
    name: 'Headset Gamer Pro', 
    quantity: '142 unidades', 
    location: 'CD Principal Barueri', 
    status: 'NORMAL', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV3scy-b40Mesau1PZDiJG7UKlU7EYimqePl6KWQDDNshJl9-5KqyZ4hebpv9Z0eLyH1G05dmu_mWo5MP74zXTIjU5j0MGc7OxrsDkbUxx4zHRCOipSfI8mb0T1A7MMndGGVTBPLDUWt0Ot_5VqdHbYw4Btcr7ObnMoXHtjxuqbondvSuSwoqhHaMNvYyjHMiCeLuhFkUb2pFIAd7M5IbfDkBJvd_c2sG6cFB3xL7oWAZ13YBSVqZ1lGFuyb5EHN3RRUagWxTd5EBR' 
  },
];

export default function Estoque() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Critical Alert Banner */}
      <div className="bg-error-container/20 border border-error/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-error/20 flex items-center justify-center text-error border border-error/20 shrink-0">
            <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-on-error-container">Alerta de Ruptura Crítica</h3>
            <p className="text-xs sm:text-sm font-medium text-on-error-container/80">8 SKUs atingiram o estoque de segurança nas últimas 2h. Risco de indisponibilidade imediata em 3 unidades.</p>
          </div>
        </div>
        <button className="bg-error text-on-error w-full md:w-auto px-6 sm:px-8 py-3 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg whitespace-nowrap">
          Ver Produtos
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Produtos Críticos', value: '08', icon: AlertCircle, color: 'text-error', bg: 'bg-error-container/10', trend: '+2 desde ontem' },
          { title: 'Reposições Previstas', value: '24', icon: Truck, color: 'text-primary', bg: 'bg-primary-container/10', trend: '12 em trânsito' },
          { title: 'Pedidos Pendentes', value: '112', icon: ShoppingCart, color: 'text-tertiary', bg: 'bg-tertiary-container/10', trend: 'Média 4.2 dias p/ entrega' },
        ].map((kpi, idx) => (
          <div key={idx} className="glass-card p-6 rounded-xl relative group overflow-hidden">
            <div className={`absolute -right-4 -top-4 opacity-5 transition-transform group-hover:scale-110 ${kpi.color}`}>
              <kpi.icon size={120} />
            </div>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{kpi.title}</span>
                <h2 className={`text-4xl font-bold mt-1 ${kpi.color}`}>{kpi.value}</h2>
              </div>
              <div className={`mt-4 flex items-center text-xs font-bold ${kpi.color}`}>
                <TrendingUp size={14} className="mr-1" />
                {kpi.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart and Quick Actions */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6 h-[400px]">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-lg font-bold">Evolução do Estoque Global</h3>
              <p className="text-xs text-on-surface-variant">Variação de volume total x demanda prevista</p>
            </div>
            <select className="bg-surface-container border border-outline-variant text-[11px] font-bold rounded-lg px-4 py-2 outline-none">
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
            </select>
          </div>
          <div className="h-48 w-full flex items-end justify-between px-4">
            {[45, 65, 55, 85, 115, 105, 145].map((val, idx) => (
              <div key={idx} className="w-1/12 group relative flex flex-col items-center justify-end">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: val }}
                  className="w-1.5 bg-primary/20 absolute bottom-0" 
                />
                <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: 0.5 + idx * 0.1 }}
                   style={{ marginBottom: val }}
                   className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(184,196,255,0.6)] z-10" 
                />
                <span className="text-[10px] font-bold text-on-surface-variant absolute -bottom-8">
                  {idx * 5 + 1}/10
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card rounded-xl p-6 flex-1 flex flex-col shadow-inner border-white/5">
            <h3 className="text-lg font-bold mb-6">Ações Operacionais</h3>
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 scrollbar-hide">
              {[
                { label: 'Gerar Alerta', sub: 'Notificar gerentes de loja', icon: BellRing, color: 'text-primary' },
                { label: 'Solicitar Reposição', sub: 'Abertura de PO automática', icon: Truck, color: 'text-tertiary' },
                { label: 'Sugerir Remanejamento', sub: 'Otimização entre unidades', icon: TrendingUp, color: 'text-secondary' },
              ].map((action, idx) => (
                <button key={idx} className="w-full group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:bg-surface-container-high transition-all active:scale-[0.98] ring-inset hover:ring-1 hover:ring-primary/20">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center ${action.color}`}>
                      <action.icon size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold">{action.label}</p>
                      <p className="text-[11px] text-on-surface-variant font-medium">{action.sub}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <section className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/5">
        <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-low/50">
          <div>
            <h3 className="text-lg font-bold">Monitoramento de Inventário</h3>
            <p className="text-sm text-on-surface-variant">Tempo real por SKU e localidade</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 text-xs font-bold border border-outline-variant rounded-xl hover:bg-surface-container transition-colors shadow-sm">
              Filtrar por Loja
            </button>
            <button className="px-5 py-2 text-xs font-bold bg-white text-surface-container-lowest rounded-xl hover:opacity-90 transition-all shadow-lg active:scale-95">
              Atualizar Tudo
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/30 text-on-surface-variant text-[10px] uppercase tracking-widest font-black">
                <th className="px-8 py-5">Produto</th>
                <th className="px-8 py-5">SKU</th>
                <th className="px-8 py-5">Quantidade</th>
                <th className="px-8 py-5">Loja / Depósito</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {criticalProducts.map((p) => (
                <tr key={p.id} className="hover:bg-surface-container-high/20 transition-all cursor-pointer group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 border border-white/5 group-hover:border-primary/30 transition-colors shadow-inner overflow-hidden">
                        <img src={p.img} alt={p.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-sm font-bold">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-on-surface-variant font-medium">{p.sku}</td>
                  <td className="px-8 py-5 text-sm font-bold tracking-tight">{p.quantity}</td>
                  <td className="px-8 py-5 text-sm font-medium">{p.location}</td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${
                      p.status === 'CRÍTICO' ? 'bg-error/10 text-error border-error/30' :
                      p.status === 'ATENÇÃO' ? 'bg-tertiary/10 text-tertiary border-tertiary/30' :
                      'bg-primary/10 text-primary border-primary/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        p.status === 'CRÍTICO' ? 'bg-error animate-pulse' :
                        p.status === 'ATENÇÃO' ? 'bg-tertiary' : 'bg-primary'
                      }`} />
                      {p.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="p-2 hover:bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-surface-container-high/10 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs font-bold text-on-surface-variant">Mostrando 3 de 1.248 produtos</span>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"><ChevronLeft size={18} /></button>
            <button className="w-10 h-10 rounded-xl bg-primary text-on-primary font-black text-xs shadow-lg">1</button>
            <button className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center text-xs font-bold hover:bg-surface-container">2</button>
            <button className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"><ChevronRight size={18} /></button>
          </div>
        </div>
      </section>
      <div className="h-6" />
    </motion.div>
  );
}
