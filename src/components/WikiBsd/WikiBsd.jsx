import Image from '../../assets/images/wikibds.jpg'
import { BiHome, BiDollarCircle, BiBuildingHouse, BiMoney, BiMap, BiChair } from "react-icons/bi";
import { GiYinYang } from "react-icons/gi"; // Icon Phong thủy

const categories = [
  { title: "Mua BĐS", icon: BiHome },
  { title: "Bán BĐS", icon: BiDollarCircle },
  { title: "Thuê BĐS", icon: BiBuildingHouse },
  { title: "Tài chính BĐS", icon: BiMoney },
  { title: "Quy hoạch - Pháp lý", icon: BiMap },
  { title: "Nội - Ngoại thất", icon: BiChair },
  { title: "Phong thủy", icon: GiYinYang }, // Sửa icon này
];
const WikiBds = () => {
  return (
  <div className='w-full'>
  <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Wiki BĐS</h2>
        <p className="text-gray-600 mt-2">
          Wiki bất động sản là cẩm nang đáp ứng tất cả nhu cầu của người tìm kiếm thông tin bất động sản.
        </p>
      </div>
      
     
      <div className="grid md:grid-cols-3 gap-6 mt-6">
       
        <div className="md:col-span-2 relative">
          <img
            src={Image}
            alt="Featured"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white rounded-b-lg">
            <p className="text-sm">03/06/2024 15:01 • Mua BĐS</p>
            <h3 className="text-lg font-bold">Kinh Nghiệm Mua Nhà Đất - Chi Tiết Từng Bước Cho Người Mua Lần Đầu</h3>
          </div>
        </div>

        {/* Related Articles */}
        <div className="space-y-4">
          {[
            {
              date: "08/02/2025 08:00",
              category: "Thuê BĐS",
              title: "Thông Tin Chi Tiết Khu Công Nghiệp Ngọc Hồi Mới Nhất",
            },
            {
              date: "07/02/2025 16:26",
              category: "Phong thủy",
              title: "Tuổi Ngọ Hợp Màu Gì? Cách Sắp Xếp Không Gian Nhà Ở Mang Tới May Mắn Cho Người Tuổi Ngọ",
            },
            {
              date: "07/02/2025 15:00",
              category: "Quy hoạch pháp lý",
              title: "5 Loại Đất Được Cấp Sổ Đỏ Hiện Nay [Cập Nhật]",
            },
          ].map((article, index) => (
            <div key={index} className="border-b pb-2">
              <p className="text-sm text-gray-500">
                {article.date} • {article.category}
              </p>
              <h4 className="text-md font-medium hover:text-blue-500 cursor-pointer">
                {article.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
      <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Chuyên mục</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
  <div key={index} className="flex flex-col items-center">
    <div className="w-24 h-24 bg-red-100 flex items-center justify-center rounded-full">
      {/* Sử dụng JSX để render icon */}
      <category.icon className="w-12 h-12 text-red-500" />
    </div>
    <p className="mt-3 text-lg font-medium">{category.title}</p>
  </div>
))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default WikiBds;
