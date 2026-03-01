// frontend/src/App.jsx
// 
import React, { useState } from 'react';
import { useOceanSound } from './hooks/useOceanSound';
import Mailbox from './components/features/Mailbox';
import FirstAid from './components/features/FirstAid';
import { INITIAL_LETTERS } from './data/constants';

export default function App() {
  const { isPlaying, toggleSound } = useOceanSound();
  const [showMail, setShowMail] = useState(false);
  const [showAid, setShowAid] = useState(false);

  return (
    <div className="p-10 min-h-screen bg-gray-200 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl font-bold">第三階段驗收：功能模組</h1>

      <button onClick={toggleSound} className="px-4 py-2 bg-blue-500 text-white rounded">
        {isPlaying ? '停止海浪聲' : '播放海浪聲'}
      </button>

      <button onClick={() => setShowMail(true)} className="px-4 py-2 bg-yellow-600 text-white rounded">
        打開信箱
      </button>

      <button onClick={() => setShowAid(true)} className="px-4 py-2 bg-red-500 text-white rounded">
        打開急救中心
      </button>

      {/* 彈窗組件放在這裡 */}
      <Mailbox
        isOpen={showMail}
        onClose={() => setShowMail(false)}
        letters={INITIAL_LETTERS}
        onSelectLetter={(l) => alert(l.title)}
      />

      <FirstAid
        isOpen={showAid}
        onClose={() => setShowAid(false)}
        userName="測試者"
        beanName="豆豆"
      />
    </div>
  );
}