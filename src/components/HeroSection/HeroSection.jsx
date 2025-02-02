import banner from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { FiltersCity } from '../../untils/';
const HeroSection = () => {
    const [search, setSearch] = useState("");
    const [active,setActive] = useState(1);
  return (
    <div className="w-full mb-8 h-[400px] relative bg-red-500">
       <img src={banner} className='w-full h-full' alt="" />
<div className='w-full absolute top-10  left-0 flex justify-center items-center'>
<div className=' w-[70%]  '>
<div className='gap-2 mb-[2px] grid grid-cols-12'>
<div className='w-full flex col-span-5 gap-1'>
  <Link to="" onClick={()=>setActive(1)} className={`px-5 ${active === 1 ? "bg-red-900 text-white" : ""} bg-red-100 rounded-t-sm font-[600] text-sm text-slate-500  py-2`}>Nhà đất bán</Link>  
<Link to=""  onClick={()=>setActive(2)} className={`px-5 ${active === 2 ? "bg-red-900 text-white" : ""} bg-red-100 rounded-t-sm font-[600] text-sm text-slate-500  py-2`}>Nhà đất bán</Link>  
<Link to="" onClick={()=>setActive(3)} className={`px-5 ${active === 3 ? "bg-red-900 text-white" : ""} bg-red-100 rounded-t-sm font-[600] text-sm text-slate-500  py-2`}>Nhà đất bán</Link>
  </div>
    <p className='w-full px-5 col-span-7 bg-red-100 rounded-t-sm font-[600] text-sm text-slate-500  py-2 text-end'>
    Dùng phiên bản Tìm kiếm mới
    </p>
</div>
<div className='w-full bg-red-900 '>
<div className=" w-full p-4 flex flex-col items-center">
      <div className="flex items-center bg-white rounded-lg overflow-hidden w-full">
        <button className="px-4 text-gray-600">
          <FaHome />
        </button>
        <input
          type="text"
          placeholder="Tìm nhanh. VD: Vinhomes Central Park"
          className="flex-1 py-2 px-4 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-red-600 flex items-center gap-2 text-white px-4 py-2">
          <FaSearch /> Tìm kiếm
        </button>
      </div>
      <div className="flex gap-2 mt-4">
      {FiltersCity && FiltersCity.map((filter) => (
        <select key={filter.id} name={filter.name} className="bg-white px-4 py-2 rounded-md text-gray-700">
          <option>{filter.label}</option>
          {filter.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      ))}
    </div>
    </div>
</div>
       </div>
</div>
    </div>
  )
}

export default HeroSection
