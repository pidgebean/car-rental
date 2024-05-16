import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import {useParams} from 'react-router-dom'
import blogData from '../assets/data/blogData'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

const BlogDetails = () => {

  const {slug} = useParams()
  const blog = blogData.find(blog => blog.title)
  return (
    <Helmet title={blog.title}>
      <Container>
        <Row>
          <Col lg='8' md='8'>
            <div className='blog__details'>
              <img src={blog.imgUrl} alt="" className='w-100'/>
              <h2 className='section__title mt-4'>{blog.title}</h2>

              <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                <span className='blog__author'>
                  <i className='ri-user-line'></i> {blog.author}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-calendar-line"></i> {blog.date}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-time-line"></i> {blog.time}
                </span>
              </div>

              <p className="section__description">{blog.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

export default BlogDetails
