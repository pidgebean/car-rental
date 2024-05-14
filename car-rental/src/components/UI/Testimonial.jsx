import React from 'react'
import Slider from 'react-slick'

import '../../styles/testimonial.css'

import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'

const Testimonial = () => {
  return (
    <Slider>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam obcaecati adipisci eius cum corporis aperiam reiciendis. 
                Praesentium sequi officia officiis facere illum nulla provident asperiores. 
                Magnam vero obcaecati quisquam cumque.
            </p>
        </div>
    </Slider>
  )
}

export default Testimonial
