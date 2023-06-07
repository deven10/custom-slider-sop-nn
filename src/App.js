import React, { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      name: "Deven Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
    },
    {
      name: "Hrial Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
    },
    {
      name: "Priya Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: true,
    },
    {
      name: "Heena Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
    },
    {
      name: "Kishor Umrania",
      about: "Living in Mumbai",
      img: "https://media.licdn.com/dms/image/D4D03AQGXuFX-FDtryg/profile-displayphoto-shrink_800_800/0/1683949420774?e=2147483647&v=beta&t=9j-iHbVUdQNUmBPCaK1B4kqwOgkJxzLXI0Vtxsxef0w",
      show: false,
    },
  ];

  const [testimonials, setTestimonials] = useState(data);
  const [value, setValue] = useState(50);

  const handleTestimonial = (idx) => {
    const newData = data.map((user, index) =>
      index === idx ? { ...user, show: true } : { ...user, show: false }
    );
    setTestimonials(newData);

    if (idx === 0) setValue(10);
    if (idx === 1) setValue(30);
    if (idx === 2) setValue(50);
    if (idx === 3) setValue(70);
    if (idx === 4) setValue(90);
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="main-content">
          <h2>Hello World Deven here</h2>
          <div className="slider-wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Culpa, rerum.
            </p>
            <div className="slider-line">
              <div className="slider-bar-line"></div>
              <div className="slider-svg" style={{ left: `${value}%` }}>
                🔻
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
                      <div className="testimonial-content">
                        <p>{user.name}</p>
                        <p>{user.about}</p>
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
