import Image from '../../assets/images/bdshn.jpeg'
import logo from '../../assets/images/logonewsbds.jpg'
import { useState } from "react"
import { NewsBdsData } from "../../untils"
const NewsBds = () => {
    const [active,setActive] = useState(1);
  return (
     <session className="w-full flex justify-center">
        
            <div className="w-[70%]  ">
          <div className="w-full gap-2 font-bold flex text-2xl">
          {NewsBdsData && NewsBdsData.map((news) => (
  <button 
  onClick={()=>setActive(news.id)}
    key={news.id} 
    type="button"  
    className={` ${active ===news.id ? "text-slate-800 border-b-red-600 border-b-2" : "text-slate-500"} px-5 py-3 hover:border-b-red-600 hover:border-b-2`}
  >
   {news.name}
  </button>
))}
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
              <div className='w-full'>
              <img src={Image} className='rounded-md py-5' alt="" />
              <h2 className='text-slate-800 font-semibold '>Môi Giới Bất Động Sản Người Bán Hàng, Người Chuyển Hướng Kinh</h2>
              </div>
              <div className='w-full cursor-pointer'>
                  <p className='py-3 hover:text-blue-700 text-slate-800  border-b-2 '>Những Yếu Tố Nào Giúp Thị Trường Bất Động Sản Việt Nam Tăng Nhiệt Trong Năm 2025?</p>
                  <p className='py-3 hover:text-blue-700 text-slate-800  border-b-2 '>Những Yếu Tố Nào Giúp Thị Trường Bất Động Sản Việt Nam Tăng Nhiệt Trong Năm 2025?</p>
                  <p className='py-3 hover:text-blue-700 text-slate-800  border-b-2 '>Những Yếu Tố Nào Giúp Thị Trường Bất Động Sản Việt Nam Tăng Nhiệt Trong Năm 2025?</p>
                  <p className='py-3 hover:text-blue-700 text-slate-800  border-b-2 '>Những Yếu Tố Nào Giúp Thị Trường Bất Động Sản Việt Nam Tăng Nhiệt Trong Năm 2025?</p>
                  <p className='py-3 hover:text-blue-700 text-slate-800  border-b-2 '>Những Yếu Tố Nào Giúp Thị Trường Bất Động Sản Việt Nam Tăng Nhiệt Trong Năm 2025?</p>
                  <p className='py-3 hover:text-blue-700 text-slate-800  border-b-2 '>Những Yếu Tố Nào Giúp Thị Trường Bất Động Sản Việt Nam Tăng Nhiệt Trong Năm 2025?</p>
                 
              </div>
          </div>
            </div>
            <div className="w-[30%]  ">
                 <img src={logo} className='py-5 px-10' alt="" />
            </div>
           
      
     </session>
  )
}

export default NewsBds
