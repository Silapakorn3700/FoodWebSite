import React from "react";

const Contact = () => (
  <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl text-center max-w-xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">ติดต่อเรา</h2>
    <p className="text-lg text-gray-600 mb-2">
      หากมีข้อสงสัยหรือข้อเสนอแนะ ติดต่อเราได้ตามช่องทางด้านล่าง
    </p>
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-center space-x-2">
        <span className="font-semibold text-gray-700">อีเมล:</span>
        <a
          href="mailto:contact@tasteoftheworld.com"
          className="text-orange-600 hover:underline"
        >
          contact@tasteoftheworld.com
        </a>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <span className="font-semibold text-gray-700">โทรศัพท์:</span>
        <a href="tel:+66812345678" className="text-orange-600 hover:underline">
          999-999-9999
        </a>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <span className="font-semibold text-gray-700">ที่อยู่:</span>
        <span>นครปฐม ประเทศไทย</span>
      </div>
    </div>
  </div>
);

export default Contact;
