"use client";

import { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState("Day");

  // Day (Hourly) labels and data
  const dayLabels = useMemo(() => Array.from({ length: 24 }, (_, h) => `${h}:00`), []);
  const dayDataValues = useMemo(
    () => [
      80, 76, 70, 64, 60, 56, 60, 72,
      88, 100, 112, 120, 130, 126, 122, 116,
      110, 100, 96, 92, 88, 86, 84, 82,
    ],
    []
  );

  const lineOptions: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          intersect: false,
          mode: "index",
          backgroundColor: "#111827",
          borderColor: "#1f2937",
          borderWidth: 1,
          titleColor: "#fff",
          bodyColor: "#e5e7eb",
          padding: 10,
          callbacks: {
            label: (ctx) => ` ${ctx.parsed.y}`,
          },
        },
        title: { display: false },
      },
      scales: {
        x: {
          grid: { color: "#e5e7eb" },
          ticks: { color: "#9ca3af", maxRotation: 0, autoSkip: true, maxTicksLimit: 12 },
        },
        y: {
          beginAtZero: true,
          grid: { color: "#f3f4f6" },
          ticks: { color: "#9ca3af" },
          suggestedMax: 160,
        },
      },
      elements: {
        line: { tension: 0.35, borderWidth: 2 },
        point: { radius: 3, hoverRadius: 5, backgroundColor: "#1d4ed8" },
      },
    }),
    []
  );

  const lineData: ChartData<"line"> = useMemo(
    () => ({
      labels: dayLabels,
      datasets: [
        {
          label: "Vehicles",
          data: dayDataValues,
          borderColor: "#123bef",
          fill: true,
          backgroundColor: (ctx) => {
            const { chart } = ctx;
            const { ctx: c, chartArea } = chart as any;
            if (!chartArea) return "rgba(18, 59, 239, 0.08)"; // initial
            const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, "rgba(18, 59, 239, 0.25)");
            gradient.addColorStop(1, "rgba(18, 59, 239, 0.02)");
            return gradient;
          },
        },
      ],
    }),
    [dayLabels, dayDataValues]
  );

  // Month bar chart
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthValues = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400];
  const monthOptions: ChartOptions<"bar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: "#111827", titleColor: "#fff", bodyColor: "#e5e7eb" } },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#6b7280" } },
        y: { grid: { color: "#f3f4f6" }, ticks: { color: "#9ca3af" }, beginAtZero: true },
      },
    }),
    []
  );
  const monthData: ChartData<"bar"> = useMemo(
    () => ({
      labels: monthLabels,
      datasets: [
        {
          label: "Monthly",
          data: monthValues,
          borderRadius: 6,
          backgroundColor: "#0d9488",
        },
      ],
    }),
    []
  );

  // Year bar chart
  const yearLabels = [
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
  ];
  const yearValues = [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000];
  const yearOptions: ChartOptions<"bar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: "#111827", titleColor: "#fff", bodyColor: "#e5e7eb" } },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#6b7280", maxRotation: 45, minRotation: 0 } },
        y: { grid: { color: "#f3f4f6" }, ticks: { color: "#9ca3af" }, beginAtZero: true },
      },
    }),
    []
  );
  const yearData: ChartData<"bar"> = useMemo(
    () => ({
      labels: yearLabels,
      datasets: [
        {
          label: "Yearly",
          data: yearValues,
          borderRadius: 6,
          backgroundColor: "#0d9488",
        },
      ],
    }),
    []
  );

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
          <div className="bg-green-300 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-500">1st Floor</h3>
                <p className="text-gray-500 text-gray-500">(VIP)</p>
                <p className="text-3xl font-bold mt-2 text-gray-500">10/20</p>
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

          {/* 1st Floor Member */}
          <div className="bg-blue-300 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-500">1st Floor</h3>
                <p className="text-gray-500 text-gray-500">(member)</p>
                <p className="text-3xl font-bold mt-2 text-gray-500">10/20</p>
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
          <div className="bg-blue-300 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-500">2nd Floor</h3>
                <p className="text-3xl font-bold mt-4 text-gray-500">20/40</p>
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

          {/* 3rd Floor */}
          <div className="bg-blue-300 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-500">3rd Floor</h3>
                <p className="text-3xl font-bold mt-4 text-gray-500">20/40</p>
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

          {/* 4th Floor */}
          <div className="bg-blue-300 rounded-2xl p-6 relative shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-500">4th Floor</h3>
                <p className="text-3xl font-bold mt-4 text-gray-500">20/40</p>
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
        </div>

  {/* Right Content Area - Charts */}
        <div className="flex-1 p-5">
          {/* Charts - Vertical Stack */}
          <div className="space-y-4">
            {/* Daily Chart (Line Chart with Chart.js) */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 shadow-sm">
                DAY
              </div>
              <div className="h-56">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>

            {/* Monthly Bar Chart (Chart.js) */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 shadow-sm">
                MONTH
              </div>
              <div className="h-56">
                <Bar data={monthData} options={monthOptions} />
              </div>
            </div>

            {/* Yearly Bar Chart (Chart.js) */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 shadow-sm">
                YEAR
              </div>
              <div className="h-56">
                <Bar data={yearData} options={yearOptions} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}