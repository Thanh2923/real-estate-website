import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Title from "../Title/Title";
import Image from '../../assets/images/locahcm.jpg';

const RealEstateNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Vay Mua Nhà Ngân Hàng HDBank Lãi Suất Bao Nhiêu Hiện Nay?",
      image: Image,
    },
    {
      id: 2,
      title: "Dự Án Mới Tại TP.HCM Đang Thu Hút Mọi Nhà Đầu Tư",
      image: Image,
    },
    {
      id: 3,
      title: "Cập Nhật Thị Trường Bất Động Sản 2025",
      image: Image,
    },
    {
      id: 4,
      title: "Vì Sao Mua Nhà Tại TP. Hà Nội Hiện Nay Là Một Cơ Hội Vàng",
      image: Image,
    },
    {
      id: 5,
      title: "Bất Động Sản Tại TP.HCM: Tăng Trưởng Mạnh Mẽ Trong Năm 2025",
      image: Image,
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
        modules={[ Navigation, Pagination]} // Các modules cần thiết
        className="px-5  "
      >
        {newsArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="w-full px-5  bg-white  transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
              <img src={article.image} alt={article.title} className="rounded-md w-full" />
              <div className="w-full flex gap-5 items-center p-3">
              <h3 className='text-5xl font-bold text-slate-800'>01</h3>
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
