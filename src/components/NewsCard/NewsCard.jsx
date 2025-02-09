import Image from '../../assets/images/newcard1.jpg'
import Image2 from '../../assets/images/newcard2.jpg'
import Image3 from '../../assets/images/newcard3.jpg'
import Image4 from '../../assets/images/newcard4.jpg'

const newsData = [
    {
      id: 1,
      category: "TIN TỨC",
      date: "04/02/2025 07:10",
      author: "Nguyễn Nam",
      title: "Nhà Ở Xã Hội 'Hụt Hơi' Trong Năm 2024, Kì Vọng Tươi Sáng Năm 2025",
      content:
        "Dù phân khúc nhà ở xã hội đã có sự cải thiện mạnh về nguồn cung trong năm 2024...",
      image: Image,
      tags: ["Nhà ở xã hội"],
    },
    {
      id: 2,
      category: "TIN TỨC",
      date: "03/02/2025 17:33",
      author: "Nguyễn Nam",
      title: "Mô Hình TOD: Lực Đẩy Của Thị Trường Bất Động Sản Việt Nam",
      content:
        "Phát triển đô thị lấy giao thông công cộng làm trung tâm (Transit Oriented Development - TOD)...",
      image: Image2,
      tags: ["Bất động sản Hà Nội", "Bất động sản TP.HCM", "Thị trường bất động sản 2025"],
    },
    {
      id: 3,
      category: "PHÂN TÍCH",
      date: "02/02/2025 10:20",
      author: "Trần Minh",
      title: "Bất Động Sản Công Nghiệp 2025: Cơ Hội Và Thách Thức",
      content:
        "Việt Nam tiếp tục thu hút đầu tư vào bất động sản công nghiệp, nhưng cũng đối mặt với nhiều thách thức...",
      image: Image3,
      tags: ["Bất động sản công nghiệp", "Đầu tư"],
    },
    {
      id: 4,
      category: "CHÍNH SÁCH",
      date: "01/02/2025 15:45",
      author: "Lê Hoàng",
      title: "Chính Sách Thuế Mới Ảnh Hưởng Thế Nào Đến Nhà Đầu Tư?",
      content:
        "Những thay đổi trong chính sách thuế có thể tác động lớn đến thị trường bất động sản trong năm 2025...",
      image: Image4,
      tags: ["Chính sách thuế", "Nhà đầu tư"],
    },
  ];
  
const NewsCard = () => {
  
    return (
      <div className="max-w-4xl cursor-pointer mx-auto p-4">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-4 flex flex-col md:flex-row"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full md:w-1/3 h-40 md:h-auto object-cover"
            />
            <div className="p-4 flex-1">
              <span className="text-gray-500 text-xs">{news.date} • {news.author}</span>
              <h2 className="text-lg font-bold mt-1">{news.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{news.content}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {news.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default NewsCard;
  