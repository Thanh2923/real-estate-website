
const InfoProductBds = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <span className="hover:underline cursor-pointer">Bán</span> / 
        <span className="hover:underline cursor-pointer"> Hà Nội</span> / 
        <span className="hover:underline cursor-pointer"> Đan Phượng</span> / 
        <span className="text-black"> Nhà biệt thự, liền kề tại Vinhomes Wonder Park</span>
      </nav>
      
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Bán BT Vinhomes Wonder Park, giá thỏa thuận, 150m2, view đẹp, Đan Phượng, Hà Nội
      </h1>
      <p className="text-gray-500 mb-4">Vinhomes Wonder Park, Tân Hội, Đan Phượng, Hà Nội</p>
      
      {/* Info Section */}
      <div className="bg-gray-100 p-4 rounded-lg flex justify-between mb-6">
        <div>
          <p className="text-gray-500">Mức giá</p>
          <p className="text-lg font-semibold">14 tỷ</p>
        </div>
        <div>
          <p className="text-gray-500">Diện tích</p>
          <p className="text-lg font-semibold">150 m²</p>
        </div>
        <div>
          <p className="text-gray-500">Phòng ngủ</p>
          <p className="text-lg font-semibold">6 PN</p>
        </div>
      </div>
      
      {/* Description */}
      <h2 className="text-lg font-semibold mb-2">Thông tin mô tả</h2>
      <p className="text-gray-700 mb-6">
        Nằm tại Vinhomes Wonder Park, Tân Hội, Đan Phượng, Hà Nội, biệt thự này có diện tích 150m²,
        đem đến không gian sống thoáng đãng và tiện nghi. Giá thỏa thuận, bất động sản này hứa hẹn sẽ
        là nơi lý tưởng cho những ai muốn tận hưởng cuộc sống hiện đại và tiện nghi.
      </p>
      
      {/* Actions */}
      <div className="flex space-x-4 text-gray-500">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span>🔗</span>
          <span>Chia sẻ</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-red-500">
          <span>⚠️</span>
          <span>Báo cáo</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-900">
          <span>❤️</span>
          <span>Yêu thích</span>
        </button>
      </div>
    </div>
  );
};

export default InfoProductBds;
