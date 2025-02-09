import banner from '../../assets/images/banner.jpg'
import { useState } from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { FiltersCity } from '../../untils/';
const HeroSection = () => {
    const [search, setSearch] = useState("");
  return (
    <div className="w-full mb-8 h-[400px] relative bg-red-500">
       <img src={banner} className='w-full h-full' alt="" />
<div className='w-full absolute top-10  left-0 flex justify-center items-center'>
<div className=' lg:w-[70%] w-[80%] '>

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
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 mt-4">
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
