import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center bg-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col items-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-700 mb-4">ยินดีต้อนรับสู่ Taste of the World</h2>
    <p className="text-lg sm:text-xl font-medium text-gray-600 mb-6 max-w-2xl">
      เปิดประตูสู่ครัวโลก: ลิ้มรสอาหารพื้นบ้านแท้ๆ จากทุกมุมโลก
    </p>
    <img
      src="https://lh3.googleusercontent.com/proxy/74NlA5raMtsVDASK9OTvN-jr3MNrJLG_89dtfybzSk4xg3TCYsQpP6ychLickL2ini2bvB90QiGkNI2ofp_gYwO4EgZLe4xL5ukt_qlie-IMh8nt8sCdA3nvU4Ff-yj55w"
      alt="A variety of delicious foods"
      className="w-full h-auto rounded-xl shadow-lg mb-8"
    />
    <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl">
      เว็บไซต์นี้รวบรวมเมนูอาหารพื้นบ้านที่โด่งดังจากทั่วโลก พร้อมส่วนผสมและวิธีทำอย่างละเอียด ให้คุณได้ลองสร้างสรรค์เมนูโปรดด้วยตัวเอง
    </p>
    <Link
      to="/content"
      className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
                 bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      สำรวจเมนูอาหาร
    </Link>
  </div>
);

export default Home;