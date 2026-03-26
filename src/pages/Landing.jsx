import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Morgan Stanley Campus</h1>
      <p className="text-slate-400 mb-8 font-mono">3D Physics Engine Offline...</p>
      
      {/* This button simulates driving into the trigger zone */}
      <button
        onClick={() => navigate('/dashboard')}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-[0_0_15px_rgba(37,99,235,0.5)]"
      >
        Enter Building (Test Route)
      </button>
    </div>
  );
};

export default Landing;