import logo from '../assets/images/logo.svg';
import { Link } from "react-router";
import { AiOutlineHeart } from "react-icons/ai";
import { Category } from '../untils';
import { GrMenu } from "react-icons/gr";
import { useState } from 'react';
const Header = () => {
     const [isOpen,setIsOpen] = useState(false);
     const handleClickShow = ()=>{
      setIsOpen((prev)=>!prev);
    
     }
  return (
    <div className="w-full h-[60px] shadow-lg fixed top-0 left-0 z-50  font-semibold  bg-white px-5 text-[14px] grid items-center grid-cols-12 ">
      <div className='col-span-2 cursor-pointer'>
        <Link to="/"><img src={logo} className="w-[100px] h-[60px]" alt="Logo" /></Link>
      </div>
      <div className='lg:col-span-6 col-span-3 hidden lg:block'>
        <section className='nav flex  bg-white  w-full gap-5 '>
        <Link to="/" className="py-3 relative inline-block">
         Trang chủ
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transform scale-x-0 
      group-hover:scale-x-100 group-hover:w-full transition-all duration-300"></span>
    </Link>
        {Category && Category.map((cate) => (
  <div key={cate.id} className="relative z-10 group">
    <Link to="/" className="py-3 relative inline-block">
      {cate.name}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transform scale-x-0 
      group-hover:scale-x-100 group-hover:w-full transition-all duration-300"></span>
    </Link>

    {cate.subcategories && cate.subcategories.length > 0 && (
      <div className="w-[300px] flex flex-col opacity-0 group-hover:opacity-100 
      pointer-events-none group-hover:pointer-events-auto absolute rounded-md shadow-lg 
      top-full left-0 bg-white border border-gray-200 transition-all duration-300">
        {cate.subcategories.map((sub) => (
          <Link key={sub.id} to="/" className="p-2 hover:bg-slate-100">
            {sub.name}
          </Link>
        ))}
      </div>
    )}
  </div>
))}


        </section>
      </div>
      <div className='w-full mobile cursor-pointer flex justify-center lg:col-auto col-span-2 lg:hidden sm:block '>
       <GrMenu onClick={handleClickShow} className='text-[24px] relative'/>
       {isOpen && <section className='nav flex  top-[60px] border-t-2  px-[10%] left-0 flex-col absolute  bg-white  w-[50%] gap-5 '>
        <Link to="/" className="py-3 relative inline-block">
         Trang chủ
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transform scale-x-0 
      group-hover:scale-x-100 group-hover:w-full transition-all duration-300"></span>
    </Link>
        {Category && Category.map((cate) => (
  <div key={cate.id} className="relative z-10 group">
    <Link to="/" className="py-3 z-10 relative inline-block">
      {cate.name}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transform scale-x-0 
      group-hover:scale-x-100 group-hover:w-full transition-all duration-300"></span>
    </Link>

    {cate.subcategories && cate.subcategories.length > 0 && (
      <div className="w-[300px] z-30 flex flex-col opacity-0 group-hover:opacity-100 
      pointer-events-none group-hover:pointer-events-auto absolute rounded-md shadow-lg 
      top-4 left-28 bg-white border border-gray-200 transition-all duration-300">
        {cate.subcategories.map((sub) => (
          <Link key={sub.id} to="/" className="p-2 hover:bg-slate-100">
            {sub.name}
          </Link>
        ))}
      </div>
    )}
  </div>
))}


        </section>} 
      </div>
      <div className='lg:col-span-4 col-span-8'>
      <section className='w-full flex gap-3  items-center'>
      <Link to="/"  className='px-3 lg:block hidden hover:bg-slate-100 hover:rounded-lg py-2'>Tải ứng dụng</Link>
     <div className='hover:bg-slate-200 hover:rounded-lg p-3 lg:block hidden cursor-pointer'>
     <AiOutlineHeart className='text-[24px]  ' />
     </div>
      <Link to="/dang-ky"  className='px-3 hover:bg-slate-100 hover:rounded-lg  py-2'>Đăng ký</Link> | 
      <Link to="/dang-nhap"  className='px-3 border rounded-lg  py-2'>Đăng nhập</Link>
      </section>
      </div>
    
    </div>
  );
};

export default Header;
