import React from 'react'
import Carousel from "react-bootstrap/Carousel";
const CarouselComponent = ({ featuredProducts }) => {
  
  console.log("feactured product", featuredProducts);
  return (
    <Carousel>
      {
        featuredProducts.length > 0 &&
        featuredProducts.map((featured,index) => {
          
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={featured.fields.imgurl1}
                alt="First slide"
                style={{
                  height: "60vh",
                  
    objectFit: "contain"}}
              />
              <Carousel.Caption>
                <h3 className="text-dark">{featured.fields.name}</h3>
                <p className = "text-dark">{featured.fields.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );

        })
      }
      
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1576009343708-82c3f5732c35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1576009343708-82c3f5732c35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselComponent
