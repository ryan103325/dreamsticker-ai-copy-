import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { loadApiKey } from '../services/storageUtils';
import { MagicWandIcon } from './Icons';

interface LandingPageProps {
    onStart: (key: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    const { language, setLanguage: setSysLang, t } = useLanguage();
    const [key, setKey] = useState("");
    const [showGuide, setShowGuide] = useState(false);

    const toggleLang = () => {
        setSysLang(language === 'zh' ? 'en' : 'zh');
    };

    useEffect(() => {
        const stored = loadApiKey();
        if (stored) setKey(stored);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (key.trim().length > 10) {
            onStart(key.trim());
        } else {
            alert(t('invalidKey'));
        }
    };



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-6 relative overflow-hidden">
            {/* Language Toggle */}
            <button
                onClick={toggleLang}
                className="absolute top-6 right-6 z-50 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full font-bold hover:bg-white/20 transition-all text-sm flex items-center gap-2"
            >
                <span>🌐</span> {language === 'zh' ? 'English' : '繁體中文'}
            </button>

            {/* Background Decorations */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-3xl mb-4 shadow-lg transform rotate-3 hover:rotate-6 transition-transform overflow-hidden backdrop-blur-sm border border-white/20">
                        <img src="./logo.png" alt="DreamSticker AI" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">DreamSticker AI</h1>
                    <p className="text-indigo-200">{t('landingTitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-indigo-200 mb-2">{t('apiKeyLabel')}</label>
                        <input
                            type="password"
                            required
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder={t('apiKeyPlaceholder')}
                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transform transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                    >
                        <span>{t('startBtn')}</span>
                        <MagicWandIcon />
                    </button>
                </form>

                <div className="mt-6 text-center text-xs text-indigo-300 flex flex-col items-center gap-2">
                    <p>{t('noKey')}</p>
                    <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" className="text-amber-300 underline hover:text-amber-100 font-bold text-sm bg-black/30 px-4 py-2 rounded-full border border-amber-500/30 hover:border-amber-400 transition-all">
                        {t('getBillingKey')}
                    </a>

                    <button
                        onClick={() => setShowGuide(!showGuide)}
                        className="mt-2 text-white/50 hover:text-white underline text-[10px] transition-colors flex items-center gap-1"
                    >
                        {t('howToApply')} <span className="text-[8px]">{showGuide ? '▲' : '▼'}</span>
                    </button>

                    {showGuide && (
                        <div className="mt-2 text-left bg-black/40 p-4 rounded-xl border border-white/10 text-indigo-100 space-y-2 w-full text-[11px] leading-relaxed animate-fade-in-up backdrop-blur-md">
                            <h4 className="font-bold text-white mb-2">{t('guideTitle')}</h4>
                            <p>{t('guideStep1')}</p>
                            <p>{t('guideStep2')}</p>
                            <p>{t('guideStep3')}</p>
                            <p className="text-amber-300 font-bold bg-amber-500/10 p-1 rounded border border-amber-500/20">{t('guideStep4')}</p>
                        </div>
                    )}
                </div>
                <div className="mt-4 text-center text-[10px] text-white/40">
                    <p>{t('localSave')}</p>
                </div>
            </div>
        </div>
    );
};
