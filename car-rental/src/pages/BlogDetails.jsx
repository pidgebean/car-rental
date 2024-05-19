import React from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'

import {useParams, Link} from 'react-router-dom'
import blogData from '../assets/data/blogData.js'
import Helmet from '../components/Helmet/Helmet'

import commentImg  from '../assets/all-images/ava-1.jpg'
import '../styles/blog-details.css'

const BlogDetails = () => {

  const {slug} = useParams()
  const blog = blogData.find(blog => blog.title === slug)
  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row className='mt-5'>
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
                <h6 className="ps-5 fw-normal">
                  <blogquote className='fs-4'>{blog.quote}</blogquote>
                </h6>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt=""/>
                  <div className="comment__content">
                    <h6 className='fw-bold'>David Visa</h6>
                    <p className="section__description">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Dignissimos provident pariatur, odio optio similique beatae ex nisi 
                      exercitationem esse totam.
                    </p>

                    <span className='reply d-flex align-items-center gap-1'>
                      <i class='ri-reply-line'></i> Reply
                    </span>
                  </div>
                </div>


                {/* ====================== comment form =============================== */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make a comment or post
                  </p>

                  <Form>
                    <FormGroup className='d-flex gap-3'>
                      <Input type="text" placeholder='Full name' />
                      <Input type="email" placeholder='Email' />
                    </FormGroup>

                    <FormGroup>
                      <textarea rows='5' placeholder='Comment...' className='w-100 py-2 px-3'></textarea>
                    </FormGroup>

                    <button className="btn mt-3 mb-5 comment__btn">Post a Comment</button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className="recent__post mb-4">
                <h5 className='fw-bold'>Recent Posts</h5>
              </div>
              {
                blogData.map((item) => (
                  <div className='recent__blog-post mb-4' key={item.id}>
                    <div className="recent__blog-item d-flex gap-3">
                      <img src={item.imgUrl} alt="" className='w-25 rounded-2' />
                      <h6><Link to={`/blogs/${item.title}`}>{blog.title}</Link></h6>
                    </div>
                  </div>
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default BlogDetails
