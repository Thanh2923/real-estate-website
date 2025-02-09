import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaBuilding, FaClipboardList, FaBook } from "react-icons/fa";
import Image from '../../assets/images/PressNews1.jpg';
import Image2 from '../../assets/images/PressNews2.jpg';
import Image3 from '../../assets/images/PressNews3.jpg';
import Image4 from '../../assets/images/PressNews4.jpg';
import Image5 from '../../assets/images/PressNews5.jpg';
import Title from "../Title/Title";

const realEstateNews = [
  {
    id: 1,
    title:"Mua bán nhà đất ở tỉnh: 4 lưu ý quan trọng",
    image: Image,
    icon: "T",
  },
  {
    id: 2,
    title: "Bất chấp nhu cầu sụt giảm, giá nhà đất vẫn tăng",
    image: Image2,
    icon: "S",
  },
  {
    id: 3,
    title: "Lời giải cho bài toán mua bất động sản ở tỉnh",
    image: Image3,
    icon: "M",
  },
  {
    id: 4,
    title: "Công ty mẹ Bất Động Sản doanh thu tăng 42%, đạt gần 20,6 triệu USD...",
    image: Image4,
    icon: "TM",
  },
  {
    id: 5,
    title:"Kinh nghiệm tránh rủi ro khi giao dịch nhà đất ở tỉnh",
    image: Image5,
    icon: "TM",
  },
];

const utilities = [
  {
    id: 1,
    icon: <FaBuilding className="text-red-500 text-5xl" />,
    title: "Bất động sản bán",
    description: "Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn.",
  },
  {
    id: 2,
    icon: <FaClipboardList className="text-red-500 text-5xl" />,
    title: "Bất động sản cho thuê",
    description: "Cập nhật thường xuyên các loại hình bất động sản cho thuê.",
  },
  {
    id: 3,
    icon: <FaBook className="text-red-500 text-5xl" />,
    title: "Wiki BĐS",
    description: "Cung cấp kiến thức thị trường và kinh nghiệm đầu tư.",
  },
  {
    id: 4,
    icon: <FaBook className="text-red-500 text-5xl" />,
    title: "Wiki BĐS",
    description: "Cung cấp kiến thức thị trường và kinh nghiệm đầu tư.",
  },
];

const PressNews = () => {
  return (
    <div className="w-full  cursor-pointer py-10">
        <Title title={"Báo chí nói về BandongsanDaNang"}/>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full"
      >
        {realEstateNews.map((news) => (
          <SwiperSlide key={news.id}>
            <div className="bg-white shadow-md rounded-lg p-3 hover:shadow-xl transition-all">
              <img src={news.image} alt={news.title} className="rounded-md w-full" />
              <div className="flex items-center gap-3 py-2">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full">{news.icon}</span>
                <p className="font-semibold">{news.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[70px]">
        {utilities.map((utility) => (
          <div
            key={utility.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            {utility.icon}
            <h3 className="font-semibold mt-3 text-lg">{utility.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{utility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressNews;
