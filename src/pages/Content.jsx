import React, { useState } from 'react';

const FoodCard = ({ food }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{food.title} - {food.country}</h2>
      <img src={food.image} alt={food.title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <p className="text-gray-600 mb-4">{food.description}</p>

      <h3
        className="text-xl font-semibold text-gray-700 mt-6 mb-2 cursor-pointer select-none flex items-center justify-between"
        onClick={() => setShowIngredients(!showIngredients)}
      >
        ส่วนผสม
        <span className="text-gray-500 text-sm">{showIngredients ? 'ซ่อน' : 'แสดง'}</span>
      </h3>
      {showIngredients && (
        <ul className="list-disc list-inside text-gray-600 space-y-1 transition-all duration-300">
          {food.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <h3
        className="text-xl font-semibold text-gray-700 mt-6 mb-2 cursor-pointer select-none flex items-center justify-between"
        onClick={() => setShowInstructions(!showInstructions)}
      >
        วิธีทำ
        <span className="text-gray-500 text-sm">{showInstructions ? 'ซ่อน' : 'แสดง'}</span>
      </h3>
      {showInstructions && (
        <ol className="list-decimal list-inside text-gray-600 space-y-2 transition-all duration-300">
          {food.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

const Content = () => {
  const [selectedRegion, setSelectedRegion] = useState('ทั้งหมด');
  const categorizedFoodData = {
    'เอเชีย': [
      {
        id: 1,
        title: "ซูชิ",
        country: "ญี่ปุ่น",
        image: "https://mrtsbakery.com.au/cdn/shop/articles/unnamed_388f2e43-0619-438d-9212-2539bf2c70d5_800x.jpg?v=1578206798",
        description: "หนึ่งในเมนูที่โด่งดังที่สุดของญี่ปุ่น ศิลปะแห่งการผสมผสานข้าวที่ปรุงรสอย่างพิถีพิถันกับวัตถุดิบสดใหม่ ไม่ว่าจะเป็นปลาดิบ, ไข่หวาน, หรือแตงกวา",
        ingredients: [
          "ข้าวญี่ปุ่น",
          "น้ำส้มสายชูสำหรับซูชิ (Sushi Vinegar)",
          "สาหร่ายแผ่น (Nori)",
          "ปลาดิบสด หรือวัตถุดิบอื่นๆ (ไข่หวาน, ปูอัด, แตงกวา)",
          "วาซาบิ, โชยุ",
        ],
        instructions: [
          "หุงข้าวญี่ปุ่นให้สุก จากนั้นนำมาผสมกับน้ำส้มสายชูสำหรับซูชิ",
          "นำข้าวมาปั้นเป็นก้อนพอดีคำ หรือจะปูบนสาหร่ายสำหรับทำมากิโรล",
          "วางปลาดิบหรือวัตถุดิบอื่นๆ ที่ต้องการลงบนข้าว",
          "ม้วนเป็นโรลหากทำมากิ",
          "หั่นเป็นชิ้นพอดีคำและจัดจานพร้อมวาซาบิและโชยุ",
        ],
      },
      {
        id: 2,
        title: "ผัดไทย",
        country: "ไทย",
        image: "data:image/jpeg;base64,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",
        description: "เมนูเส้นจานเด็ดของไทยที่โด่งดังไปทั่วโลก เส้นจันท์เหนียวนุ่ม ผัดกับซอสสูตรพิเศษรสชาติเปรี้ยวหวานเค็ม โรยด้วยกุ้งแห้ง ถั่วงอก และต้นหอม",
        ingredients: [
          "เส้นจันท์",
          "เต้าหู้เหลือง",
          "กุ้งแห้ง",
          "ถั่วงอก",
          "ต้นหอม",
          "ไข่ไก่",
          "ถั่วลิสงคั่วบด",
          "น้ำมะขามเปียก",
          "น้ำปลา",
          "น้ำตาลปี๊บ",
        ],
        instructions: [
          "แช่เส้นจันท์ในน้ำจนนุ่ม",
          "ตั้งกระทะใส่น้ำมัน ผัดเต้าหู้เหลืองและกุ้งแห้งจนหอม",
          "ใส่เส้นที่เตรียมไว้ลงไปผัด ตามด้วยซอสผัดไทย",
          "เขี่ยเส้นไปไว้ข้างกระทะ ตอกไข่ลงไปแล้วยีให้แตก",
          "นำเส้นมาคลุกเคล้ากับไข่ให้เข้ากัน",
          "ใส่ถั่วงอกและต้นหอมลงไปผัดเร็วๆ แล้วตักใส่จาน",
          "เสิร์ฟพร้อมถั่วลิสงคั่วบด, พริกป่น และมะนาว",
        ],
      },
      {
        id: 3,
        title: "เฝอ",
        country: "เวียดนาม",
        image: "https://howtocookhub.com/wp-content/uploads/2021/07/%E0%B9%80%E0%B8%9D%E0%B8%AD-%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%94%E0%B8%99%E0%B8%B2%E0%B8%A1.jpg",
        description: "ซุปก๋วยเตี๋ยวที่มีรสชาติเป็นเอกลักษณ์ของเวียดนาม ประกอบด้วยน้ำซุปหอมหวาน เส้นเฝอนุ่มๆ และเนื้อสัตว์ที่ปรุงอย่างพิถีพิถัน เสิร์ฟพร้อมผักและสมุนไพรสด",
        ingredients: [
          "เส้นเฝอ",
          "เนื้อวัว หรือเนื้อไก่",
          "หัวหอม, ขิง",
          "โป๊ยกั๊ก, อบเชย",
          "น้ำปลา",
          "ผักชีฝรั่ง, โหระพา",
          "ถั่วงอก, มะนาว",
        ],
        instructions: [
          "เคี่ยวน้ำซุปกระดูกเนื้อหรือไก่กับเครื่องเทศจนหอม",
          "ลวกเส้นเฝอในน้ำร้อนจนนุ่ม",
          "จัดเส้นและเนื้อสัตว์ที่สไลซ์บางๆ ลงในชาม",
          "ราดน้ำซุปที่ร้อนจัดลงไป",
          "เสิร์ฟพร้อมผักและสมุนไพรสด",
        ],
      },
      {
        id: 4,
        title: "เป็ดปักกิ่ง",
        country: "จีน",
        image: "https://static.wixstatic.com/media/47b560_ba87d0d1078443e5935ebe7443f36515~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/47b560_ba87d0d1078443e5935ebe7443f36515~mv2.jpg",
        description: "เมนูขึ้นชื่อจากปักกิ่ง หนังเป็ดอบกรอบสีน้ำตาลทอง เนื้อนุ่มชุ่มฉ่ำ เสิร์ฟพร้อมแป้งบางๆ และซอสหวาน",
        ingredients: [
          "เป็ดปักกิ่ง",
          "น้ำผึ้ง, ซีอิ๊วขาว",
          "แป้งสำหรับห่อ",
          "ซอสเป็ด",
          "แตงกวา, ต้นหอม",
        ],
        instructions: [
          "เตรียมเป็ดและหมักด้วยเครื่องปรุง",
          "นำไปแขวนเพื่อผึ่งลมให้แห้ง แล้วอบจนหนังกรอบและมีสีสวย",
          "หั่นหนังเป็ดเป็นชิ้นพอดีคำ",
          "เสิร์ฟพร้อมแป้งห่อ, ซอสหวาน, แตงกวา และต้นหอม",
        ],
      },
      {
        id: 5,
        title: "กิมจิ",
        country: "เกาหลีใต้",
        image: "https://s.isanook.com/he/0/ud/6/30945/kimchi.jpg",
        description: "เครื่องเคียงยอดนิยมของเกาหลี ทำจากผักกาดขาวหมักกับเครื่องปรุงรสเผ็ดและเค็ม",
        ingredients: [
          "ผักกาดขาว",
          "เกลือ",
          "พริกป่นเกาหลี (โคชูการู)",
          "กระเทียม",
          "ขิง",
          "น้ำตาล",
          "น้ำปลา",
          "ต้นหอม",
          "หัวไชเท้า",
        ],
        instructions: [
          "หั่นผักกาดขาวแล้วแช่ในน้ำเกลือประมาณ 6-8 ชั่วโมง",
          "ล้างผักกาดขาวให้สะอาดแล้วพักให้สะเด็ดน้ำ",
          "ผสมพริกป่น, กระเทียม, ขิง, น้ำตาล, น้ำปลา และส่วนผสมอื่นๆ ให้เข้ากัน",
          "นำส่วนผสมที่ได้ไปคลุกกับผักกาดขาวให้ทั่ว",
          "บรรจุใส่ภาชนะปิดสนิทแล้วนำไปหมักไว้ในอุณหภูมิห้อง 1-2 วัน",
          "นำไปเก็บในตู้เย็นและสามารถนำมารับประทานได้ทันที",
        ],
      },
    ],
    'ยุโรป': [
      {
        id: 6,
        title: "สปาเกตตีคาโบนารา",
        country: "อิตาลี",
        image: "https://cdn-cms.cpbrandsite.com/web/recipe/hihmisxaaxdqzklcmtndr2pua07zhxszmh3b3top.png",
        description: "เมนูคลาสสิกจากกรุงโรมที่อร่อยและทำง่ายอย่างเหลือเชื่อ! เส้นสปาเกตตีเหนียวนุ่มคลุกเคล้ากับซอสครีมที่ทำจากไข่และชีส พร้อมพริกไทยดำที่โรยหน้า",
        ingredients: [
          "สปาเกตตี",
          "ไข่ไก่",
          "ชีส Pecorino Romano หรือ Parmesan",
          "เบคอน",
          "พริกไทยดำ",
          "เกลือ",
        ],
        instructions: [
          "ต้มเส้นสปาเกตตีตามคำแนะนำบนซอง",
          "หั่นเบคอนเป็นชิ้นเล็กๆ และนำไปเจียวในกระทะจนกรอบ",
          "ตีไข่ไก่กับชีสและพริกไทยดำเข้าด้วยกัน",
          "เมื่อเส้นสุก ให้นำเส้นมาคลุกกับเบคอนในกระทะ จากนั้นปิดไฟ",
          "เทส่วนผสมไข่ลงไปคลุกกับเส้นอย่างรวดเร็ว (ความร้อนจากเส้นจะทำให้ไข่สุกพอดี ไม่เป็นก้อน)",
          "ตกแต่งด้วยพริกไทยดำและชีสขูดเพิ่ม",
        ],
      },
      {
        id: 7,
        title: "ครัวซองต์",
        country: "ฝรั่งเศส",
        image: "https://cdn.pixabay.com/photo/2013/04/07/21/30/bread-101636_640.jpg",
        description: "ขนมอบรูปจันทร์เสี้ยวที่มีชั้นแป้งบางกรอบและเนยที่หอมอร่อยเป็นเอกลักษณ์ เป็นอาหารเช้ายอดนิยมของฝรั่งเศส",
        ingredients: [
          "แป้งสาลี",
          "เนย",
          "ยีสต์",
          "น้ำตาล",
          "นม",
          "เกลือ",
        ],
        instructions: [
          "ทำโดด้วยการผสมแป้ง น้ำตาล เกลือ และยีสต์",
          "นวดโดจนเนียน จากนั้นนำไปพัก",
          "รีดโดให้บาง แล้วนำเนยแช่เย็นมาวางและพับทับหลายๆ ชั้น",
          "พักโดในตู้เย็นระหว่างการพับแต่ละครั้ง",
          "เมื่อได้ชั้นที่ต้องการแล้ว นำมารีดเป็นแผ่นแล้วตัดเป็นสามเหลี่ยม",
          "ม้วนขึ้นรูปเป็นครัวซองต์แล้วนำไปอบ",
        ],
      },
      {
        id: 8,
        title: "ปาเอยา",
        country: "สเปน",
        image: "https://th.kenwoodworld.com/wp-content/uploads/sites/8/2023/06/539x330-5.jpeg",
        description: "เมนูข้าวสัญชาติสเปนที่ปรุงในกระทะแบนขนาดใหญ่ ปรุงรสด้วยหญ้าฝรั่น มีส่วนผสมของอาหารทะเล เนื้อสัตว์ และผัก",
        ingredients: [
          "ข้าว Arroz Bomba",
          "หญ้าฝรั่น",
          "น้ำซุป",
          "เนื้อสัตว์ (ไก่, หมู, ไส้กรอก)",
          "อาหารทะเล (กุ้ง, หอย)",
          "มะเขือเทศ, พริกหยวก",
          "ถั่วเขียว",
        ],
        instructions: [
          "ผัดเนื้อสัตว์และผักในกระทะ Paella pan",
          "ใส่หญ้าฝรั่นและมะเขือเทศลงไปผัด",
          "ใส่ข้าวลงไปผัดกับส่วนผสมทั้งหมด",
          "เทน้ำซุปตามลงไปให้ท่วมข้าว และปล่อยให้เดือด",
          "ใส่หอยและกุ้งลงไป แล้วปรุงรสด้วยเกลือและพริกไทย",
          "ปล่อยให้ข้าวสุกและน้ำซุปแห้งจนเหลือส่วนที่กรอบติดก้นกระทะ",
        ],
      },
      {
        id: 9,
        title: "ชนิทเซล",
        country: "เยอรมนี",
        image: "https://png.pngtree.com/background/20240104/original/pngtree-german-schnitzel-preparation-main-menu-photo-picture-image_7108860.jpg",
        description: "เนื้อบางทุบจนแบน ชุบเกล็ดขนมปังแล้วนำไปทอดในน้ำมันร้อนๆ จนกรอบนอกนุ่มใน เป็นอาหารหลักที่ได้รับความนิยมอย่างมาก",
        ingredients: [
          "เนื้อหมูหรือเนื้อลูกวัว",
          "แป้งสาลี",
          "ไข่",
          "เกล็ดขนมปัง",
          "เกลือ, พริกไทย",
          "เลมอน",
        ],
        instructions: [
          "ทุบเนื้อให้บาง",
          "คลุกเนื้อกับแป้ง, ชุบไข่ และคลุกกับเกล็ดขนมปังตามลำดับ",
          "ทอดในน้ำมันร้อนๆ จนสุกและเหลืองกรอบทั้งสองด้าน",
          "เสิร์ฟพร้อมมะนาวฝาน",
        ],
      },
      {
        id: 10,
        title: "ฟิชแอนด์ชิปส์",
        country: "อังกฤษ",
        image: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/2NLKENNqCkdh9SqQScj1du.jpeg",
        description: "เมนูยอดนิยมของชาวอังกฤษ ปลาทอดกรอบเนื้อนุ่มเสิร์ฟพร้อมเฟรนช์ฟรายที่ปรุงรสอย่างลงตัว",
        ingredients: [
          "เนื้อปลา Cod หรือ Haddock",
          "แป้งสาลี",
          "เบียร์",
          "มันฝรั่ง",
          "เกลือ",
          "น้ำส้มสายชูมอลต์",
        ],
        instructions: [
          "หั่นมันฝรั่งเป็นแท่งแล้วนำไปทอดจนกรอบ",
          "ผสมแป้งกับเบียร์เพื่อทำ batter",
          "นำเนื้อปลามาจุ่มใน batter แล้วนำไปทอดจนเหลืองกรอบ",
          "จัดปลาและมันฝรั่งทอดใส่จาน",
          "เสิร์ฟพร้อมน้ำส้มสายชูมอลต์และซอสทาร์ทาร์",
        ],
      },
    ],
    'อเมริกาเหนือ': [
      {
        id: 11,
        title: "ทาโก้",
        country: "เม็กซิโก",
        image: "data:image/jpeg;base64,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",
        description: "อาหารประจำชาติของเม็กซิโก แผ่นแป้งตอติญ่ากรอบหรือนุ่มสอดไส้เนื้อสัตว์ปรุงรส ผักสด และซัลซ่ารสจัดจ้าน",
        ingredients: [
          "แผ่นแป้งตอติญ่า",
          "เนื้อสัตว์ (เนื้อวัว, หมู, ไก่ หรือปลา)",
          "หัวหอม",
          "มะเขือเทศ",
          "ผักกาดหอม",
          "ซัลซ่า",
          "กวาคาโมเล",
          "ชีส",
        ],
        instructions: [
          "ปรุงรสเนื้อสัตว์ตามต้องการและนำไปย่างหรือผัดจนสุก",
          "อุ่นแผ่นแป้งตอติญ่าในกระทะหรือไมโครเวฟ",
          "นำเนื้อสัตว์และส่วนผสมอื่นๆ ที่หั่นเตรียมไว้มาใส่ในแผ่นแป้ง",
          "พับแผ่นแป้งครึ่งหนึ่งและจัดจาน",
          "เสิร์ฟพร้อมซัลซ่า กวาคาโมเล และชีส",
        ],
      },
      {
        id: 12,
        title: "แฮมเบอร์เกอร์",
        country: "สหรัฐอเมริกา",
        image: "https://static.amarintv.com/images/upload/editor/source/Deaw2024/22042524/64/927960.jpg",
        description: "อาหารจานด่วนยอดนิยมทั่วโลก ขนมปังเบอร์เกอร์ที่สอดไส้เนื้อบดปรุงรส ผักกาดหอม มะเขือเทศ ชีส และซอส",
        ingredients: [
          "ขนมปังเบอร์เกอร์",
          "เนื้อบด",
          "ผักกาดหอม",
          "มะเขือเทศ",
          "หัวหอม",
          "ชีส",
          "ซอสมะเขือเทศ, มัสตาร์ด",
        ],
        instructions: [
          "ปั้นเนื้อบดเป็นก้อนแบนๆ แล้วนำไปย่างหรือทอดจนสุก",
          "ผ่าขนมปังเบอร์เกอร์แล้วนำไปปิ้งให้ร้อน",
          "จัดเรียงผัก, ชีส, เนื้อ, และซอสตามต้องการ",
          "ปิดด้วยขนมปังอีกชิ้นและเสิร์ฟทันที",
        ],
      },
      {
        id: 13,
        title: "พูทีน",
        country: "แคนาดา",
        image: "https://api2.krua.co/wp-content/uploads/2024/01/ArticlePic_1670x1095-11-2-1024x671.jpg",
        description: "อาหารจานเด็ดจากแคนาดา ประกอบด้วยเฟรนช์ฟราย, ชีส curd, และราดด้วยน้ำเกรวี่ร้อนๆ",
        ingredients: [
          "มันฝรั่ง",
          "ชีส curd",
          "น้ำเกรวี่",
          "น้ำมันสำหรับทอด",
          "เกลือ",
        ],
        instructions: [
          "ทอดมันฝรั่งจนเป็นเฟรนช์ฟรายสีทอง",
          "เตรียมน้ำเกรวี่ให้ร้อน",
          "จัดเรียงเฟรนช์ฟรายในชาม",
          "วางชีส curd บนเฟรนช์ฟราย",
          "ราดน้ำเกรวี่ร้อนๆ ลงไปให้ทั่ว และเสิร์ฟทันที",
        ],
      },
      {
        id: 24,
        title: "จัมบาลายา",
        country: "สหรัฐอเมริกา",
        image: "https://preview.redd.it/ywa8bn50ep981.jpg?width=680&format=pjpg&auto=webp&s=f4abcfbb391b1222ed746836e1c25a4ec81c6605",
        description: "อาหารจานเดียวจากรัฐหลุยเซียนาที่ได้รับอิทธิพลจากอาหารสเปนและแอฟริกา ประกอบด้วยข้าว เนื้อสัตว์ (ไก่, ไส้กรอก Andouille), อาหารทะเล (กุ้ง), และผัก",
        ingredients: [
          "ข้าว",
          "ไส้กรอก Andouille",
          "เนื้อไก่",
          "กุ้ง",
          "หัวหอม",
          "พริกหวาน",
          "เซเลอรี",
          "ซอสมะเขือเทศ",
          "น้ำซุป",
          "เครื่องเทศ Cajun",
        ],
        instructions: [
          "ผัดไส้กรอกและเนื้อไก่ในหม้อจนสุก",
          "ใส่หัวหอม, พริกหวาน, และเซเลอรีลงไปผัดจนนุ่ม",
          "เติมเครื่องเทศ, ซอสมะเขือเทศ, และน้ำซุป",
          "ใส่ข้าวลงไปคนให้เข้ากัน",
          "ลดไฟแล้วปิดฝา เคี่ยวจนข้าวสุกและน้ำแห้ง",
          "ใส่กุ้งลงไปก่อนเสิร์ฟ",
        ],
      },
      {
        id: 15,
        title: "ซีซาร์สลัด",
        country: "เม็กซิโก",
        image: "https://www.silpa-mag.com/wp-content/uploads/2024/05/griddled-chicken-scaled.jpg",
        description: "สลัดที่คิดค้นขึ้นในเม็กซิโก ประกอบด้วยผักกาดหอมโรเมนและขนมปังกรอบคลุกเคล้ากับน้ำสลัดที่ทำจากไข่, ชีส, น้ำมันมะกอก, มะนาว, กระเทียม, และปลาแอนโชวี",
        ingredients: [
          "ผักกาดหอมโรเมน",
          "ขนมปังกรอบ",
          "ชีสพาร์เมซาน",
          "ไข่แดง",
          "น้ำมันมะกอก",
          "น้ำมะนาว",
          "กระเทียม",
          "ปลาแอนโชวี",
        ],
        instructions: [
          "ทำน้ำสลัดโดยตีไข่แดงกับกระเทียม, ปลาแอนโชวี, และน้ำมะนาว",
          "ค่อยๆ ใส่น้ำมันมะกอกลงไปในขณะที่ตีจนได้ความข้น",
          "ใส่เกลือ, พริกไทย, และชีส",
          "นำผักกาดหอมและขนมปังกรอบใส่ในชาม",
          "คลุกเคล้ากับน้ำสลัดให้ทั่ว",
          "โรยหน้าด้วยชีสพาร์เมซานเพิ่มเติม",
        ],
      },
    ],
    'อเมริกาใต้': [
      {
        id: 16,
        title: "เซบิเช่",
        country: "เปรู",
        image: "https://img.wongnai.com/p/1920x0/2022/05/27/2a9fe02023e84370bb35610751b43bef.jpg",
        description: "ปลาหรืออาหารทะเลหั่นเต๋า หมักในน้ำมะนาวหรือน้ำส้มสายชู พร้อมหัวหอมแดง, พริก และผักชี เสิร์ฟแบบเย็นๆ",
        ingredients: [
          "เนื้อปลาขาวสด",
          "น้ำมะนาว",
          "หัวหอมแดง",
          "พริก Aji Amarillo",
          "ผักชี",
          "ข้าวโพดต้ม, มันเทศต้ม",
        ],
        instructions: [
          "หั่นปลาเป็นลูกเต๋าและแช่ในน้ำมะนาว",
          "หั่นหัวหอมแดง, พริก, และผักชี",
          "นำส่วนผสมทั้งหมดมาคลุกเคล้ากับปลาที่หมักไว้",
          "ปรุงรสด้วยเกลือและเสิร์ฟพร้อมข้าวโพดและมันเทศ",
        ],
      },
      {
        id: 17,
        title: "เอมปานาดา",
        country: "อาร์เจนตินา",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aqA29oXBRlPpUqLWhWr4mBypNK8FG8_bHw&s",
        description: "ขนมแป้งอบหรือทอดสอดไส้ด้วยเนื้อสัตว์ปรุงรส, มันฝรั่ง, ไข่, และมะกอก เป็นอาหารว่างหรืออาหารจานหลักที่ยอดเยี่ยม",
        ingredients: [
          "แป้งสำหรับทำเอมปานาดา",
          "เนื้อวัวสับ",
          "หอมใหญ่",
          "เครื่องเทศ (ปาปริก้า, ยี่หร่า)",
          "ไข่ต้ม, มะกอกเขียว",
        ],
        instructions: [
          "ผัดเนื้อสับกับหอมใหญ่และเครื่องเทศ",
          "นำไส้ที่ผัดแล้วมาใส่ลงในแผ่นแป้ง",
          "พับครึ่งแล้วปิดขอบให้แน่น",
          "นำไปอบหรือทอดจนเหลืองทอง",
        ],
      },
      {
        id: 18,
        title: "เฟโจอาดา",
        country: "บราซิล",
        image: "https://img.freepik.com/premium-photo/traditional-brazilian-feijoada-with-cabbage-rice_538646-72.jpg",
        description: "สตูว์ถั่วดำที่ปรุงด้วยเนื้อหมูหลากหลายชนิด ทั้งไส้กรอก, ซี่โครง, และเนื้อเค็ม เสิร์ฟพร้อมข้าวและส้มหั่นชิ้น",
        ingredients: [
          "ถั่วดำ",
          "เนื้อหมูเค็ม, ซี่โครงหมู",
          "ไส้กรอก",
          "กระเทียม, หอมใหญ่",
          "ข้าวขาว, ส้ม",
        ],
        instructions: [
          "แช่ถั่วดำข้ามคืน",
          "ต้มถั่วดำกับเนื้อหมูจนนุ่ม",
          "ผัดกระเทียมและหอมใหญ่แล้วใส่ลงในสตูว์",
          "เคี่ยวต่อจนซุปข้น",
          "เสิร์ฟพร้อมข้าวสวยและส้มฝาน",
        ],
      },
      {
        id: 19,
        title: "อาเรปา",
        country: "โคลอมเบีย",
        image: "https://www.gourmetandcuisine.com/Images/editor_upload/_editor20220330025039_original.jpg",
        description: "แผ่นขนมปังทรงกลมทำจากแป้งข้าวโพดเนื้อนุ่ม นิยมนำไปย่างหรือทอดและสอดไส้ด้วยชีส, เนื้อสัตว์, หรือผัก",
        ingredients: [
          "แป้งข้าวโพดสำหรับทำอาเรปา",
          "น้ำอุ่น",
          "เกลือ",
          "เนย",
          "ชีส",
          "ไส้ที่ต้องการ (เนื้อฉีก, ไข่, อะโวคาโด)",
        ],
        instructions: [
          "ผสมแป้งข้าวโพดกับน้ำอุ่นและเกลือ นวดจนได้โดว์ที่เข้ากัน",
          "ปั้นโดว์เป็นก้อนกลมแล้วกดให้แบนเป็นแผ่น",
          "นำไปย่างบนกระทะหรือเตาแบนจนผิวเหลืองและกรอบนอก",
          "ผ่าครึ่งแล้วสอดไส้ที่ต้องการ",
          "เสิร์ฟขณะร้อนๆ",
        ],
      },
      {
        id: 20,
        title: "ปิกัญญ่า",
        country: "บราซิล",
        image: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000465/img/th/a0000465_parts_58003e6a474fc.jpg?20170412181643&q=80&rw=686&rh=490",
        description: "เนื้อวัวส่วนสะโพกที่มีชั้นไขมันติดอยู่ด้านบน นำมาย่างบนเตาถ่านจนได้ความสุกที่พอเหมาะ นิยมรับประทานในร้านอาหารแบบ Rodízio",
        ingredients: [
          "เนื้อวัวส่วนปิกัญญ่า",
          "เกลือทะเล",
        ],
        instructions: [
          "หั่นเนื้อปิกัญญ่าเป็นชิ้นหนาแล้วเสียบไม้",
          "โรยเกลือทะเลให้ทั่ว",
          "นำไปย่างบนเตาถ่านโดยย่างด้านไขมันลงก่อน",
          "พลิกกลับด้านและย่างจนสุกตามความชอบ",
          "เสิร์ฟโดยหั่นเนื้อออกจากไม้",
        ],
      },
    ],
    'แอฟริกา': [
      {
        id: 21,
        title: "ทาจีน",
        country: "โมร็อกโก",
        image: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/8/22/6bfadaebe3164603a71eb2b298329308",
        description: "สตูว์เนื้อหรือผักที่ปรุงอย่างช้าๆ ในหม้อดินเผาทรงกรวย รสชาติเข้มข้นด้วยเครื่องเทศนานาชนิด เช่น หญ้าฝรั่น, ขิง, และอบเชย",
        ingredients: [
          "เนื้อแกะหรือไก่",
          "หัวหอม, กระเทียม",
          "มะเขือเทศ",
          "เครื่องเทศ (ขมิ้น, ยี่หร่า, ขิง, อบเชย)",
          "มะกอก, มะนาวดอง",
          "ผักต่างๆ (แครอท, มันฝรั่ง)",
        ],
        instructions: [
          "ผัดเนื้อกับหัวหอมและเครื่องเทศในหม้อทาจีน",
          "ใส่ผักและมะกอกลงไป",
          "เติมน้ำเล็กน้อยและปิดฝาให้สนิท",
          "เคี่ยวด้วยไฟอ่อนๆ ประมาณ 2-3 ชั่วโมง",
          "เสิร์ฟพร้อมขนมปังสำหรับจิ้ม",
        ],
      },
      {
        id: 22,
        title: "โดโร วัต",
        country: "เอธิโอเปีย",
        image: "https://media.istockphoto.com/id/1190643815/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%80%E0%B8%AD%E0%B8%98%E0%B8%B4%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%9B%E0%B8%B5%E0%B8%A2-doro-wat-%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%94%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%99%E0%B8%B1%E0%B9%89.jpg?s=612x612&w=0&k=20&c=EV1b2MLIppP6W03QH8dAXD-06Mo86vWf78vU1pEXe88=",
        description: "สตูว์ไก่รสชาติเผ็ดร้อนที่ปรุงด้วยเครื่องเทศแบบเบอร์เบเร (Berbere) เสิร์ฟพร้อมไข่ต้มและอินเจรา (Injera) ซึ่งเป็นขนมปังแบนเนื้อฟู",
        ingredients: [
          "ไก่",
          "หอมแดง, ขิง, กระเทียม",
          "เบอร์เบเร (Berbere Spice Mix)",
          "เนยใส (Niter Kibbeh)",
          "ไข่ต้ม",
          "อินเจรา (Injera)",
        ],
        instructions: [
          "ผัดหอมแดงกับเนยใสจนนุ่ม",
          "ใส่เครื่องเทศเบอร์เบเรและไก่ลงไปผัด",
          "เติมน้ำเล็กน้อยและเคี่ยวจนไก่นุ่มและน้ำข้น",
          "ใส่ไข่ต้มลงไปก่อนเสิร์ฟ",
          "รับประทานพร้อมอินเจรา",
        ],
      },
      {
        id: 23,
        title: "บันนี่โชว์",
        country: "แอฟริกาใต้",
        image: "https://img.freepik.com/premium-photo/south-african-fast-food-dish-bunny-chow-curry-with-meat-vegetables-white-bread-white-background_781325-10497.jpg?w=360",
        description: "สตูว์แกงที่เสิร์ฟในขนมปังที่เจาะเป็นโพรง เป็นอาหารจานด่วนที่ได้รับความนิยมอย่างมาก",
        ingredients: [
          "เนื้อแกะหรือไก่",
          "ขนมปัง loaf",
          "หัวหอม, มะเขือเทศ",
          "ผงกะหรี่, ยี่หร่า, ขมิ้น",
          "มันฝรั่ง",
        ],
        instructions: [
          "ทำแกงกะหรี่โดยผัดเนื้อกับเครื่องเทศ",
          "ใส่ผักและมันฝรั่งลงไปแล้วเคี่ยวจนสุก",
          "ตัดขนมปังให้เป็นโพรง",
          "ตักแกงใส่ในโพรงขนมปังที่เตรียมไว้",
          "เสิร์ฟทันที",
        ],
      },
      {
        id: 24,
        title: "คูสคูส",
        country: "แอลจีเรีย",
        image: "https://media.istockphoto.com/id/1137637638/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%81%E0%B8%AD%E0%B8%A5%E0%B8%88%E0%B8%B5%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2-couscous.jpg?s=612x612&w=0&k=20&c=aLz3l_GAWQrysqbLILwkjeiQddKuvpb0avvm-n6A5DU=",
        description: "เม็ดแป้งขนาดเล็กทำจากข้าวสาลีชนิดหนึ่ง นำมานึ่งจนสุกและเสิร์ฟพร้อมสตูว์เนื้อหรือผักที่ปรุงรสเข้มข้น",
        ingredients: [
          "คูสคูส",
          "น้ำเปล่า",
          "น้ำมันมะกอก",
          "เนื้อแกะหรือไก่",
          "ผักต่างๆ (แครอท, ซูกินี, หัวหอม)",
          "เครื่องเทศ",
        ],
        instructions: [
          "นึ่งคูสคูสในหม้อพิเศษที่เรียกว่า couscoussier",
          "ทำสตูว์เนื้อและผักด้วยการเคี่ยวในหม้อจนนุ่ม",
          "จัดคูสคูสลงในจานแล้วราดด้วยสตูว์",
          "ตกแต่งด้วยผักและเนื้อที่เคี่ยวจนเปื่อย",
        ],
      },
      {
        id: 25,
        title: "คอชารี",
        country: "อียิปต์",
        image: "https://image.springnews.co.th/uploads/images/md/2018/04/4hywocFjKJChjLMFY9NJ.jpg",
        description: "อาหารจานเดียวที่ประกอบด้วยข้าว, มักกะโรนี, และถั่วเลนทิล ราดด้วยซอสมะเขือเทศเผ็ดและโรยหน้าด้วยหัวหอมเจียวกรอบ",
        ingredients: [
          "ข้าว",
          "มักกะโรนี",
          "ถั่วเลนทิล",
          "หัวหอมเจียว",
          "ซอสมะเขือเทศ",
          "กระเทียม",
          "พริกป่น",
        ],
        instructions: [
          "หุงข้าวและต้มมักกะโรนีกับถั่วเลนทิลแยกกัน",
          "ทำซอสโดยผัดกระเทียมกับมะเขือเทศและเครื่องเทศ",
          "จัดเรียงข้าว, มักกะโรนี, และถั่วเลนทิลลงในชาม",
          "ราดซอสมะเขือเทศและโรยหน้าด้วยหัวหอมเจียวกรอบ",
          "เสิร์ฟพร้อมน้ำส้มสายชูกระเทียม",
        ],
      },
    ],
  };

  const filteredFoodData = selectedRegion === 'ทั้งหมด'
    ? Object.entries(categorizedFoodData)
    : Object.entries(categorizedFoodData).filter(([region]) => region === selectedRegion);

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {['ทั้งหมด', ...Object.keys(categorizedFoodData)].map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                        ${selectedRegion === region
                          ? 'bg-orange-500 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:bg-orange-100'
                        } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
          >
            {region}
          </button>
        ))}
      </div>

      {filteredFoodData.map(([region, foods]) => (
        <div key={region}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 mb-6 border-b-2 border-orange-500 pb-2">
            อาหารจากทวีป{region}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
