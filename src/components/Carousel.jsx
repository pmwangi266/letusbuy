import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 5000,
        }
      }
    ]
  };

  const carouselItems = [
    {
      id: 1,
      title: "Exclusive Affiliate Deals",
      description: "Get special discounts through our trusted affiliate partners - quality products at better prices.",
      image: "/images/affiliate.jpg"
    },
    {
      id: 2,
      title: "Smart Shopping Decisions",
      description: "We compare top products side-by-side to help you choose the best value for your money.",
      image: "/images/compare.jpg"
    },
    {
      id: 3,
      title: "Honest Product Reviews",
      description: "Our team tests products thoroughly to bring you unbiased reviews and recommendations.",
      image: "/images/review.jpg"
    },
    {
      id: 4,
      title: "Trending Now",
      description: "Discover this month's most popular products based on real customer purchases and reviews.",
      image: "/images/product.jpg"
    }
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="carousel-slide">
            <div className="slide-content">
              <div className="slide-text">
                <h2 className="slide-title">{item.title}</h2>
                <p className="slide-description">{item.description}</p>
              </div>
              <div className="slide-image-container">
                <img 
                  src={process.env.PUBLIC_URL + item.image} 
                  alt={item.title}
                  className="slide-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = process.env.PUBLIC_URL + "/images/fallback.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;