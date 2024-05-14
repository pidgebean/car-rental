import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to car rent service</h2>
                        <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum molestiae quibusdam aut quam eius quisquam nihil quaerat libero unde autem ut quis vitae,
                        sequi enim placeat! Asperiores incidunt hic labore.
                        </p>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor sit amet. 
                            </p>
                            
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor sit amet. 
                            </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor sit amet. 
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                                <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor sit amet. 
                            </p>
                        </div>
                    </div>
                </Col>
                
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection
