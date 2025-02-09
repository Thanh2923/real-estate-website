import Image from '../../assets/images/ttpage.jpg'
const NewsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">
        Tin tức bất động sản mới nhất
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ liệu lớn về giá, giao dịch, nguồn cung - cầu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bài viết lớn */}
        <div className="md:col-span-2 relative">
          <img src={Image} alt="News" width={800} height={400} className="rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
            <p className="text-sm">05/02/2025 14:00 • Tin tức</p>
            <h3 className="text-lg font-bold">
              BKIM - Phát Triển & Vận Hành Các Dự Án BĐS Công Nghiệp Trên Khắp Việt Nam
            </h3>
            <p className="text-sm hidden md:block">
              Trong bối cảnh thị trường bất động sản công nghiệp Việt Nam phát triển mạnh mẽ, BKIM nổi lên như một đối tác tin cậy...
            </p>
          </div>
        </div>
        {/* Danh sách tin nhỏ */}
        <div className="flex flex-col gap-4">
          {[
            {
              date: "05/02/2025 13:50",
              title: "Giải Mã Thị Trường Bất Động Sản Năm 2025"
            },
            {
              date: "05/02/2025 08:10",
              title: "Diện Mạo Của Phân Khúc Bất Động Sản Thương Mại, Bán Lẻ Và Văn Phòng Trong Năm 2025"
            },
            {
              date: "04/02/2025 11:10",
              title: "Bình Dương Dồi Dào Nguồn Cung Dự Án Mới Trong Quý 1/2025"
            }
          ].map((news, index) => (
            <div key={index} className="border-b pb-2 last:border-none">
              <p className="text-sm text-gray-500">{news.date} • Tin tức</p>
              <h4 className="text-base font-semibold hover:text-red-600 cursor-pointer">
                {news.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
