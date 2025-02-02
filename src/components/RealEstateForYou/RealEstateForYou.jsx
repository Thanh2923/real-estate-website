import Title from "../Title/Title";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Image from '../../assets/images/bdshn.jpeg';
import { Pagination } from "../Pagination/Pagination";

const properties = [
  {
    id: 1,
    title: "Bán đất 571,3m2 Thạnh Mỹ Lợi lý tưởng cho nhà xưởng gia công nhỏ",
    price: "29 tỷ",
    area: "571,3 m²",
    location: "Quận 2, Hồ Chí Minh",
    date: "Đăng hôm nay",
    image: Image
  },
  {
    id: 2,
    title: "Căn hộ 3PN chung cư cao cấp, view sông Sài Gòn",
    price: "5,2 tỷ",
    area: "90 m²",
    location: "Quận 7, Hồ Chí Minh",
    date: "Đăng 2 ngày trước",
    image: Image
  },
  {
    id: 3,
    title: "Nhà phố 2 tầng gần trung tâm, thuận tiện di chuyển",
    price: "12 tỷ",
    area: "120 m²",
    location: "Quận Bình Thạnh, Hồ Chí Minh",
    date: "Đăng tuần trước",
    image: Image
  },
  {
    id: 4,
    title: "Biệt thự sân vườn 500m2, đầy đủ nội thất",
    price: "25 tỷ",
    area: "500 m²",
    location: "Quận 9, Hồ Chí Minh",
    date: "Đăng hôm qua",
    image: Image
  },
  {
    id: 5,
    title: "Nhà mặt tiền đường lớn, tiện kinh doanh",
    price: "18 tỷ",
    area: "150 m²",
    location: "Quận 1, Hồ Chí Minh",
    date: "Đăng 3 ngày trước",
    image: Image
  },
  {
    id: 6,
    title: "Chung cư mini 2PN, full nội thất, giá tốt",
    price: "2,8 tỷ",
    area: "65 m²",
    location: "Quận Gò Vấp, Hồ Chí Minh",
    date: "Đăng 5 ngày trước",
    image: Image
  },
  {
    id: 7,
    title: "Biệt thự nghỉ dưỡng ven sông, khu an ninh",
    price: "30 tỷ",
    area: "600 m²",
    location: "Thủ Đức, Hồ Chí Minh",
    date: "Đăng 1 tuần trước",
    image: Image
  },
  {
    id: 8,
    title: "Căn hộ studio dành cho người trẻ, giá rẻ",
    price: "1,5 tỷ",
    area: "40 m²",
    location: "Quận Tân Bình, Hồ Chí Minh",
    date: "Đăng hôm nay",
    image: Image
  }
];

const RealEstateForYou = () => {
  return (
    <div className="w-full">
      <Title title={"Bất động sản dành cho bạn"} />
      <div className="w-full px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {properties.map((property) => (
          <div key={property.id} className="w-full rounded-md bg-white shadow-lg hover:rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
            <img src={property.image} alt={property.title} className="rounded-lg w-full h-48 object-cover" />
            <h3 className="font-semibold text-sm px-2 py-2">{property.title}</h3>
            <div className="w-full flex px-2 gap-5">
              <span className="font-semibold text-sm text-red-600">{property.price}</span>
              <span className="font-semibold text-sm text-red-600">{property.area}</span>
            </div>
            <div className="w-full flex gap-2 px-2 items-center pt-1 text-sm">
              <FiMapPin />
              <span>{property.location}</span>
            </div>
            <div className="w-full flex items-center justify-between px-2 py-5">
              <span>{property.date}</span>
              <span className="w-8 relative cursor-pointer group flex items-center justify-center h-8 border rounded-lg">
                <AiOutlineHeart className="text-2xl" />
                <span className="py-1 absolute top-9 opacity-0 group-hover:opacity-100 left-[-50px] text-center w-[130px] px-2 text-sm bg-slate-900 text-white">Bấm để lưu tin</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default RealEstateForYou;
