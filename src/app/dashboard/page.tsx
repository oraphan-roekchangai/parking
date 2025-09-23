"use client";

import { useState } from "react";

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState("Day");
  // Ticks for DAY chart X-axis (hours)
  const dayXTicks = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  // DAY chart scale and data to align points with X-axis labels
  const yTop = 30;        // top bound of plot area
  const yBottom = 150;    // bottom bound of plot area
  const yMax = 160;       // Y-axis max value (0-160)

  // 24 hourly values (matching each hour label exactly) - range 0-160
  const dayData = [
    80, 76, 70, 64, 60, 56, 60, 72,
    88, 100, 112, 120, 130, 126, 122, 116,
    110, 100, 96, 92, 88, 86, 84, 82
  ];

  const dayPoints = dayData
    .map((v, h) => {
      const x = 30 + h * 37; // same spacing as X-axis labels
      const y = yBottom - (v / yMax) * (yBottom - yTop);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="min-h-screen bg-green-50">
      {/* Left edge arrow button */}
      <button
        aria-label="Open sidebar"
        className="fixed left-1 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-300 rounded-r-full shadow px-2 py-3 text-gray-600 hover:bg-gray-50"
        type="button"
      >
        &gt;
      </button>
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-3 border-b">
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-150 pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Right side - Notifications, Language, User */}
          <div className="flex items-center space-x-4">
            {/* Notification Icons */}
            <div className="flex items-center space-x-3">
              {/* Red notification */}
              <div className="relative">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">3</span>
              </div>

              {/* Blue notification */}
              <div className="relative">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 9h4v6h6v-6h4l-7-7z" />
                  </svg>
                </div>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">1</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🇬🇧</span>
              </div>
              <span className="text-gray-700">English</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              <div className="text-sm">
                <div className="text-gray-900 font-medium">Orphan Roekchangai</div>
                <div className="text-gray-500">Admin</div>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar - Parking Status Cards */}
        <div className="w-96 p-6 space-y-4">
          {/* 1st Floor VIP */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">1st Floor</h3>
                <p className="text-gray-600 text-lg">(VIP)</p>
                <p className="text-3xl font-bold mt-2 text-gray-800">10/20</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform " viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-500"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="50, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 1st Floor Member */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">1st Floor</h3>
                <p className="text-gray-600 text-lg">(member)</p>
                <p className="text-3xl font-bold mt-2 text-gray-800">10/20</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform " viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 2nd Floor */}
          <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">2nd Floor</h3>
                <p className="text-3xl font-bold mt-4 text-gray-800">20/40</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform " viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 3rd Floor */}
          <div className="bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">3rd Floor</h3>
                <p className="text-3xl font-bold mt-4 text-gray-800">20/40</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform " viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 4th Floor */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">4th Floor</h3>
                <p className="text-3xl font-bold mt-4 text-white">20/40</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform " viewBox="0 0 36 36">
                  <path
                    className="text-blue-300"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-400"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

  {/* Right Content Area - Charts */}
        <div className="flex-1 p-6">
          {/* Charts - Vertical Stack */}
          <div className="space-y-4">
            {/* Daily Chart (Line Chart) */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm">
              {/* Corner pill label */}
              <div className="absolute top-2 right-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 shadow-sm">
                Day
              </div>
              <div className="h-64 relative">
                <svg className="w-full h-full" viewBox="0 0 900 200" >
                 
                  
                  {/* Y-axis labels */}
                  {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180].map((v) => {
                    const y = yBottom - (v / yMax) * ((yBottom - yTop)+25);
                    return (
                      <text key={v} x="25" y={y + 5} textAnchor="end" className="text-xs fill-gray-400">
                        {v}
                      </text>
                    );
                  })}
                  
                  {/* Line chart */}
                  <polyline
                    fill="none"
                    stroke="#123befff"
                    strokeWidth="2"
                    points={dayPoints}
                  />
                  
                  {/* Data points - aligned with X-axis labels */}
                  {dayData.map((v, h) => {
                    const x = 30 + h * 37; // same spacing as X-axis labels
                    const y = yBottom - (v / yMax) * (yBottom - yTop);
                    return <circle key={h} cx={x} cy={y} r="3" fill="#123befff" />;
                  })}
                  
                  {/* X-axis labels (centered, non-overlapping) */}
                  {dayXTicks.map((h) => {

                    
                    const x = 30 + h * 37; // plot distance between point x-lable
                    const label = h === 23 ? "23:00" : `${h}:00`;
                    return (
                      <text key={h} x={x} y="170" textAnchor="middle" className="text-[12px] fill-gray-400" >
                        {label}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Monthly Bar Chart */}
            <div className="relative bg-white rounded-xl p-4 shadow-sm">
              {/* Corner pill label */}
              <div className="absolute top-2 right-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 shadow-sm">
                MONTH
              </div>
              <div className="h-48 flex items-end justify-between space-x-1">
                {[
                  { height: 60, label: "Jan" },
                  { height: 80, label: "Feb" },
                  { height: 70, label: "Mar" },
                  { height: 90, label: "Apr" },
                  { height: 100, label: "May" },
                  { height: 85, label: "Jun" },
                  { height: 95, label: "Jul" },
                  { height: 75, label: "Aug" },
                  { height: 65, label: "Sep" },
                  { height: 55, label: "Oct" },
                  { height: 45, label: "Nov" },
                  { height: 50, label: "Dec" }
                ].map((bar, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-teal-600 rounded-t-sm" 
                      style={{ height: `${bar.height}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1 transform origin-bottom-left">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yearly Bar Chart */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">YEAR</h3>
              </div>
              {/* Corner pill label */}
              <div className="absolute top-2 right-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 shadow-sm">
                YEAR
              </div>
              <div className="h-48 flex items-end justify-between space-x-1">
                {[
                  { height: 40, label: "2019" },
                  { height: 50, label: "2020" },
                  { height: 45, label: "2021" },
                  { height: 70, label: "2022" },
                  { height: 35, label: "2023" },
                  { height: 40, label: "2024" },
                  { height: 55, label: "2025" },
                  { height: 65, label: "2026" },
                  { height: 60, label: "2027" },
                  { height: 30, label: "2028" },
                  { height: 80, label: "2029" }
                ].map((bar, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-teal-600 rounded-t-sm" 
                      style={{ height: `${bar.height}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1 transform rotate-45 origin-bottom-left">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}