import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaChevronDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from '../assets/images/logo.svg';
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b">
          <div>
            <img src={Image} alt="Batdongsan" className="h-10 mb-4" />
            <p className="text-gray-700 text-sm">
              <strong>CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</strong>
            </p>
            <p className="text-gray-600 text-sm">
              Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-gray-600 text-sm">(024) 3562 5939 - (024) 3562 5940</p>
          </div>

          {/* Hướng dẫn */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">HƯỚNG DẪN</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Về chúng tôi</li>
              <li className="hover:text-red-500 cursor-pointer">Báo giá & hỗ trợ</li>
              <li className="hover:text-red-500 cursor-pointer">Câu hỏi thường gặp</li>
              <li className="hover:text-red-500 cursor-pointer">Góp ý báo lỗi</li>
              <li className="hover:text-red-500 cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Quy định */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">QUY ĐỊNH</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Quy định đăng tin</li>
              <li className="hover:text-red-500 cursor-pointer">Quy chế hoạt động</li>
              <li className="hover:text-red-500 cursor-pointer">Điều khoản thỏa thuận</li>
              <li className="hover:text-red-500 cursor-pointer">Chính sách bảo mật</li>
              <li className="hover:text-red-500 cursor-pointer">Giải quyết khiếu nại</li>
            </ul>
          </div>

          {/* Đăng ký nhận tin */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">ĐĂNG KÝ NHẬN TIN</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full p-2 outline-none pl-4 pr-10 border rounded-md text-sm focus:ring focus:ring-red-300"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500">
                <HiOutlineMail size={20} />
              </button>
            </div>
            <h3 className="font-semibold text-gray-800 mt-5 mb-2">QUỐC GIA & NGÔN NGỮ</h3>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-gray-700 text-sm">Việt Nam</span>
              <FaChevronDown size={14} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Phần giữa */}
        <div className="text-gray-700 text-sm mt-6">
          <p className="font-semibold cursor-pointer hover:text-red-500">Xem chi nhánh của Batdongsan.com.vn</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
            <div>
              <p className="font-medium">Chi nhánh TP. Hồ Chí Minh</p>
              <p className="text-gray-600">Tầng 3, Viettel Complex, 285 CMT8, Quận 10</p>
            </div>
            <div>
              <p className="font-medium">Chi nhánh Đà Nẵng</p>
              <p className="text-gray-600">Tầng 9, Tòa nhà Vĩnh Trung Plaza, Thanh Khê</p>
            </div>
            <div>
              <p className="font-medium">Chi nhánh Hải Phòng</p>
              <p className="text-gray-600">Tầng 5, TD Business Center, Lê Hồng Phong</p>
            </div>
            <div>
              <p className="font-medium">Chi nhánh Vũng Tàu</p>
              <p className="text-gray-600">Tầng 4, Tòa nhà ACB, Hòa Thám</p>
            </div>
            <div>
              <p className="font-medium">Chi nhánh Bình Dương</p>
              <p className="text-gray-600">Phòng 10, tầng 16, Becamex Tower</p>
            </div>
            <div>
              <p className="font-medium">Chi nhánh Nha Trang</p>
              <p className="text-gray-600">Tầng 6, Tòa nhà CTCP Điện Lực Khánh Hòa</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-center text-gray-600 text-sm">
          <p>
            © 2007 - 2025 Batdongsan.com.vn | Giấy ĐKKD số 0104630479 cấp ngày 02/06/2010
          </p>
          <p>
            Giấy phép thiết lập trang thông tin điện tử tổng hợp số 191/GP-TTĐT ngày 31/08/2023
          </p>
          <p className="mt-2">Chịu trách nhiệm nội dung: Bà Đặng Thị Hường</p>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="text-gray-500 hover:text-red-500 cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="text-gray-500 hover:text-red-500 cursor-pointer">
              <FaLinkedinIn size={20} />
            </div>
            <div className="text-gray-500 hover:text-red-500 cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div className="text-gray-500 hover:text-red-500 cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
