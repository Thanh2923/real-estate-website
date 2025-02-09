import Title from "../Title/Title";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Pagination } from "../Pagination/Pagination";
import { propertiesData } from "../../untils/propertiesData";

const RealEstateForYou = () => {
  return (
    <div className="w-full">
      <Title title={"Bất động sản dành cho bạn"} />
      <div className="w-full cursor-pointer px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-5">
        { propertiesData && propertiesData.map((property) => (
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
