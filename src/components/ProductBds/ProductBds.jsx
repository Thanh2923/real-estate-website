import { useState } from "react";
import Image from "../../assets/images/bds2.jpg";
import Avt from "../../assets/images/avtadmin.png";
import IconZalo from "../../assets/images/iconzalo.png";
import Image2 from "../../assets/images/bds1-1.jpg";
import Image3 from "../../assets/images/bds1-2.jpg";

const images = [Image3, Image2, Image];

export default function ProductBds() {
  const [showPhone, setShowPhone] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]); // Ảnh đang hiển thị

  return (
    <div className="container mx-auto p-4 w-full grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      {/* Left - Image Gallery */}
      <div className="md:col-span-2">
        <div className="w-full">
          <img
            src={selectedImage}
            alt="Project"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="mt-4 flex space-x-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index}`}
              className={`w-20 h-16 object-cover cursor-pointer rounded-md border 
              ${selectedImage === src ? "border-blue-500" : "border-gray-300"} 
              hover:border-blue-500 transition`}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* Right - Seller Info */}
      <div className="bg-white p-4 rounded-xl shadow-md w-full">
        <div className="flex items-center space-x-4">
          <img src={Avt} alt="Agent" className="w-14 h-14 rounded-full object-cover" />
          <div>
            <h2 className="text-lg font-bold">Nguyễn Văn Thành</h2>
            <p className="text-sm text-gray-500">Xem thêm 21 tin khác</p>
          </div>
        </div>

        <button
          className="w-full bg-green-500 text-white py-2 rounded-lg mt-4"
          onClick={() => setShowPhone(!showPhone)}
        >
          {showPhone ? "0931 247 957" : "0931 247 *** - Hiện số"}
        </button>

        <div className="mt-4 space-y-2">
          <button className="w-full border py-2 rounded-lg flex items-center justify-center">
            <img src={IconZalo} alt="Zalo" className="w-5 h-5 mr-2" /> Chat qua Zalo
          </button>
          <button className="w-full border py-2 rounded-lg">Gửi email</button>
          <button className="w-full border py-2 rounded-lg">Yêu cầu liên hệ lại</button>
        </div>
      </div>
    </div>
  );
}
