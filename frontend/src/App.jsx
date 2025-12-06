// App.jsx 
// This file sets up a simple React application that displays three character components
import React from 'react';
import CuteBean from './components/visuals/CuteBean';
import NurseBean from './components/visuals/NurseBean';
import CaptainCharacter from './components/visuals/CaptainCharacter';

export default function App() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col gap-10 items-center">
      <h1 className="text-2xl font-bold">displays three character components</h1>
      <div className="flex gap-4 h-40">
        <div className="w-32 h-32 border p-2 bg-white rounded"><CuteBean emotion="happy" /></div>
        <div className="w-32 h-32 border p-2 bg-white rounded"><NurseBean /></div>
        <div className="w-32 h-32 border p-2 bg-white rounded"><CaptainCharacter /></div>
      </div>
    </div>
  );
}