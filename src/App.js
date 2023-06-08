import React, { useEffect, useState } from "react";

import "./App.css";
import "animate.css";

import caretDown from "../src/svg/caretDown.svg";
import downInvertedComma from "../src/svg/down-inverted-comma.svg";
import upInvertedComma from "../src/svg/up-inverted-comma.svg";

function App() {
  const data = [
    {
      name: "Deven Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
      moreInfo:
        "We are a professional and affordable web designing company in India, our team is committed to providing high-quality web design and development services at a reasonable and competitive price. With a team of experts who possess the necessary skills and experience to deliver top-quality web designs, we ensure that our clients receive customized solutions that meet their specific needs.",
    },
    {
      name: "Hrial Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
      moreInfo:
        "Our team uses the latest tools and technologies to design and develop websites that are visually appealing, user-friendly, and fully functional. As an affordable web design company, we offer comprehensive services with free maintenance, making our services accessible to businesses of all sizes and budgets",
    },
    {
      name: "Priya Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: true,
      moreInfo:
        "We strive to provide cost-effective solutions to our clients without compromising on quality, and our commitment to excellence has helped us build a reputation as a trusted and reliable website design company in India.",
    },
    {
      name: "Heena Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
      moreInfo:
        "Our web development services help create all types of web-based software and ensure great experience for web users. We professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates",
    },
    {
      name: "Kishor Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
      moreInfo:
        "Scale your business to the next level with Neel Networks, leading digital marketing company in Mumbai, India. Our expert consultants help you to grow your company with our 100% performance-focused digital marketing services",
    },
  ];

  const [testimonials, setTestimonials] = useState(data);
  const [value, setValue] = useState(38.5);

  const [toggle, setToggle] = useState(false);

  const [selectedUser, setSelectedUser] = useState({
    name: "Priya Umrania",
    about: "Living in Mumbai",
    img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
    show: true,
    moreInfo:
      "We strive to provide cost-effective solutions to our clients without compromising on quality, and our commitment to excellence has helped us build a reputation as a trusted and reliable website design company in India.",
  });

  const handleTestimonial = (idx) => {
    const newData = data.map((user, index) =>
      index === idx ? { ...user, show: true } : { ...user, show: false }
    );
    setTestimonials(newData);
    setSelectedUser(data[idx]);

    if (idx === 0) setValue(5);
    if (idx === 1) setValue(22);
    if (idx === 2) setValue(38.5);
    if (idx === 3) setValue(53.5);
    if (idx === 4) setValue(70);
  };

  useEffect(() => {
    setToggle((prev) => !prev);
  }, [selectedUser]);

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="main-content">
          <h2>Check Out What Our Clients Say!</h2>
          <div className="slider-wrapper">
            <div className="user-info-wrapper">
              <div className="up-inverted-comma">
                <img src={upInvertedComma} alt="up-inverted-comma" />
                <img src={upInvertedComma} alt="up-inverted-comma" />
              </div>
              <p className={`user-info animate__animated animate__fadeIn`}>
                {selectedUser.moreInfo}
              </p>
              <div className="down-inverted-comma">
                <img src={downInvertedComma} alt="down-inverted-comma" />
                <img src={downInvertedComma} alt="down-inverted-comma" />
              </div>
            </div>
            <div className="slider-line">
              <div className="slider-svg" style={{ left: `${value}%` }}>
                <img src={caretDown} alt="caretDown" />
              </div>
            </div>
            <div className="testimonials-wrapper">
              {testimonials?.map((user, index) => {
                return (
                  <div key={index} className="slider-testimonials">
                    <img
                      onClick={() => handleTestimonial(index)}
                      className="slider-testimonial-img"
                      src={user.img}
                      alt={user.name}
                    />
                    {user.show ? (
                      <div className="testimonial-content animate__animated animate__fadeIn">
                        <p className="username">{user.name}</p>
                        <p className="user-about">{user.about}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
