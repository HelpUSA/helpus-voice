import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Presets } from './components/Presets';
import { VoiceStudio } from './components/VoiceStudio';
import { ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { translations, type Language } from './i18n/translations';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [selectedText, setSelectedText] = useState('');

  // Sync language with localStorage and URL query params (?lang=pt | en | es)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    const savedLang = localStorage.getItem('helpus_lang') as Language;

    if (urlLang && ['pt', 'en', 'es'].includes(urlLang)) {
      setLang(urlLang);
    } else if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('helpus_lang', newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url.toString());
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header lang={lang} onLanguageChange={changeLanguage} t={t.nav} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.hero.titleStart}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.hero.titleGradient}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.hero.description}
          </p>
        </div>

        {/* Quick Presets */}
        <Presets t={t.presets} onSelectPreset={(text) => setSelectedText(text)} />

        {/* Voice Studio App */}
        <VoiceStudio t={t.studio} initialText={selectedText} />

        {/* Features / Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-900">
          <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-200">{t.features.fastTitle}</h4>
              <p className="text-xs text-slate-400 mt-1">{t.features.fastDesc}</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-200">{t.features.whatsappTitle}</h4>
              <p className="text-xs text-slate-400 mt-1">{t.features.whatsappDesc}</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-200">{t.features.saasTitle}</h4>
              <p className="text-xs text-slate-400 mt-1">{t.features.saasDesc}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        {t.footer.rights} {t.footer.configuredSubdomain}: <span className="text-slate-400 font-semibold">voz.helpusbr.com</span>
      </footer>
    </div>
  );
};

export default App;
