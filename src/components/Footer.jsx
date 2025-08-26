import React from 'react';

const Footer = () => (
  <footer className="bg-orange-500 p-6 sm:p-8 rounded-t-3xl shadow-lg mt-8 text-center text-white text-sm">
    <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-8 space-y-4 sm:space-y-0">
      <div className="text-sm">
        © 2025 Taste of the World. All rights reserved.
      </div>

      <div className="flex flex-col items-center sm:items-end text-sm space-y-2">
        <h4 className="font-semibold text-white text-base">ช่องทางการติดต่อ</h4>
        <p className="text-orange-100"><strong>อีเมล:</strong> contact@tasteoftheworld.com</p>
        <p className="text-orange-100"><strong>โทรศัพท์:</strong> 999-999-9999</p>
        <p className="text-orange-100"><strong>ที่อยู่:</strong> นครปฐม ประเทศไทย</p>
      </div>
    </div>
  </footer>
);

export default Footer;
