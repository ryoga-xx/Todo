'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InputModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (text: string) => void;
}

export function InputModal({ isOpen, onClose, onSubmit }: InputModalProps) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!text.trim()) return;
        onSubmit(text);
        setText('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop with Deep Blur and Darkening as requested */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Content - Anti-Gravity Design */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{
                            type: 'spring',
                            damping: 20,
                            stiffness: 300,
                            mass: 1,
                        }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur-xl"
                    >
                        {/* Inner Container for structure */}
                        <div className="relative flex flex-col gap-6 overflow-hidden rounded-[2.2rem] bg-black/20 p-8 shadow-inner">

                            {/* Decorative ambient gradients */}
                            <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]" />
                            <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />

                            {/* Header */}
                            <div className="relative z-10 flex items-center justify-between">
                                <h2 className="text-xl font-bold tracking-wider text-white">
                                    新しい知見を記録する
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="group rounded-full bg-white/5 p-2 transition-all hover:bg-white/10 hover:rotate-90"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Text Area */}
                            <div className="relative z-10">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="ここに学びやメモを入力してください（例：ジョーマローンの調香レシピ、Dラボの学習内容、簿記の仕訳ルールなど）"
                                    className="min-h-[200px] w-full resize-none rounded-xl border border-white/10 bg-black/20 p-5 text-base leading-relaxed text-white placeholder-white/40 outline-none transition-all focus:border-purple-500/50 focus:bg-black/30 focus:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                                    autoFocus
                                />
                            </div>

                            {/* Footer / Buttons */}
                            <div className="relative z-10 flex items-center justify-end gap-4 pt-2">
                                <button
                                    onClick={onClose}
                                    className="rounded-full px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    キャンセル
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!text.trim()}
                                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-purple-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span>✨</span> AIで要約して追加
                                    </span>
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
