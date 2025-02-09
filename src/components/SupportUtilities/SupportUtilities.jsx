import { FaCalculator, FaHouseUser, FaPercentage, FaSun } from "react-icons/fa";
import Title from "../Title/Title";

const SupportUtilities = () => {
  const utilities = [
    { id: 1, icon: <FaHouseUser className="text-cyan-500 text-4xl" />, title: "Xem tuổi xây nhà" },
    { id: 2, icon: <FaCalculator className="text-orange-500 text-4xl" />, title: "Chi phí làm nhà" },
    { id: 3, icon: <FaPercentage className="text-purple-500 text-4xl" />, title: "Tính lãi suất" },
    { id: 4, icon: <FaSun className="text-yellow-500 text-4xl" />, title: "Tư vấn phong thủy" },
  ];

  return (
    <div className="w-full py-6">
        <Title title={"Hỗ trợ tiện ích"}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {utilities.map((utility) => (
          <div
            key={utility.id}
            className="flex  items-center gap-3 p-4 border rounded-lg shadow-md bg-white hover:shadow-xl transition-all cursor-pointer"
          >
            {utility.icon}
            <span className="font-medium text-gray-800">{utility.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportUtilities;
