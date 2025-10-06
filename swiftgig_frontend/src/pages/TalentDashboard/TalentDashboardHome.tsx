import React, { useState } from 'react';
import { Briefcase, BarChart3, User, Wallet, ArrowUpRight, Bell, Settings, LogOut } from 'lucide-react';

export default function DashboardHome() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#] to-[#7a2e94] p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome, User</h1>
            <p className="text-gray-200">Your personal gig management dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#622578] font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              U
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6 hover:border-[#622578] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#622578] rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">This month</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Active Gigs</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6 hover:border-[#622578] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#622578] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">All time</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Total Polls</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6 hover:border-[#622578] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#622578] rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-400">This week</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Profile Views</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wallet Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#] to-[#7a2e94] rounded-xl p-6 text-white relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Total Balance</p>
                    <h2 className="text-3xl font-bold">₦0.00</h2>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/60">Wallet ID</p>
                  <p className="text-sm font-mono">****1234</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-xs text-white/70 mb-1">Pending</p>
                  <p className="text-xl font-semibold">₦0.00</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-xs text-white/70 mb-1">Completed</p>
                  <p className="text-xl font-semibold">₦0.00</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="flex-1 bg-white text-[#622578] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                  <span>Withdraw</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Credit Score Section */}
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#622578] to-[#7a2e94] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Credit Score</h3>
            </div>

            {/* Score Display */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    strokeDasharray="314"
                    strokeDashoffset="78.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#622578" />
                      <stop offset="100%" stopColor="#7a2e94" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-3xl font-bold text-white">750</p>
                  <p className="text-xs text-gray-400">Good</p>
                </div>
              </div>
            </div>

            {/* Score Range Indicator */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">300</span>
                <span className="text-gray-500">850</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#622578] to-[#7a2e94] rounded-full"></div>
              </div>
            </div>

            {/* Score Factors */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Gig Completion</span>
                <span className="text-sm text-white font-semibold">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Payment History</span>
                <span className="text-sm text-white font-semibold">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Profile Quality</span>
                <span className="text-sm text-white font-semibold">80%</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#622578] to-[#7a2e94] hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-opacity">
              Improve Score
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-400">No recent activity</p>
            <p className="text-sm text-gray-500 mt-2">Your gig activities will appear here</p>
          </div>
        </div>
      </div>

      {/* Profile Dropdown Modal */}
      {isProfileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsProfileMenuOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed top-20 right-8 w-64 bg-[#2a2a2a] rounded-xl shadow-2xl z-50 border border-gray-700">
            {/* User Info Section */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#622578] flex items-center justify-center text-white font-semibold">
                    U
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#622578] rounded-full flex items-center justify-center border-2 border-[#2a2a2a]">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">User</p>
                  <p className="text-gray-400 text-xs">Client Account</p>
                </div>
              </div>
              
              {/* Talent Badge */} 
              <div className="bg-[#622578] rounded-lg px-3 py-2 text-center">
                <p className="text-white text-xs font-semibold">Talent Status: Active</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button 
                onClick={() => {
                  setIsProfileMenuOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-gray-700 transition-colors flex items-center space-x-3"
              >
                <User className="w-4 h-4" />
                <span>Your client profile</span>
              </button>

              <button 
                onClick={() => {
                  setIsProfileMenuOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-gray-700 transition-colors flex items-center space-x-3"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>

              <button 
                onClick={() => {
                  setIsProfileMenuOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-gray-700 transition-colors flex items-center space-x-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Get desktop app</span>
              </button>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-700 p-2">
              <button 
                onClick={() => {
                  setIsProfileMenuOpen(false);
                  console.log('Logging out...');
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-red-400 hover:bg-gray-700 transition-colors flex items-center space-x-3"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}