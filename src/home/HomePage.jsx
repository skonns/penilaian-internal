import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://as2.ftcdn.net/v2/jpg/02/41/76/25/1000_F_241762553_pX7UCU7ZOlPBYraJfBZzYB8ZtgxTcZ3I.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/41/76/25/1000_F_241762553_pX7UCU7ZOlPBYraJfBZzYB8ZtgxTcZ3I.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/41/76/25/1000_F_241762553_pX7UCU7ZOlPBYraJfBZzYB8ZtgxTcZ3I.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Welcome to My Restaurant</h1>
      <div className="imageContainer">
        <img
          src={images[imageIndex]}
          alt="Welcome Image"
          className="welcome-image"
        />
        <div className="imageOverlay">
          <div className="overlayText">
            
          </div>
        </div>
      </div>
      <p className="paragraph">
        Selamat datang di website kami. Nikmati berbagai macam hidangan lezat
        yang kami sediakan.
      </p>
      <div className="buttonContainer">
        <a href="http://localhost:3000/Menu">
          <button className="button">Lihat Menu</button>
        </a>
        <a href="http://localhost:3000/AboutMe">
          <button className="button">Tentang Kami</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;

