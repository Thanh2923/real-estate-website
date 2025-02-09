import { useState } from "react";
import Image from '../../assets/images/projectList1.jpg';
import Image2 from '../../assets/images/projectList2.jpg';
import Image3 from '../../assets/images/projectList3.jpg';
import Image4 from '../../assets/images/projectList4.jpg';
const projects = [
    {
      id: 1,
      status: "Đã bàn giao",
      name: "Vinhomes Ocean Park",
      price: "45 triệu/m²",
      area: "420 ha",
      units: "10.000",
      location: "Gia Lâm, Hà Nội",
      description:
        "Vinhomes Ocean Park là khu đô thị thông minh với hồ nước rộng, biển nhân tạo và hệ thống tiện ích đẳng cấp hàng đầu tại Hà Nội.",
      company: "Tập đoàn Vingroup",
      image: Image,
    },
    {
      id: 2,
      status: "Đang mở bán",
      name: "The Global City",
      price: "120 triệu/m²",
      area: "117 ha",
      units: "20.000",
      location: "An Phú, Thành phố Thủ Đức, TP.HCM",
      description:
        "The Global City là khu đô thị kiểu mẫu với quy hoạch đồng bộ, bao gồm trung tâm thương mại, công viên và hệ thống trường học quốc tế.",
      company: "Masterise Homes",
      image: Image2,
    },
    {
      id: 3,
      status: "Sắp bàn giao",
      name: "Sun Grand City New An Thới",
      price: "70 triệu/m²",
      area: "300 ha",
      units: "3.500",
      location: "Phú Quốc, Kiên Giang",
      description:
        "Sun Grand City New An Thới là khu đô thị kiểu mẫu tại Phú Quốc, kết hợp giữa nhà phố thương mại và khu dân cư sinh thái ven biển.",
      company: "Sun Group",
      image: Image3,
    },
    {
      id: 4,
      status: "Đã hoàn thành",
      name: "EcoPark",
      price: "35 triệu/m²",
      area: "500 ha",
      units: "12.000",
      location: "Văn Giang, Hưng Yên",
      description:
        "Ecopark là khu đô thị sinh thái xanh bậc nhất miền Bắc, với không gian sống trong lành, hệ thống tiện ích hiện đại và mật độ xây dựng thấp.",
      company: "Tập đoàn Ecopark",
      image: Image4,
    },
  ];
  
export default function RealEstateProjects() {
  const [sortOption, setSortOption] = useState("Mới nhất");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mt-5 font-bold">Dự án toàn quốc</h2>
      <p className="text-gray-500">Hiện đang có 5.694 dự án</p>

      <div className="mt-4 flex justify-between items-center">
        <div></div>
        <select
          className="border rounded-md p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="Mới nhất">Mới nhất</option>
          <option value="Phổ biến">Phổ biến</option>
        </select>
      </div>

      <div className="mt-4 grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white flex shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-48 h-48 object-cover" />
            <div className="p-4">
              <span className="bg-purple-200 text-purple-700 text-xs px-2 py-1 rounded-md">
                {project.status}
              </span>
              <h3 className="text-lg font-semibold mt-2">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.price} - {project.area} - {project.units}</p>
              <p className="text-gray-500 text-sm mt-2">{project.location}</p>
              <p className="text-gray-500 text-sm mt-2 truncate">{project.description}</p>
              <p className="text-gray-700 text-sm mt-2 font-medium">{project.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
