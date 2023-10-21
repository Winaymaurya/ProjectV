import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < 2) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="port.jpg"
          alt="First Slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/flat-design-colored-portfolio-template_23-2149215471.jpg?w=1060&t=st=1697784169~exp=1697784769~hmac=9eeff24857e3428a156b6962e21aa0b14e16971a00b12c7249811f563abdacf9"
          alt="Second Slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149227033.jpg?w=1060&t=st=1697784052~exp=1697784652~hmac=a04c8fc4c813790e8058e959c12dbaafaaf5965770154a6b44e76ab99395f96d"
          alt="Third Slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
