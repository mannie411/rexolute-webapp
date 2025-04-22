// app/page.js
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskTabs from "../components/TaskTabs";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6">
        <Header />
        
        {/* Main Content Area */}
        <div className="space-y-8">
          {/* Pending Tasks Section with Tabs */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Pending Tasks</h2>
              <span className="text-sm text-gray-500">13 tasks needing attention</span>
            </div>
            <TaskTabs />
          </section>

          {/* You can add other sections below as needed */}
        </div>
      </div>
    </div>
  );
}