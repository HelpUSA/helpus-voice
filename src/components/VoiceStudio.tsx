import React, { useState } from 'react';
import { Play, Download, Share2, Loader2, Volume2, Settings2, Sparkles, Check } from 'lucide-react';

interface VoiceStudioProps {
  initialText?: string;
}

export const VoiceStudio: React.FC<VoiceStudioProps> = ({ initialText = '' }) => {
  const [text, setText] = useState(initialText);
  const [voice, setVoice] = useState('pt-BR-AntonioNeural');
  const [rate, setRate] = useState('+0%');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Update text when prop changes
  React.useEffect(() => {
    if (initialText) {
      setText(initialText);
    }
  }, [initialText]);

  const voices = [
    { id: 'pt-BR-AntonioNeural', name: '👨 Antônio (Masculino - Comercial / Profissional)', desc: 'Tom seguro e envolvente' },
    { id: 'pt-BR-FranciscaNeural', name: '👩 Francisca (Feminino - Atendimento / Suave)', desc: 'Tom amigável e receptivo' },
    { id: 'pt-BR-ThalitaNeural', name: '👩 Thalita (Feminino - Jovem / Dinâmica)', desc: 'Tom moderno e ágil' }
  ];

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setAudioUrl(null);

    try {
      const response = await fetch('http://localhost:4000/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice, rate })
      });

      const data = await response.json();
      if (data.success && data.audioUrl) {
        setAudioUrl(`http://localhost:4000${data.audioUrl}`);
      } else {
        alert('Erro ao gerar áudio. Verifique se o servidor backend está rodando.');
      }
    } catch (err) {
      console.error(err);
      alert('Não foi possível conectar ao motor de IA (http://localhost:4000).');
    } finally {
      setLoading(false);
    }
  };

  const handleShareWhatsApp = () => {
    if (!audioUrl) return;
    const msg = `Ouça a mensagem de voz gravada via HelpUs Voice: ${audioUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-cyan-400" />
          <h2 className="font-bold text-lg text-white">Configurações do Áudio</h2>
        </div>
        <span className="text-xs text-slate-400">
          Caracteres: <strong className="text-cyan-400">{text.length}</strong> / 2000
        </span>
      </div>

      <div className="space-y-5">
        {/* Voice Selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Selecione a Voz Neural
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {voices.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVoice(v.id)}
                className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  voice === v.id
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-200 shadow-md shadow-cyan-950'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-sm text-slate-200">{v.name}</div>
                <div className="text-[11px] text-slate-400 mt-1">{v.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Speed Selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Velocidade da Fala
          </label>
          <div className="flex gap-2">
            {['-20%', '+0%', '+15%', '+30%'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRate(r)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                  rate === r
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                }`}
              >
                {r === '+0%' ? 'Normal (1.0x)' : `${r}`}
              </button>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Texto / Roteiro da Mensagem
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            placeholder="Digite ou cole aqui o texto que você deseja transformar em áudio de alta qualidade..."
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans text-sm resize-none"
          />
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          disabled={loading || !text.trim()}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Gerando Áudio Neural com IA...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Gerar Áudio de Alta Qualidade</span>
            </>
          )}
        </button>

        {/* Audio Player & Export Result */}
        {audioUrl && (
          <div className="mt-6 p-5 rounded-xl bg-slate-950 border border-cyan-500/30 animate-fade-in space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Volume2 className="w-5 h-5 animate-bounce" />
                <span>Áudio Gerado com Sucesso!</span>
              </div>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                Formato MP3 320kbps
              </span>
            </div>

            <audio controls src={audioUrl} className="w-full h-10 rounded-lg accent-cyan-500" />

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={audioUrl}
                download
                className="flex-1 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Baixar `.mp3`</span>
              </a>

              <button
                onClick={handleShareWhatsApp}
                className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
