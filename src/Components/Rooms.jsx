import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
const tableData = [
  {
    room: "Great Hall A",
    buildingname: "Central Plaza",
    TotalCapacity: "500",
    ExamCapacity: "250",
    status: "Available",
    action:"View Layout"
  },
  {
  room: "Great Hall A",
    buildingname: "Central Plaza",
    TotalCapacity: "500",
    ExamCapacity: "250",
    status: "Available",
    action:"View Layout"

  },
  {
   room: "Great Hall A",
    buildingname: "Central Plaza",
    TotalCapacity: "500",
    ExamCapacity: "250",
    status: "Available",
    action:"View Layout"

  },
  {
   room: "Great Hall A",
    buildingname: "Central Plaza",
    TotalCapacity: "500",
    ExamCapacity: "250",
    status: "Available",
    action:"View Layout"

  },
];
export const stats = [
  {
    id: 1,
    title: "Total Students",
    value: "4,250",
    change: "+5.2%",
 
  },
  {
    id: 2,
    title: "Active Exams",
    value: "12",
    change: "Stable",
 
  },
  {
    id: 3,
    title: "Allocated Seats",
    value: "80%",
    subValue: "1,200 / 1,500",
    change: "-2.4%",
  
  },
  {
    id: 4,
    title: "Pending Requests",
    value: "24",
    change: "+10%",
 
  },
];
const Rooms = () => {
  return (
    <>
    <div className='m-6'>
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
  <div>
    <h1 className="text-2xl font-semibold text-gray-900">
      Room & Capacity Management
    </h1>
    <p className="text-sm text-gray-500">
     Manage exam venues, seat layouts, and social distancing spacing rules.
    </p>
  </div>  
  <div className="flex items-center gap-4 pr-4">
      <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg text-sm font-medium">
        + Add New
      </button>
    </div>
</section>
  <section className="mt-6">
           <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pr-6">
             {stats.map((item, i) => (
               <div
                 key={i}
                 className="rounded-xl text-green-900 bg-gray-100 p-4 max-w-[240] "
               >

                 <div className=" flex  justify-between items-center">
                   <div>
                  <h1 className="font-medium text-black">{item.title}</h1>
                      <h1 className="font-medium text-black">
                     {item.value}
                   </h1>
                   </div>

                   <span className="text-[#41b741f3] flex items-center font-bold bg-[#31e6313c] px-2 py-1 rounded-lg text-sm">
                     {item.change}
                   </span>
                 </div>
               </div>
             ))}
           </div>
         </section>
  <section className='mt-6 bg-white shadow-lg p-4 rounded-2xl'>
<div className='flex justify-between items-center'
>
  <h1 className='text-lg font-bold'>Room Inventory</h1>
<div className='flex gap-2'>
 <span className='flex gap-2 border items-center rounded-lg max-w-56 '>
    <SearchIcon/>
  <input type="text" className="border-0 outline-none focus:ring-0" placeholder='Search students by name'/>
  </span>
    <button className='px-4 border border-white-400 rounded-lg '>filter</button>
</div>
    </div>
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
  <table  className="w-full text-sm">
    <thead className="bg-gray-100 ">
    <tr>
      <th className="p-3 text-center">ROOM NAME</th>
        <th className="p-3 text-center"> BUILDING </th>
          <th className="p-3 text-center"> TOTAL CAPACITY</th>
            <th className="p-3 text-center">EXAM CAPACITY</th>
                  <th className="p-3 text-center">STATUS</th>
      <th className="p-3 text-center">ACTIONS</th>

    </tr>
  </thead>
  <tbody>
  {tableData.map((item, index) => (
    <tr
      key={index}
      className="border-b last:border-none hover:bg-gray-50 transition"
    >
      <td className="px-6 py-4 text-gray-600">{item.room}</td>

      <td className="px-6 py-4 font-medium text-gray-900">
        {item.buildingname}
      </td>

      <td className="px-6 py-4 text-gray-600">{item.TotalCapacity}</td>

      <td className="px-6 py-4 text-gray-500">{item.ExamCapacity}</td>

      {/* STATUS BADGE */}
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full
            ${
              item.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }
          `}
        >
          {item.status}
        </span>
      </td>

      {/* ACTION */}
      <td className="">
        <span  className={`px-3 py-1 text-xs font-semibold rounded-full
            ${
              item.action === "View Layout"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-600"
            }
          `}>{item.action}</span>
       
      </td>
    </tr>
  ))}

</tbody>
</table>
</div>

         </section>

         <section className='mt-8 max-w-200 flex'>

          <div className="bg-white rounded-2xl p-6 shadow-sm border flex flex-col border-gray-100">
           <div className='flex gap-2 items-center'> 
            <span className='text-blue-800'><SettingsSuggestIcon/></span>
            <h1>New Room Configuration</h1>
            </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-2'>
            <span>
              <h1  className='text-sm font-semibold mt-2'>Room Name/ID</h1>
            <input  className='border-gray-600 border px-2 rounded-lg max-w-40' type="text" placeholder='e.g Lab 404'/>
          </span>
           <span>
            <h1  className='text-sm font-semibold mt-2'>Building</h1>
             <select className='border border-gray-600 rounded-lg max-w-40' > 
    <option value="">--Select Block--</option>
    <option value="ba">Science wing</option>
    <option value="BCOM">Commerce block</option>
    <option value="BBA">Computer block </option>
    <option value="Bsc">Agriculter blockj</option>
    <option value="MBA">Art block</option>
  
  </select></span>
  </div>
  <div className='flex gap-3'>
   <span>
              <h1  className='text-sm font-semibold mt-2'>Rows</h1>
            <input  className='border-gray-600 border max-w-26 px-2 py-2  rounded-lg ' type="number" placeholder='e.g Lab 404'/>
          </span>
           <span>
              <h1  className='text-sm font-semibold mt-2'>Columns</h1>
            <input  className='border-gray-600 border   max-w-26 px-2 py-2  rounded-lg ' type="number" placeholder='e.g Lab 404'/>
          </span>
           <span>
              <h1  className='text-sm font-semibold mt-2'>Total</h1>
            <input  className='border-gray-600 border  max-w-26 px-2 py-2 rounded-lg ' type="number" placeholder='e.g Lab 404'/>
          </span>
          </div>
  </div>
  <div className='mt-6'>            
    <h1  className='text-sm font-semibold'>Exam Spacing Rule</h1>

  <div className='mt-4 flex gap-2 '>
            <button className='bg-gray-400 px-2 py-2 rounded-lg  border-2 border-gray-900'>50% Capacity (1 Gap)</button>
            <button  className='bg-gray-400 px-2 py-2 rounded-lg border-2 border-gray-900'>Checkboard Pattern</button>
              </div>
            <div className='flex gap-2  mt-4'>
            <button  className='bg-gray-400 px-4 py-2 rounded-lg border-2 border-gray-900'>Every 3rd Seat </button>
            <button  className='bg-gray-400 px-4 py-2 rounded-lg border-2 border-gray-900'>Custom Rules..</button>
          </div>
          </div>
</div>
          
         </section>
         <section className='mt-5  max-w-240 flex gap-5 items-center'>
          <div className="bg-white rounded-2xl p-6 shadow-sm border flex justify-between border-gray-100">
<h1 className='text-xs font-bold'>Live Layout Preview</h1>
<div>
  <h1 className='text-blue-800 font-bold'>80 total | 40 EXAM SEATS</h1>
  </div>
</div>
         </section>

    </div>
    </>
  )
}

export default Rooms