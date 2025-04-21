// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white border-r p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">StockMaster</h1>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-blue-500">Dashboard</Link>
        <Link to="/portfolio" className="block hover:text-blue-500">Portfolio</Link>
        <div>
          <p className="font-semibold text-gray-700">Learning 📘</p>
          <div className="ml-4 space-y-2">
            <Link to="/learning/basics" className="block text-sm hover:text-blue-500">Stock Market Basics</Link>
            <Link to="/learning/portfolio" className="block text-sm hover:text-blue-500">Building a Portfolio</Link>
            <Link to="/learning/analysis" className="block text-sm hover:text-blue-500">Analyzing Stocks</Link>
            <Link to="/learning/trends" className="block text-sm hover:text-blue-500">Market Trends & News</Link>
          </div>
        </div>
        <Link to="/stocks" className="block hover:text-blue-500">Stocks</Link>
        <Link to="/analytics" className="block hover:text-blue-500">Analytics</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
