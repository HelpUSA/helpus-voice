import React, { useState } from 'react';
import { Header } from './components/Header';
import { Presets } from './components/Presets';
import { VoiceStudio } from './components/VoiceStudio';
import { Mic, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedText, setSelectedText] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alternativa de Alto Desempenho e Custo Reduzido</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Crie Áudios e Narrações com <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Vozes Neurais de IA</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transforme qualquer texto em mensagens de áudio ultra-realistas em português. Perfeito para WhatsApp, agendamentos, atendimento comercial e vinhetas promocionais.
          </p>
        </div>

        {/* Quick Presets */}
        <Presets onSelectPreset={(text) => setSelectedText(text)} />

        {/* Voice Studio App */}
        <VoiceStudio initialText={selectedText} />

        {/* Features / Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-900">
          <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-200">Geração Instantânea</h4>
              <p className="text-xs text-slate-400 mt-1">Gere arquivos MP3 em menos de 2 segundos diretamente do servidor backend.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-200">Pronto para WhatsApp</h4>
              <p className="text-xs text-slate-400 mt-1">Exporte e compartilhe áudios perfeitos para atendimento automatizado de clientes.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-200">Pronto para Vercel SaaS</h4>
              <p className="text-xs text-slate-400 mt-1">Configurado para o subdomínio <strong className="text-slate-300">voz.helpusbr.com</strong>.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 HelpUs Voice — Todos os direitos reservados. Subdomínio configurado: <span className="text-slate-400 font-semibold">voz.helpusbr.com</span>
      </footer>
    </div>
  );
};

export default App;
