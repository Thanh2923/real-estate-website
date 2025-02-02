import logo from '../assets/images/logo.svg';
import { Link } from "react-router";
import { AiOutlineHeart } from "react-icons/ai";
import { Category } from '../untils';
const Header = () => {

  return (
    <div className="w-full h-[60px]  font-semibold  bg-white px-5 text-[14px] grid items-center grid-cols-12 ">
      <div className='col-span-2'>
      <img src={logo} className="w-[100px] h-[60px]" alt="Logo" />
      </div>
      <div className='col-span-6'>
        <section className='nav flex gap-5 '>
        {Category && Category.map((cate) => (
  <div key={cate.id} className="relative z-10 group">
    {/* Link danh mục cha */}
    <Link to="/dashboard" className="py-3 relative inline-block">
      {cate.name}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transform scale-x-0 
      group-hover:scale-x-100 group-hover:w-full transition-all duration-300"></span>
    </Link>

    {/* Dropdown danh mục con */}
    {cate.subcategories && cate.subcategories.length > 0 && (
      <div className="w-[300px] flex flex-col opacity-0 group-hover:opacity-100 
      pointer-events-none group-hover:pointer-events-auto absolute rounded-md shadow-lg 
      top-full left-0 bg-white border border-gray-200 transition-all duration-300">
        {cate.subcategories.map((sub) => (
          <Link key={sub.id} to="/dashboard" className="p-2 hover:bg-slate-100">
            {sub.name}
          </Link>
        ))}
      </div>
    )}
  </div>
))}


        </section>
      </div>
      <div className='col-span-4'>
      <section className='w-full flex gap-3  items-center'>
      <Link to="/dashboard"  className='px-3 hover:bg-slate-100 hover:rounded-lg py-2'>Tải ứng dụng</Link>
     <div className='hover:bg-slate-200 hover:rounded-lg p-3 cursor-pointer'>
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
