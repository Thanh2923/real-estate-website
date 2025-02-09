import { FaSearch, FaMapMarkedAlt, FaRegClock, FaFilter } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Image from '../../assets/images/bds1.jpg';
import Image2 from '../../assets/images/bds2.jpg';
import Image3 from '../../assets/images/bds3.jpg';
const properties = [
  {
    id: 1,
    title: "BÁN SHOPHOUSE KINH DOANH FLAMINGO GOLDEN HILL, HÀ NAM",
    location: "Phủ Lý, Hà Nam",
    area: "120m²",
    price: "6.5 tỷ",
    image: Image,
    tag: "Tin đặc biệt",
    time: "Hôm nay",
  },
  {
    id: 2,
    title: "QUỸ HÀNG MỚI GIÁ KHUYẾN MÃI",
    location: "Vinhomes, Hà Nội",
    area: "80m²",
    price: "3.2 tỷ",
    image: Image2,
    tag: "Tin mới",
    time: "Hôm qua",
  },
  {
    id: 3,
    title: "CĂN HỘ BÁN SH 2PN VINHOMES GRAND PARK",
    location: "Quận 9, TP. HCM",
    area: "70m²",
    price: "2.9 tỷ",
    image: Image3,
    tag: "Tin đặc biệt",
    time: "2 ngày trước",
  },
];

const PropertyPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Trên toàn quốc"
          className="w-full md:w-2/3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <div className="flex mt-3 md:mt-0 space-x-2">
          <button className="px-5 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 flex items-center transition">
            <FaSearch className="mr-2" /> Tìm kiếm
          </button>
          <button className="px-5 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 flex items-center transition">
            <FaMapMarkedAlt className="mr-2" /> Xem bản đồ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center text-lg">
            <FaFilter className="mr-2" /> Bộ lọc
          </h3>
          <ul className="text-gray-600 space-y-3">
            <li className="hover:text-red-500 cursor-pointer transition">Hà Nội</li>
            <li className="hover:text-red-500 cursor-pointer transition">TP. HCM</li>
            <li className="hover:text-red-500 cursor-pointer transition">Đà Nẵng</li>
            <li className="hover:text-red-500 cursor-pointer transition">Bình Dương</li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 w-full relative">
                <img src={property.image} alt={property.title} className="h-64 w-full object-cover" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-md">
                  {property.tag}
                </span>
              </div>
              <div className="md:w-2/3 w-full p-5">
                <h3 className="font-semibold text-lg text-gray-800 hover:text-red-500 cursor-pointer transition">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">📍 {property.location}</p>
                <p className="text-gray-600 text-sm">📏 {property.area}</p>
                <p className="text-green-600 font-semibold text-xl mt-3">💰 {property.price}</p>
                <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <FaRegClock />
                    <span>{property.time}</span>
                  </div>
                  <BsFillBookmarkFill className="text-gray-400 hover:text-yellow-500 cursor-pointer transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-3 md:mb-0">
          <IoMdMail className="text-red-500 text-3xl mr-3" />
          <span className="text-gray-700 text-lg font-medium">Đăng ký để nhận tin mới nhất</span>
        </div>
        <input
          type="email"
          placeholder="Nhập email của bạn..."
          className="p-3 border rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="mt-3 md:mt-0 ml-0 md:ml-3 px-5 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default PropertyPage;
