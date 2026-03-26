import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 h-full bg-slate-900">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Internal Data Hub</h1>
      <p className="text-slate-300 mb-4 font-mono">Trading Floor & Theatre Zone coming soon.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 border border-slate-600 hover:bg-slate-800 text-slate-300 rounded-md transition-colors"
      >
        Exit to Campus
      </button>
    </div>
  );
};

export default Dashboard;