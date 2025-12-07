// frontend/src/App.jsx
// Main application component that sets up the cozy room scene with interactive elements.
import React from 'react';
import CozyRoomScene from './components/layout/CozyRoomScene';
import CuteBean from './components/visuals/CuteBean';

export default function App() {
  return (
    <div className="p-10 bg-[#FDF6E3] min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-xl mb-4 font-bold text-[#5D4037]">sets up the cozy room</h1>
        <CozyRoomScene
          userName="測試船長"
          onWindowClick={() => console.log('點擊窗戶')}
          onBeanClick={() => console.log('點擊豆豆')}
          onCaptainClick={() => console.log('點擊船長')}
        >
          {/* 這裡是 children，豆豆被傳進去坐在房間裡 */}
          <CuteBean emotion="happy" pose="sitting" />
        </CozyRoomScene>
      </div>
    </div>
  );
}