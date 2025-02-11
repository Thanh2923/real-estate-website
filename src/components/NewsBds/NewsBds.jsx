import { useState, useEffect } from "react";
import { NewsBdsData } from "../../untils";
import Logo from '../../assets/images/logonewsbds.jpg';

const NewsBds = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeNews = NewsBdsData.find((news) => news.id === activeCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % activeNews.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeCategory, activeNews]);

  return (
    <section className="w-full flex justify-center">
      <div className="lg:w-[70%] w-full">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 font-bold text-xl">
          {NewsBdsData.map((news) => (
            <button
              key={news.id}
              onClick={() => {
                setActiveCategory(news.id);
                setActiveImageIndex(0);
              }}
              className={`px-5 py-3 hover:border-b-red-600 hover:border-b-2 ${
                activeCategory === news.id ? "border-b-red-600 border-b-2" : "text-gray-500"
              }`}
            >
              {news.name}
            </button>
          ))}
        </div>

        {activeNews && (
          <div className="grid cursor-pointer grid-cols-2 gap-5 py-5">
            <div>
              <img src={activeNews.images[activeImageIndex]} className="rounded-md" alt="Hình ảnh" />
              <h2 className="text-slate-900 font-semibold py-3">{activeNews.description[activeImageIndex]}</h2>
            </div>

            <div>
              {activeNews.description.map((desc, index) => (
                <p
                  key={index}
                  className={`py-2 border-b ${
                    index === activeImageIndex ? "text-red-600 font-semibold" : "text-gray-800"
                  }`}
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-[30%] lg:block hidden px-[50px] py-10">
        <img src={Logo} alt="Logo" />
      </div>
    </section>
  );
};

export default NewsBds;
