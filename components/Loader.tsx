import React from 'react';

interface LoaderProps {
  message?: string;
}

export const Loader: React.FC<LoaderProps> = ({ message = "正在為您夢幻製作貼圖..." }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-white">
      <div className="relative w-24 h-24 mb-4">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-white/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
           <span className="text-2xl">✨</span>
        </div>
      </div>
      <p className="text-xl font-semibold animate-pulse">{message}</p>
    </div>
  );
};