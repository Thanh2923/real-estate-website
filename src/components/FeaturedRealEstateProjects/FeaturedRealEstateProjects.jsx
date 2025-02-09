import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Title from '../Title/Title';
import Image from '../../assets/images/Featured.jpg';
import Image2 from '../../assets/images/Featured2.jpg';
import Image3 from '../../assets/images/Featured3.jpg';
import Image4 from '../../assets/images/Featured4.jpg';
import Image5 from '../../assets/images/Featured5.jpg';

const FeaturedRealEstateProjects = () => {
  const projects = [
    { name: 'Khu đô thị Vạn Phúc City', price: '160 triệu/m²', size: '198 ha', location: 'Bình Tân, Hồ Chí Minh' , image:Image },
    { name: 'Vinhomes Grand Park', price: '120 triệu/m²', size: '271 ha', location: 'Quận 9, Hồ Chí Minh' , image:Image2 },
    { name: 'The Global City', price: '130 triệu/m²', size: '117 ha', location: 'An Phú, Thủ Đức' , image:Image3 },
    { name: 'Eco Green Saigon', price: '85 triệu/m²', size: '14 ha', location: 'Quận 7, Hồ Chí Minh' , image:Image4 },
    { name: 'Diamond Island', price: '150 triệu/m²', size: '8 ha', location: 'Quận 2, Hồ Chí Minh' , image:Image5 },
  ];

  return (
    <div className="w-full">
      <Title title="Dự án bất động sản nổi bật" />
      <Swiper
        slidesPerView={1} 
        spaceBetween={20}
        loop={true} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true} 
        pagination={{ clickable: true }} 
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="px-5"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="w-full cursor-pointer rounded-md bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
              <img src={project.image} alt={project.name} className="rounded-md w-full" />
              <div className="w-full p-3">
                <span className="bg-green-200 text-sm rounded-lg py-1 px-2 text-green-800">Đang mở bán</span>
                <h3 className="font-semibold mt-2">{project.name}</h3>
                <div className="w-full text-sm font-semibold gap-4 flex mt-1">
                  <span>{project.price}</span>
                  <span>{project.size}</span>
                </div>
                <h6 className="text-[12px] py-2">{project.location}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedRealEstateProjects;
