'use client';

import { useState } from 'react';

export default function UserManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ข้อมูลผู้ใช้ตัวอย่าง
  const users = [
    { fullName: 'David sandwich', email: 'da.vids@gmail.com', licensePlate: 'กย 2531', joinDate: '30/01/2025', status: 'regular' },
    { fullName: 'Tuna Salmon', email: 'tuna.sal@gmail.com', licensePlate: 'กก 2532', joinDate: '30/01/2025', status: 'regular' },
    { fullName: 'Takoyaki sushi', email: 'tako@gmail.com', licensePlate: 'กจ 2533', joinDate: '30/01/2025', status: 'VIP' },
    { fullName: 'Somchai srisun', email: 'somchai@gmail.com', licensePlate: 'บย 2534', joinDate: '30/01/2025', status: 'regular' },
    { fullName: 'Mun Boondee', email: 'mun.boon@gmail.com', licensePlate: 'บบ 2535', joinDate: '30/01/2025', status: 'VIP' },
    { fullName: 'Muay Somjai', email: 'muay.som@gmail.com', licensePlate: 'วย 2536', joinDate: '30/01/2025', status: 'regular' },
    { fullName: 'Taki Subasa', email: 'taki.suba@gmail.com', licensePlate: 'กย 2537', joinDate: '30/01/2025', status: 'regular' },
    { fullName: 'Mitsu Bishi', email: 'mitsu@gmail.com', licensePlate: 'กย 2538', joinDate: '30/01/2025', status: 'VIP' },
    { fullName: 'Kaewjai Srisai', email: 'kaewjai@gmail.com', licensePlate: 'หย 2539', joinDate: '30/01/2025', status: 'VIP' },
    { fullName: 'Supa Sapu', email: 'supa.pasu@gmail.com', licensePlate: 'กห 2540', joinDate: '30/01/2025', status: 'regular' },
    { fullName: 'Niran Somkid', email: 'niran.som@gmail.com', licensePlate: 'จจ 2541', joinDate: '15/02/2025', status: 'regular' },
    { fullName: 'Manee Jaidee', email: 'manee.jai@gmail.com', licensePlate: 'ฉฉ 2542', joinDate: '20/02/2025', status: 'VIP' },
    { fullName: 'Sutin Raksa', email: 'sutin.rak@gmail.com', licensePlate: 'ชช 2543', joinDate: '25/02/2025', status: 'regular' },
    { fullName: 'Pranee Suksai', email: 'pranee.suk@gmail.com', licensePlate: 'ซซ 2544', joinDate: '01/03/2025', status: 'VIP' },
    { fullName: 'Wichai Thongchai', email: 'wichai.thong@gmail.com', licensePlate: 'ฌฌ 2545', joinDate: '05/03/2025', status: 'regular' },
    { fullName: 'Suphatra Maleewan', email: 'suphatra.mal@gmail.com', licensePlate: 'ญญ 2546', joinDate: '10/03/2025', status: 'VIP' },
    { fullName: 'Kampon Siriporn', email: 'kampon.siri@gmail.com', licensePlate: 'ฎฎ 2547', joinDate: '15/03/2025', status: 'regular' },
    { fullName: 'Siriporn Kamala', email: 'siriporn.kam@gmail.com', licensePlate: 'ฏฏ 2548', joinDate: '20/03/2025', status: 'VIP' },
    { fullName: 'Thanawat Somboon', email: 'thanawat.som@gmail.com', licensePlate: 'ฐฐ 2549', joinDate: '25/03/2025', status: 'regular' },
    { fullName: 'Benjawan Pimchan', email: 'benjawan.pim@gmail.com', licensePlate: 'ฑฑ 2550', joinDate: '30/03/2025', status: 'VIP' },
    { fullName: 'Apirak Thanakit', email: 'apirak.than@gmail.com', licensePlate: 'ฒฒ 2551', joinDate: '05/04/2025', status: 'regular' },
    { fullName: 'Pimphan Ratana', email: 'pimphan.rat@gmail.com', licensePlate: 'ณณ 2552', joinDate: '10/04/2025', status: 'VIP' },
    { fullName: 'Udom Thepwong', email: 'udom.thep@gmail.com', licensePlate: 'ดด 2553', joinDate: '15/04/2025', status: 'regular' },
    { fullName: 'Wantana Suksan', email: 'wantana.suk@gmail.com', licensePlate: 'ตต 2554', joinDate: '20/04/2025', status: 'VIP' },
    { fullName: 'Yutthana Phongsri', email: 'yutthana.phong@gmail.com', licensePlate: 'ถถ 2555', joinDate: '25/04/2025', status: 'regular' },
    { fullName: 'Chaiwat Bunmee', email: 'chaiwat.bun@gmail.com', licensePlate: 'ทท 2556', joinDate: '30/04/2025', status: 'VIP' },
    { fullName: 'Ornuma Thaisong', email: 'ornuma.thai@gmail.com', licensePlate: 'ธธ 2557', joinDate: '05/05/2025', status: 'regular' },
    { fullName: 'Pattana Wongsiri', email: 'pattana.wong@gmail.com', licensePlate: 'นน 2558', joinDate: '10/05/2025', status: 'VIP' },
    { fullName: 'Supaporn Jittra', email: 'supaporn.jit@gmail.com', licensePlate: 'บบ 2559', joinDate: '15/05/2025', status: 'regular' },
    { fullName: 'Thanapon Sirikul', email: 'thanapon.siri@gmail.com', licensePlate: 'ปป 2560', joinDate: '20/05/2025', status: 'VIP' },
    { fullName: 'Wipob Charoen', email: 'wipob.char@gmail.com', licensePlate: 'ผผ 2561', joinDate: '25/05/2025', status: 'regular' },
    { fullName: 'Sumitra Phakdee', email: 'sumitra.phak@gmail.com', licensePlate: 'ฝฝ 2562', joinDate: '30/05/2025', status: 'VIP' },
    { fullName: 'Boontham Srisawat', email: 'boontham.sri@gmail.com', licensePlate: 'พพ 2563', joinDate: '05/06/2025', status: 'regular' },
    { fullName: 'Chanida Thongsuk', email: 'chanida.thong@gmail.com', licensePlate: 'ฟฟ 2564', joinDate: '10/06/2025', status: 'VIP' },
    { fullName: 'Kamon Sukjai', email: 'kamon.suk@gmail.com', licensePlate: 'ภภ 2565', joinDate: '15/06/2025', status: 'regular' },
    { fullName: 'Nichapa Wongwan', email: 'nichapa.wong@gmail.com', licensePlate: 'มม 2566', joinDate: '20/06/2025', status: 'VIP' },
    { fullName: 'Suriya Makmee', email: 'suriya.mak@gmail.com', licensePlate: 'ยย 2567', joinDate: '25/06/2025', status: 'regular' },
    { fullName: 'Piyaporn Rattana', email: 'piyaporn.rat@gmail.com', licensePlate: 'รร 2568', joinDate: '30/06/2025', status: 'VIP' },
    { fullName: 'Wirat Thipwan', email: 'wirat.thip@gmail.com', licensePlate: 'ลล 2569', joinDate: '05/07/2025', status: 'regular' },
    { fullName: 'Anchalee Suksan', email: 'anchalee.suk@gmail.com', licensePlate: 'วว 2570', joinDate: '10/07/2025', status: 'VIP' },
    { fullName: 'Rattana Phongpan', email: 'rattana.phong@gmail.com', licensePlate: 'ศศ 2571', joinDate: '15/07/2025', status: 'regular' },
    { fullName: 'Sombat Leekpai', email: 'sombat.leek@gmail.com', licensePlate: 'ษษ 2572', joinDate: '20/07/2025', status: 'VIP' },
    { fullName: 'Malee Thanakit', email: 'malee.than@gmail.com', licensePlate: 'สส 2573', joinDate: '25/07/2025', status: 'regular' },
    { fullName: 'Noppadol Sirikul', email: 'noppadol.siri@gmail.com', licensePlate: 'หห 2574', joinDate: '30/07/2025', status: 'VIP' },
    { fullName: 'Sutthida Wongwai', email: 'sutthida.wong@gmail.com', licensePlate: 'ฬฬ 2575', joinDate: '05/08/2025', status: 'regular' },
    { fullName: 'Kittipong Jaidee', email: 'kittipong.jai@gmail.com', licensePlate: 'อออ 2576', joinDate: '10/08/2025', status: 'VIP' },
    { fullName: 'Pornpimol Sukjai', email: 'pornpimol.suk@gmail.com', licensePlate: 'ฮฮ 2577', joinDate: '15/08/2025', status: 'regular' },
    { fullName: 'Worawit Thongdee', email: 'worawit.thong@gmail.com', licensePlate: 'กท 2578', joinDate: '20/08/2025', status: 'VIP' },
    { fullName: 'Sirinapa Chaiwat', email: 'sirinapa.chai@gmail.com', licensePlate: 'ขท 2579', joinDate: '25/08/2025', status: 'regular' },
    { fullName: 'Chatchai Boonmee', email: 'chatchai.boon@gmail.com', licensePlate: 'คท 2580', joinDate: '30/08/2025', status: 'VIP' },
    { fullName: 'Rungnapa Suksan', email: 'rungnapa.suk@gmail.com', licensePlate: 'งท 2581', joinDate: '05/09/2025', status: 'regular' },
    { fullName: 'Suthep Phongsri', email: 'suthep.phong@gmail.com', licensePlate: 'จท 2582', joinDate: '10/09/2025', status: 'VIP' },
    { fullName: 'Pimsiri Wongsiri', email: 'pimsiri.wong@gmail.com', licensePlate: 'ฉท 2583', joinDate: '15/09/2025', status: 'regular' },
    { fullName: 'Monthon Thepwong', email: 'monthon.thep@gmail.com', licensePlate: 'ชท 2584', joinDate: '20/09/2025', status: 'VIP' },
    { fullName: 'Apinya Maleewan', email: 'apinya.mal@gmail.com', licensePlate: 'ซท 2585', joinDate: '25/09/2025', status: 'regular' },
    { fullName: 'Kraisorn Siriporn', email: 'kraisorn.siri@gmail.com', licensePlate: 'ฌท 2586', joinDate: '30/09/2025', status: 'VIP' },
    { fullName: 'Nongluck Kamala', email: 'nongluck.kam@gmail.com', licensePlate: 'ญท 2587', joinDate: '01/10/2025', status: 'regular' },
    { fullName: 'Prasert Somboon', email: 'prasert.som@gmail.com', licensePlate: 'ฎท 2588', joinDate: '05/10/2025', status: 'VIP' },
    { fullName: 'Warunee Pimchan', email: 'warunee.pim@gmail.com', licensePlate: 'ฏท 2589', joinDate: '10/10/2025', status: 'regular' },
    { fullName: 'Thawat Bunmee', email: 'thawat.bun@gmail.com', licensePlate: 'ฐท 2590', joinDate: '15/10/2025', status: 'VIP' },
    { fullName: 'Sumalee Ratana', email: 'sumalee.rat@gmail.com', licensePlate: 'ฑท 2591', joinDate: '20/10/2025', status: 'regular' },
    { fullName: 'Somphong Thanakit', email: 'somphong.than@gmail.com', licensePlate: 'ฒท 2592', joinDate: '25/10/2025', status: 'VIP' },
    { fullName: 'Pranorm Suksan', email: 'pranorm.suk@gmail.com', licensePlate: 'ณท 2593', joinDate: '30/10/2025', status: 'regular' },
    { fullName: 'Somboon Thepwong', email: 'somboon.thep@gmail.com', licensePlate: 'ดท 2594', joinDate: '05/11/2025', status: 'VIP' },
    { fullName: 'Nanthida Sukjai', email: 'nanthida.suk@gmail.com', licensePlate: 'ตท 2595', joinDate: '10/11/2025', status: 'regular' },
    { fullName: 'Withoon Phongsri', email: 'withoon.phong@gmail.com', licensePlate: 'ถท 2596', joinDate: '15/11/2025', status: 'VIP' },
    { fullName: 'Suwanna Wongsiri', email: 'suwanna.wong@gmail.com', licensePlate: 'ทท 2597', joinDate: '20/11/2025', status: 'regular' },
    { fullName: 'Chusak Thaisong', email: 'chusak.thai@gmail.com', licensePlate: 'ธท 2598', joinDate: '25/11/2025', status: 'VIP' },
    { fullName: 'Jariya Jittra', email: 'jariya.jit@gmail.com', licensePlate: 'นท 2599', joinDate: '30/11/2025', status: 'regular' },
    { fullName: 'Phanit Sirikul', email: 'phanit.siri@gmail.com', licensePlate: 'บท 2600', joinDate: '05/12/2025', status: 'VIP' },
    { fullName: 'Somsak Charoen', email: 'somsak.char@gmail.com', licensePlate: 'ปท 2601', joinDate: '10/12/2025', status: 'regular' },
    { fullName: 'Niran Phakdee', email: 'niran.phak@gmail.com', licensePlate: 'ผท 2602', joinDate: '15/12/2025', status: 'VIP' },
    { fullName: 'Duangjai Srisawat', email: 'duangjai.sri@gmail.com', licensePlate: 'ฝท 2603', joinDate: '20/12/2025', status: 'regular' },
    { fullName: 'Chalerm Thongsuk', email: 'chalerm.thong@gmail.com', licensePlate: 'พท 2604', joinDate: '25/12/2025', status: 'VIP' },
    { fullName: 'Sumanas Makmee', email: 'sumanas.mak@gmail.com', licensePlate: 'ฟท 2605', joinDate: '30/12/2025', status: 'regular' },
    { fullName: 'Thitima Rattana', email: 'thitima.rat@gmail.com', licensePlate: 'ภท 2606', joinDate: '01/01/2026', status: 'VIP' },
    { fullName: 'Bancha Thipwan', email: 'bancha.thip@gmail.com', licensePlate: 'มท 2607', joinDate: '05/01/2026', status: 'regular' },
    { fullName: 'Sudarat Wongwan', email: 'sudarat.wong@gmail.com', licensePlate: 'ยท 2608', joinDate: '10/01/2026', status: 'VIP' }
  ];

  return (
    <div className="h-screen bg-green-50 overflow-hidden">
      {/* Sidebar Menu */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Car Parking</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            <a href="/dashboard" className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </a>
            <a href="/user-management" className="flex items-center space-x-3 text-white bg-green-600 p-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>User Management</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Gate controlling</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>License plates</span>
            </a>
          </nav>
          <div className="absolute bottom-6 left-6 right-6">
            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Log out</span>
            </a>
          </div>
        </div>
      </div>

      {/* Left edge arrow button - only show when sidebar is closed */}
      {!sidebarOpen && (
        <button
          aria-label="Open sidebar"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-300 shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center rounded-r-lg px-1 py-6"
          type="button"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main Content */}
      <div className="w-full h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-3 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            {/* Left side - Menu button (mobile) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

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
                  <div className="text-gray-900 font-medium">Oraphan Roekchangai</div>
                  <div className="text-gray-500">Admin</div>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* User Table */}
        <div className="flex-1 p-4 overflow-hidden">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
            <div className="p-3 flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-800">User Management</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 border-r border-gray-300">
                      Full Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 border-r border-gray-300">
                      E-mail Address
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 border-r border-gray-300">
                      License plates
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 border-r border-gray-300">
                      Join
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {users.map((user, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-200">
                        {user.fullName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-200">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-200">
                        {user.licensePlate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-200">
                        {user.joinDate}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 text-sm font-medium rounded ${
                          user.status === 'VIP' 
                            ? 'text-red-800' 
                            : 'text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
