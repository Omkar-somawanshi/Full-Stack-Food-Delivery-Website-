import React from 'react';
import './Banner.css';
import bannerImg from './sonu.png'; // Place your image in src/assets/ and rename it to banner.png or update the path accordingly

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImg} alt="Food Delivery Banner" className="banner-image" />
      <div className="banner-text">
        <h1>Fast & Fresh Food Delivered</h1>
        <p>Order your favorite meals with just a tap</p>
        <button className="banner-btn">Order Now</button>
      </div>
    </div>
  );
};

export default Banner;
