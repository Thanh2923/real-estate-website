import { useState, useEffect } from 'react';
import Image1 from '../../assets/images/locahcm.jpg';
import Image2 from '../../assets/images/locahcm2.jpg';
import Image3 from '../../assets/images/locahcm3.jpg';
import Image4 from '../../assets/images/locahdn1.jpg';
import Image5 from '../../assets/images/locahdn2.jpg';
import Image6 from '../../assets/images/locahdn3.jpg';
import Image7 from '../../assets/images/locahbd1.jpg';
import Image8 from '../../assets/images/locahbd2.jpg';
import Image9 from '../../assets/images/locahbd3.jpg';
import Image10 from '../../assets/images/locahhn1.jpg';
import Image11 from '../../assets/images/locahhn2.jpg';
import Image12 from '../../assets/images/locahhn3.jpg';
import Image13 from '../../assets/images/locahdnai1.jpg';
import Image14 from '../../assets/images/locahdnai2.jpg';
import Image15 from '../../assets/images/locahdnai3.jpg';
import Title from '../Title/Title';

export const RealEstateByLocation = () => {
  const locations = [
    {
      name: 'TP. Hồ Chí Minh',
      images: [Image1, Image2, Image3],
      posts: '14.257 tin đăng',
    },
    {
      name: 'TP. Đà Nẵng',
      images: [Image4, Image5, Image6], 
      posts: '10.150 tin đăng',
    },
    {
      name: 'Bình Dương',
      images: [Image7, Image8, Image9], 
      posts: '12.345 tin đăng',
    },
    {
      name: 'TP. Hà Nội',
      images: [Image10, Image11, Image12], 
      posts: '8.765 tin đăng',
    },
    {
      name: 'Đồng Nai',
      images: [Image13, Image14, Image15], 
      posts: '9.123 tin đăng',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    new Array(locations.length).fill(0) 
  );

  useEffect(() => {
    const intervals = locations.map((_, index) =>
      setInterval(() => {
        setCurrentImageIndex(prev => {
          const newIndexes = [...prev];
          newIndexes[index] = (newIndexes[index] + 1) % locations[index].images.length;
          return newIndexes;
        });
      }, 3000)
    );

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="w-full">
      <Title title={"Bất động sản theo địa điểm"} />
      <div className='w-full cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2'>
        
        <div className="w-full  relative">
          <img src={locations[0].images[currentImageIndex[0]]} alt="" className="w-full rounded-md" />
          <div className="absolute z-10 text-white font-bold top-2 left-3 px-4 py-2">
            <h3>{locations[0].name}</h3>
            <span className='text-sm'>{locations[0].posts}</span>
          </div>
        </div>

      
      <div className='w-full grid md:grid-cols-2 gap-5 lg:grid-cols-2'>
      {locations.slice(1).map((location, index) => (
          <div key={index} className="w-full md:col-span-1 relative">
            <img src={location.images[currentImageIndex[index + 1]]} alt="" className="w-full rounded-md" />
            <div className="absolute z-10 text-white font-bold top-2 left-3 px-4 py-2">
              <h3>{location.name}</h3>
              <span className='text-sm'>{location.posts}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
