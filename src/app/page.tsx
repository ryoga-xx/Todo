'use client';

import { useState } from 'react';
import { InputModal } from '@/components/InputModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMemo = (text: string) => {
    console.log('New Memo:', text);
    // モックのアラートではなく、実際にはここで処理を行う想定
    setTimeout(() => alert(`✨ メモを追加しました:\n${text}`), 300);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050510] text-white font-sans selection:bg-purple-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[100px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-indigo-900/10 blur-[80px] mix-blend-screen" />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">

        {/* Floating Hero Content */}
        <div className="flex flex-col items-center gap-8 text-center animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full" />
            <h1 className="relative text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent">Anti-Gravity</span>
              <span className="ml-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Brain</span>
            </h1>
          </div>

          <p className="max-w-lg text-lg text-blue-200/50 leading-relaxed">
            重力から解放された、思考のプレイグラウンド。<br />
            AIがあなたのアイデアを整理・要約します。
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative mt-8 rounded-full bg-white/5 px-10 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-white/10"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>🚀</span> メモを作成する
            </span>
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>

        <InputModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddMemo}
        />
      </main>
    </div>
  );
}
