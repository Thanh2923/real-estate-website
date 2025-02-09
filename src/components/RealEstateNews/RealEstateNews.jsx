import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Title from "../Title/Title";
import Image from '../../assets/images/RealEstateNews1.jpg';
import Image2 from '../../assets/images/RealEstateNews2.jpg';
import Image3 from '../../assets/images/RealEstateNews3.jpg';
import Image4 from '../../assets/images/RealEstateNews4.jpg';
import Image5 from '../../assets/images/RealEstateNews5.jpg';

const RealEstateNews = () => {
  const newsArticles = [
    {
      id: 1,
      ordinal:"01",
      title: "5 Loại Đất Được Cấp Sổ Đỏ Hiện Nay [Cập Nhật]",
      image: Image,
    },
    {
      id: 2,
      ordinal:"02",
      title: "Bảng Lãi Suất Ngân Hàng MSB Tháng 02/2025",
      image: Image2,
    },
    {
      id: 3,
      ordinal:"03",
      title: "Hà Nam Ở Đâu? Quy Hoạch Hà Nam Và Tiềm Năng Đầu Tư BĐS",
      image: Image3,
    },
    {
      id: 4,
      ordinal:"04",
      title: "Bảng Lãi Suất Ngân Hàng Vietcombank Tháng 02/2025",
      image: Image4,
    },
    {
      id: 5,
      ordinal:"05",
      title: "Nhà Ở Xã Hội “Hụt Hơi” Trong Năm 2024, Kì Vọng Tươi Sáng Năm 2025",
      image: Image5,
    },
  ];

  return (
    <div className="w-full">
      <Title title={"Tin tức bất động sản"} />
      <Swiper
        slidesPerView={1} 
        spaceBetween={20} 
        loop={true} 
        navigation={true}
        pagination={{ clickable: true }} 
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        modules={[ Navigation, Pagination]} 
        className="px-5  "
      >
        {newsArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="w-full px-5  cursor-pointer bg-white  transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
              <img src={article.image} alt={article.title} className="rounded-md w-full" />
              <div className="w-full flex gap-5 items-center p-3">
              <h3 className='text-5xl font-bold text-slate-800'>{article.ordinal}</h3>
                <h3 className="font-semibold mt-2">{article.title}</h3>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RealEstateNews;
