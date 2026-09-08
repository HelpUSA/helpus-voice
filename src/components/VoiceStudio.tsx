import React, { useState } from 'react';
import { Download, Share2, Loader2, Volume2, Settings2, Sparkles } from 'lucide-react';
import { type TranslationSchema } from '../i18n/translations';

interface VoiceStudioProps {
  t: TranslationSchema['studio'];
  initialText?: string;
}

export const VoiceStudio: React.FC<VoiceStudioProps> = ({ t, initialText = '' }) => {
  const [text, setText] = useState(initialText);
  const [voice, setVoice] = useState('pt-BR-AntonioNeural');
  const [rate, setRate] = useState('+0%');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialText) {
      setText(initialText);
    }
  }, [initialText]);

  const voices = [
    { id: 'pt-BR-AntonioNeural', name: t.voices.antonioName, desc: t.voices.antonioDesc },
    { id: 'pt-BR-FranciscaNeural', name: t.voices.franciscaName, desc: t.voices.franciscaDesc },
    { id: 'pt-BR-ThalitaNeural', name: t.voices.thalitaName, desc: t.voices.thalitaDesc }
  ];

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setAudioUrl(null);

    const apiEndpoint = import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/tts`
      : '/api/tts';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice, rate })
      });

      const data = await response.json();
      if (data.success && data.audioUrl) {
        if (data.audioUrl.startsWith('data:') || data.audioUrl.startsWith('http')) {
          setAudioUrl(data.audioUrl);
        } else {
          const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
          setAudioUrl(`${baseUrl}${data.audioUrl}`);
        }
      } else {
        alert(t.serverError);
      }
    } catch (err) {
      console.error(err);
      alert(t.serverError);
    } finally {
      setLoading(false);
    }
  };

  const handleShareWhatsApp = () => {
    if (!audioUrl) return;
    const msg = `${t.whatsappMsg} ${audioUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-cyan-400" />
          <h2 className="font-bold text-lg text-white">{t.configTitle}</h2>
        </div>
        <span className="text-xs text-slate-400">
          {t.charCount}: <strong className="text-cyan-400">{text.length}</strong> / 2000
        </span>
      </div>

      <div className="space-y-5">
        {/* Voice Selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            {t.voiceSelectLabel}
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
            {t.speedLabel}
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
                {r === '+0%' ? t.speedNormal : `${r}`}
              </button>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            {t.textLabel}
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            placeholder={t.placeholder}
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
              <span>{t.generatingBtn}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>{t.generateBtn}</span>
            </>
          )}
        </button>

        {/* Audio Player & Export Result */}
        {audioUrl && (
          <div className="mt-6 p-5 rounded-xl bg-slate-950 border border-cyan-500/30 animate-fade-in space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Volume2 className="w-5 h-5 animate-bounce" />
                <span>{t.resultTitle}</span>
              </div>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                {t.mp3Badge}
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
                <span>{t.downloadBtn}</span>
              </a>

              <button
                onClick={handleShareWhatsApp}
                className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{t.whatsappBtn}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
