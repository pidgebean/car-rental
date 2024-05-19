import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import '../styles/car-listing.css'

const CarListing = () => {

  const [showProductList, setShowProductList] = useState(carData);

  const setLowToHigh = () => {
    const sortedProducts = carData.sort((a,b) => a.price - b.price);
    setShowProductList([...sortedProducts]);
  }

  const setHighToLow = () => {
    const reverseSortedProducts = carData.sort((a,b) => b.price - a.price);
    setShowProductList([...reverseSortedProducts])
  }

  const resetList = () => {
    const resetList = carData.sort((item) => item.carName);
    setShowProductList([...resetList])
  }
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                {/* <select>
                  <option onSelect={resetList}>Select</option>
                  <option value="low" onSelect={setLowToHigh}>Low to High</option>
                  <option value="high" onSelect={setHighToLow}>High to Low</option>
                </select> */}
                {/* <button onClick={resetList}>Alphabetically</button> */}
                <button className='low-btn' onClick={setLowToHigh}>Low to High</button>
                <button className='high-btn' onClick={setHighToLow}>High to Low</button>
              </div>
            </Col>

            {showProductList.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;