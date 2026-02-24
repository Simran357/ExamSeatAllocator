import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EditIcon from '@mui/icons-material/Edit';
const tableData = [
  {
    roll: "CS2024-001",
    name: "Alex Johnston",
    course: "BSc Conputer Science",
    email: "alex.j@university.edu",
    status: "Allocated",
    action:<EditIcon/>
  },
  {
    roll: "MISSING",
    name: "Sarah Chen",
    course: "B.Eng Robotics",
    email: "s.chen@university.edu",
    status: "Not Allocated",
    action:<EditIcon/>

  },
  {
    roll: "CS2024-045",
    name: "Macus Sterling",
    course: "B.sc Computer Science",
    email:"m.sterling@university.edu",
    status:"Not Allocated",
    action:<EditIcon/>

  },
  {
    roll: "BE2024-012",
    name: "Elena Rodriguez",
    course: "B.Eng Robotics",
    email:"e.rodriguez@university.edu",
   status:"Allocated",
    action:<EditIcon/>

  },
];

const Students = () => {
  return (
    <>
  <div className='w-full pr-6 pl-6 '>
    <section className='flex  flex-col  gap-4'>
      <h1 className="font-bold text-2xl text-gray-900">Student Management</h1>
      <p className='mt-1 text-sm text-gray-500'>Manage your student database, upload bulk records, and ensure all profiles are complete for the upcoming exam cycle.</p>
      <div className='mt-4 p-4 rounded-lg   bg-amber-50 border border-amber-200 flex gap-3 items-center '>
        <span className="text-amber-700  rounded-full">
      <WarningAmberIcon fontSize="small" />
    </span>
       <div>
        <h1
         className='text-sm font-semibold text-amber-900'>Missing Roll Number Alert</h1>
         <p className='text-xs sm:text-sm '>Attention: 12 students are currently missing roll numbers. Please update their profiles to complete allocation.</p>
      </div>
      </div> 
    </section>

   <section className="mt-10 p-10 border-2 border-dashed border-gray-300 rounded-xl 
bg-gray-50 flex flex-col items-center text-center gap-3">

  <span className="text-blue-600 bg-blue-100 p-4 rounded-full">
    <CloudUploadIcon fontSize="large" />
  </span>

  <h2 className="font-semibold text-gray-800 text-lg">
    Bulk Upload Student Data
  </h2>

  <p className="text-sm text-gray-500 max-w-sm">
    Upload student records in CSV or Excel format.  
    Ensure data follows the provided template.
  </p>


  <button
    className="mt-3 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium
    hover:bg-blue-700 transition"
  >
    Upload File
  </button>

  <span className="text-xs text-gray-400">
    Max file size: 5MB
  </span>
</section>

<section className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center">
  <div className=' flex md:flex-row sm:flex-col flex-col gap-2 '>
  <span className='flex gap-2 border items-center rounded-lg max-w-56 '>
    <SearchIcon/>
  <input type="text" className="border-0 outline-none focus:ring-0" placeholder='Search students by name'/>
  </span>
<div className="border rounded-lg flex items-center w-36 sm:w-42">
  <select className='border-0 outline-none focus:ring-0' > 
    <option value="">--Select Course--</option>
    <option value="ba">BA</option>
    <option value="BCOM">Bcom</option>
    <option value="BBA">BBA</option>
    <option value="Bsc">Bsc</option>
    <option value="MBA">MBA</option>
  
  </select>
  
  </div>
<div className="border rounded-lg flex items-center w-34 sm:w-42">
   <select className='border-0 outline-none focus:ring-0' > 
    <option value="">--Select Years--</option>
    <option value="">2022</option>
    <option value="BCOM">2023</option>
    <option value="BBA">2024</option>
    <option value="Bsc">2025</option>
    <option value="MBA">2026</option>
  
  </select>
  </div>
 <button className="text-blue-600 text-xs font-medium">
      Clear Filters
    </button>
    </div>
    
    <div className='flex gap-2 justify-between ml-auto'>
    
  <button
    className="mt-3 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium
    hover:bg-blue-700 transition"
  >
    <span className='flex gap-2 items-center'>
      <MailIcon/> Bullk Notify</span>
   
  </button>
  <button
    className="mt-3 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium
    hover:bg-blue-700 transition"
  >
 <span className='flex gap-2 items-center'><PersonAddAlt1Icon/> Add Student</span>
  </button>
    </div>
</section>

<section className='mt-10'>
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
  <table  className="w-full text-sm">
    <thead className="bg-gray-100 ">
      <tr>
      <th className="p-3 text-center">Roll NO</th>
        <th className="p-3 text-center">NAME</th>
      <th className="p-3 text-center">COURSE</th>
      <th className="p-3 text-center">EMAILS</th>
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
      <td className="px-6 py-4 text-gray-600">{item.roll}</td>

      <td className="px-6 py-4 font-medium text-gray-900">
        {item.name}
      </td>

      <td className="px-6 py-4 text-gray-600">{item.course}</td>

      <td className="px-6 py-4 text-gray-500">{item.email}</td>

      {/* STATUS BADGE */}
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full
            ${
              item.status === "Allocated"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }
          `}
        >
          {item.status}
        </span>
      </td>

      {/* ACTION */}
      <td className="px-6 py-4 text-blue-600 font-medium cursor-pointer hover:underline">
        {item.action}
      </td>
    </tr>
  ))}

</tbody>

  </table>
  </div>
</section>

  </div>
    </>
  )
}

export default Students