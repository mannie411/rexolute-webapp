// components/TaskTabs.js
'use client';
import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiCalendar, FiEdit2 } from 'react-icons/fi';

export default function TaskTabs() {
  const [activeTab, setActiveTab] = useState('reassigned');

  const tabs = [
    { id: 'reassigned', label: 'Reassigned sessions', count: 2 },
    { id: 'profile', label: 'Profile set-up', count: 10 },
    { id: 'registration', label: 'Student registration', count: 1 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#EAECF0] p-6">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium relative ${activeTab === tab.id ? 'text-[#027A48]' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label} ({tab.count})
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#027A48]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-4">
        {activeTab === 'reassigned' && <ReassignedSessions />}
        {activeTab === 'profile' && <ProfileSetup />}
        {activeTab === 'registration' && <StudentRegistration />}
      </div>
    </div>
  );
}

// Reassigned Sessions Tab Content
function ReassignedSessions() {
  const sessions = [
    {
      id: 1,
      therapist: 'Rita Dusee',
      date: 'Wed, 16th May, 2024',
      time: '09:00AM - 09:30AM',
      student: 'John Samuel Tara',
      status: 'Pending Approval'
    },
    {
      id: 2,
      therapist: 'Grace Wellington',
      date: 'Wed, 16th May, 2024',
      time: '10:00AM - 10:45AM',
      student: 'Swebe Duke',
      status: 'Pending Approval'
    }
  ];

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div key={session.id} className="p-4 border border-[#EAECF0] rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Session with {session.therapist}</h3>
              <p className="text-sm text-gray-500 mt-1">{session.student}</p>
            </div>
            <span className="text-sm text-gray-500">{session.date}</span>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm font-medium">{session.time}</span>
            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              {session.status}
            </span>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="text-sm px-3 py-1 bg-[#027A48] text-white rounded hover:bg-[#05603A]">
              Approve
            </button>
            <button className="text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              Reschedule
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Profile Setup Tab Content
function ProfileSetup() {
  const pendingItems = [
    { id: 'QB0241', email: 'Quotientspecialist@gmail.com', date: 'Wed, 16th May, 2024', action: 'Review' },
    { id: 'QB0242', email: 'Therapist2@example.com', date: 'Thu, 17th May, 2024', action: 'Review' }
  ];

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium">ID</th>
              <th className="text-left py-3 px-4 font-medium">Email</th>
              <th className="text-left py-3 px-4 font-medium">Date</th>
              <th className="text-left py-3 px-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{item.id}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4">
                  <button className="flex items-center gap-1 text-[#027A48] text-sm font-medium">
                    <FiEdit2 size={14} />
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Student Registration Tab Content
function StudentRegistration() {
  return (
    <div className="p-4 border border-[#EAECF0] rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">New Student Application</h3>
          <p className="text-sm text-gray-500 mt-1">Wed, 16th May, 2024</p>
        </div>
        <button className="text-[#027A48] text-sm font-medium hover:underline">
          Review Application
        </button>
      </div>
    </div>
  );
}