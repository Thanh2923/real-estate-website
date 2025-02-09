import { useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from '../../assets/images/project1.jpg'
import Image2 from '../../assets/images/project2.jpg'
import Image3 from '../../assets/images/project3.jpg'
const projects = [
  {
    id: 1,
    title: "Akari City Nam Long",
    location: "Đường Võ Văn Kiệt, Bình Tân, Hồ Chí Minh",
    status: "Đang mở bán",
    update: "11/2023: cất nóc 4 tòa tháp Akari City giai đoạn 2",
    image: Image3,
  },
  {
    id: 2,
    title: "Vinhomes Grand Park",
    location: "Quận 9, Hồ Chí Minh",
    status: "Sắp mở bán",
    update: "Dự kiến bàn giao quý IV/2024",
    image: Image2,
  },
  {
    id: 3,
    title: "The Metropole Thủ Thiêm",
    location: "Thủ Thiêm, Quận 2, Hồ Chí Minh",
    status: "Đã hoàn thành",
    update: "Sẵn sàng bàn giao căn hộ cao cấp",
    image: Image,
  },
];

const ProjectBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative cursor-pointer w-full max-w-screen-xl mx-auto">
      <div className="relative">
        <img src={projects[current].image} alt={projects[current].title} className="w-full h-80 object-cover rounded-lg" />
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <FaChevronRight />
        </button>
        <div className="absolute bottom-6 left-16 bg-white p-4 rounded-lg shadow-lg">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{projects[current].status}</span>
          <p className="text-sm text-gray-700 mt-1">{projects[current].update}</p>
          <h2 className="text-xl font-bold mt-2">{projects[current].title}</h2>
          <p className="text-gray-500">{projects[current].location}</p>
        </div>
      </div>

      <div className="mt-4 cursor-pointer flex flex-wrap gap-3 p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 flex-grow">
          <FaSearch className="text-gray-500" />
          <input type="text" placeholder="Tìm kiếm dự án..." className="ml-2 w-full outline-none" />
        </div>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Toàn quốc</option>
          <option>Hồ Chí Minh</option>
          <option>Hà Nội</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Tất cả</option>
          <option>Căn hộ</option>
          <option>Nhà phố</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Tất cả</option>
          <option>Dưới 1 tỷ</option>
          <option>1-3 tỷ</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Tất cả</option>
          <option>Đang mở bán</option>
          <option>Đã bán hết</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectBanner;
