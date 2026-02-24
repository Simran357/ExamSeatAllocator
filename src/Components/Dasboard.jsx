import { CalendarMonth } from '@mui/icons-material'
import React from 'react'
import { PeopleAlt, EventAvailable, ChairAlt, VerticalAlignTop, PendingActions, ReportProblem, AddCircle, UploadFile, ArrowForwardIos, AddTask, FileUpload, Print } from '@mui/icons-material';

export const stats = [
  {
    id: 1,
    title: "Total Students",
    value: "4,250",
    change: "+5.2%",
    trend: "up", // for green/red logic
    icon: <PeopleAlt />,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Active Exams",
    value: "12",
    change: "Stable",
    trend: "neutral",
    icon: <EventAvailable />,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Allocated Seats",
    value: "80%",
    subValue: "1,200 / 1,500",
    change: "-2.4%",
    trend: "down",
    progress: 80, // progress bar ke liye
    icon: <ChairAlt />,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    title: "Pending Requests",
    value: "24",
    change: "+10%",
    trend: "up",
    icon: <PendingActions />,
    iconBg: "bg-green-100 text-green-600",
  },
];
const Dasboard = () => {

  return (
    <>
      <div className="w-full m-4 px-2 ">

        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Examination Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Monitor exams, seating & student activity in real time
            </p>
          </div>

          <div className="flex items-center gap-4 pr-4">
            <div className="hidden md:flex items-center gap-2 text-gray-600 text-sm">
              <CalendarMonth fontSize="small" />
              June 12 – June 16
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg text-sm font-medium">
              + Schedule Exam
            </button>
          </div>
        </section>


        <section className="mt-6">
          <div className="grid gap-4
   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pr-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-xl text-green-900 bg-gray-100 p-4 max-w-[240] "
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#41b741f3] font-bold bg-[#31e6313c] px-2 py-1 rounded-lg text-sm">
                    {item.icon}</span>
                  <span className="text-[#41b741f3] font-bold bg-[#31e6313c] px-2 py-1 rounded-lg text-sm">
                    {item.change}
                  </span>
                </div>

                <div className="mt-3">
                  <span className="font-medium text-black">
                    {item.title}
                  </span>
                  <h1 className="font-bold text-black text-xl">
                    {item.value}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-6 mt-8">
          <section className="bg-white rounded-xl p-6 shadow-sm ">
            <div className="flex justify-between mb-4">
              <h6 className="font-semibold text-gray-900 text-sm">
                Recent Activity
              </h6>
              <button className="text-blue-600 text-xs font-medium">
                View all
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-100  text-blue-600 p-2 rounded-full">
                  <AddTask fontSize="small" />
                </span>
                <div>
                  <p className="text-sm text-gray-700">
                    Math 101 seat plan generated for Room 402
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    2 hours ago • Automated System
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-100  text-blue-600 p-2 rounded-full">
                  <UploadFile fontSize="small" />
                </span>
                <div>
                  <p className="text-sm text-gray-700">
                    240 Students uploaded for biology Department.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    4 hours ago • Admin Sarah
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                  <ReportProblem fontSize="small" />
                </span>
                <div>
                  <p className="text-sm text-gray-700">
                    Conflict Detected in Schedule: CS202 and EE101 overlapping in Hall B.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Yesterday • Conflict Resolver
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 px-1.5 py-1.5 rounded-full">
                  <VerticalAlignTop fontSize="small" />
                </span>
                <div>
                  <p className="text-sm text-gray-700">
                    Final Date Sheet published for Summer Semester 2024.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Yesterday • Head of Dept
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm w-full md:w-[240] ">
            <h6 className="font-semibold text-gray-900 mb-4">
              Quick Actions
            </h6>

            {[
              { label: "Create Exam", icon: <AddCircle />, bg: "bg-blue-600 text-white" },
              { label: "Upload Students", icon: <FileUpload />, bg: "bg-blue-50 text-blue-700" },
              { label: "Export Seat Plans", icon: <Print />, bg: "bg-gray-100 text-gray-800" },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full ${item.bg} p-4 rounded-lg flex justify-between items-center mb-3 hover:opacity-90 transition`}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  {item.icon} {item.label}
                </span>
                <ArrowForwardIos fontSize="small" />
              </button>
            ))}
          </section>

        </div>
      </div >
    </>
  )
}

export default Dasboard
