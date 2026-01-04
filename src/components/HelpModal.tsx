
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { CloseIcon, MagicWandIcon, DownloadIcon, BrushIcon, DiceIcon, FolderOpenIcon } from './Icons';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'START' | 'CONFIG' | 'EDIT' | 'EXPORT'>('START');
    const { t } = useLanguage();

    if (!isOpen) return null;

    const TabButton = ({ id, icon, label }: { id: any, icon: string, label: string }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all font-bold text-sm w-full md:w-auto
            ${activeTab === id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    );

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col relative" onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                            📚 {t('helpTitle')}
                        </h2>
                        <p className="text-sm text-gray-400 font-medium">{t('helpSubtitle')}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600">
                        <CloseIcon />
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-6 py-2 bg-white border-b border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
                    <TabButton id="START" icon="🚀" label={t('helpTabStart')} />
                    <TabButton id="CONFIG" icon="📝" label={t('helpTabConfig')} />
                    <TabButton id="EDIT" icon="🎨" label={t('helpTabEdit')} />
                    <TabButton id="EXPORT" icon="📦" label={t('helpTabExport')} />
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto bg-gray-50/50 leading-relaxed text-gray-600 space-y-8 h-full">

                    {activeTab === 'START' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">{t('helpStartTitle')}</h3>
                                <p className="text-sm text-indigo-700">
                                    {t('helpStartContent')}
                                </p>
                            </div>

                            {/* Product Types Explanation */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 flex gap-3 items-center shadow-sm">
                                    <div className="text-2xl bg-indigo-50 p-2 rounded-lg">🖼️</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{t('helpStickerType')}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{t('helpStickerTypeDesc')}</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-pink-200 flex gap-3 items-center shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">{t('helpNewBadge')}</div>
                                    <div className="text-2xl bg-pink-50 p-2 rounded-lg">😊</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{t('helpEmojiType')}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{t('helpEmojiTypeDesc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* 創造新角色 */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg">
                                        <span className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg text-xl">✨</span> {t('helpCreateNew')}
                                    </h4>
                                    <ul className="space-y-4 text-sm text-gray-600">
                                        <li>
                                            <strong className="text-gray-900 block mb-1">📸 {t('helpPhotoToIP')}</strong>
                                            {t('helpPhotoToIPDesc')}
                                        </li>
                                        <li>
                                            <strong className="text-gray-900 block mb-1">📝 {t('helpTextToIP')}</strong>
                                            {t('helpTextToIPDesc')}
                                        </li>
                                    </ul>
                                </div>

                                {/* 延伸舊角色 */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg">
                                        <span className="bg-purple-100 text-purple-600 p-1.5 rounded-lg text-xl">🖼️</span> {t('helpExtendIP')}
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {t('helpExtendIPDesc')}
                                    </p>
                                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                        <li>{t('helpExtendIPList1')}</li>
                                        <li>{t('helpExtendIPList2')}</li>
                                        <li>{t('helpExtendIPList3')}</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 純工具模式 */}
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 relative overflow-hidden">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="bg-white p-3 rounded-xl shadow-sm text-3xl">📂</div>
                                    <div>
                                        <h4 className="font-bold text-amber-900 text-lg mb-2">{t('helpUtilityTitle')}</h4>
                                        <p className="text-sm text-amber-800 mb-3">
                                            {t('helpUtilityDesc')}
                                        </p>
                                        <ol className="list-decimal list-inside text-sm text-amber-700 space-y-1 bg-white/50 p-3 rounded-lg">
                                            <li>{t('helpUtilityList1')}</li>
                                            <li>{t('helpUtilityList2')}</li>
                                            <li>{t('helpUtilityList3')}</li>
                                            <li>{t('helpUtilityList4')}</li>
                                        </ol>
                                        <div className="mt-4 pt-4 border-t border-amber-200/50 text-amber-900 text-xs">
                                            <strong>🎉 {t('helpNewBadge')}: </strong> {t('artStyle_ghibli')}...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'CONFIG' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6">
                                <h3 className="font-bold text-amber-900 text-lg mb-2">{t('helpConfigTitle')}</h3>
                                <p className="text-sm text-amber-800 mb-4">
                                    {t('helpConfigDesc')}
                                </p>
                                <div className="bg-white/80 p-4 rounded-xl border border-amber-200 text-xs font-mono text-gray-600">
                                    <strong>Example:</strong><br />
                                    1. Hi (Happy)<br />
                                    2. Thanks (Bow)<br />
                                    3. OK (Gesture)<br />
                                    4. LOL (Laughing)<br />
                                    5. Good job (Tea)
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">{t('helpPromptGenTitle')} <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full ml-2">HOT</span></h3>
                                <p className="text-sm text-indigo-800 mb-4">
                                    {t('helpPromptGenDesc')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-gray-800 text-lg">{t('helpSpecTitle')}</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex gap-3">
                                        <span className="font-bold min-w-[80px]">{t('helpSpecType')}</span>
                                        <span>
                                            {t('helpSpecTypeDesc')}
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold min-w-[80px]">{t('helpSpecQty')}</span>
                                        <span>{t('helpSpecQtyDesc')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'EDIT' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                                <h3 className="font-bold text-purple-900 text-lg mb-2 flex items-center gap-2"><MagicWandIcon /> {t('helpEditTitle')}</h3>
                                <p className="text-sm text-purple-800 mb-4">
                                    {t('helpEditDesc')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div className="bg-white p-3 rounded-xl border border-purple-100">
                                        <strong className="block mb-1 text-purple-700">{t('helpEditStep1')}</strong>
                                        {t('helpEditStep1Desc')}
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-purple-100">
                                        <strong className="block mb-1 text-purple-700">{t('helpEditStep2')}</strong>
                                        {t('helpEditStep2Desc')}
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-purple-100">
                                        <strong className="block mb-1 text-purple-700">{t('helpEditStep3')}</strong>
                                        {t('helpEditStep3Desc')}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                                <h3 className="font-bold text-emerald-900 text-lg mb-2 flex items-center gap-2">{t('helpSliceTitle')}</h3>
                                <p className="text-sm text-emerald-800">
                                    {t('helpSliceDesc')}
                                </p>
                                <ul className="list-disc list-inside mt-3 text-sm text-emerald-700 space-y-1">
                                    <li>{t('helpSliceList1')}</li>
                                    <li>{t('helpSliceList2')}</li>
                                    <li>{t('helpSliceList3')}</li>
                                    <li>{t('helpSliceList4')}</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'EXPORT' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="space-y-4">
                                <h4 className="font-bold text-gray-800 text-lg">{t('helpExportTitle')}</h4>
                                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50 text-gray-500 font-bold border-b border-gray-200">
                                            <tr>
                                                <th className="p-4">{t('helpExportTableFile')}</th>
                                                <th className="p-4">{t('helpExportTableDesc')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-4 font-mono text-indigo-600">01.png ~ 40.png</td>
                                                <td className="p-4">
                                                    <div className="mb-1"><span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded font-bold mr-2">{t('helpExportSticker')}</span> W370 x H320</div>
                                                    <div><span className="bg-pink-100 text-pink-700 text-xs px-2 py-0.5 rounded font-bold mr-2">{t('helpExportEmoji')}</span> W180 x H180</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-mono text-indigo-600">main.png</td>
                                                <td className="p-4">{t('helpExportMain')}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-mono text-indigo-600">tab.png</td>
                                                <td className="p-4">{t('helpExportTab')}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-mono text-indigo-600">info.txt</td>
                                                <td className="p-4">{t('helpExportInfo')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-6">
                                <h4 className="font-bold text-gray-800 mb-2">{t('helpTroubleTitle')}</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>
                                        <strong>{t('helpTroubleQ1')}</strong><br />
                                        {t('helpTroubleA1')}
                                    </li>
                                    <li>
                                        <strong>{t('helpTroubleQ2')}</strong><br />
                                        {t('helpTroubleA2')}
                                    </li>
                                    <li>
                                        <strong>{t('helpTroubleQ3')}</strong><br />
                                        {t('helpTroubleA3')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 flex justify-end bg-white">
                    <button onClick={onClose} className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all">
                        {t('helpConfirm')}
                    </button>
                </div>
            </div>
        </div>
    );
};
