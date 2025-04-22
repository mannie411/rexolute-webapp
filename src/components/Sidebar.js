// components/Sidebar.js
import { FaTasks, FaUserFriends, FaUserMd, FaHandshake, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#F2F4F7] p-5 flex flex-col justify-between fixed">
      <div>
        <div className="flex items-center mb-10">
          <img src="/logo.svg" alt="Rexolute Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-lg text-[#1B1E28]">Rexolute</span>
        </div>

        <nav className="space-y-2 text-sm text-[#4B5563]">
          <div className="bg-[#D1FADF] text-[#027A48] px-4 py-2 rounded flex items-center gap-2 font-medium">
            <FaTasks /> Tasks <span className="ml-auto text-xs bg-white px-2 py-0.5 rounded-full">13</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded hover:bg-[#E5E7EB] cursor-pointer">
            <FaTasks /> Activities
          </div>

          <hr className="my-4 border-gray-300" />

          <SidebarItem icon={<FaChartBar />} label="Dashboard" />
          <SidebarItem icon={<FaUserFriends />} label="Users management" />
          <SidebarItem icon={<FaUserMd />} label="Therapist mgt." />
          <SidebarItem icon={<FaHandshake />} label="Partnership mgt." />
          <SidebarItem icon={<FaCalendarAlt />} label="Session mgt." />
          <SidebarItem icon={<FaChartBar />} label="Report & analytics" />
        </nav>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded hover:bg-[#E5E7EB] cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
