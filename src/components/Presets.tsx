import React from 'react';
import { Scissors, Home, MessageSquare, ShoppingBag } from 'lucide-react';

interface PresetsProps {
  onSelectPreset: (text: string) => void;
}

export const Presets: React.FC<PresetsProps> = ({ onSelectPreset }) => {
  const presets = [
    {
      icon: Scissors,
      title: 'Agendamento Barbearia',
      text: 'Olá! Seu horário para corte e barba está confirmado para amanhã às 15 horas. Caso precise reagendar, avise por aqui!',
      badge: 'Barbearia'
    },
    {
      icon: Home,
      title: 'Oferta Imobiliária',
      text: 'Olá! Acabamos de receber um apartamento incrível de 3 suítes na orla com condição exclusiva. Posso te enviar as fotos?',
      badge: 'Imóveis'
    },
    {
      icon: MessageSquare,
      title: 'Lembrete de Atendimento',
      text: 'Olá! Passando para confirmar nossa reunião de alinhamento de amanhã. Nos vemos em breve!',
      badge: 'Atendimento'
    },
    {
      icon: ShoppingBag,
      title: 'Promoção Comercial',
      text: 'Aproveite a nossa semana especial com descontos de até 30% em todos os serviços. Garanta a sua vaga agora!',
      badge: 'Vendas'
    }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">Modelos Prontos para Uso Rápido</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {presets.map((p, idx) => {
          const Icon = p.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectPreset(p.text)}
              className="text-left p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-950 text-cyan-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-medium">
                  {p.badge}
                </span>
              </div>
              <h4 className="font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">{p.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">{p.text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
