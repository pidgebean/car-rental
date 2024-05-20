import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import PaymentMethod from '../components/UI/PaymentMethod'
import "../styles/register.css"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  return (
    <Helmet>
        <CommonSection title='Register'/>

        <Container>
            <Row className='justify-content-center'>
                <Col lg='5'>
                    <Form>
                        <FormGroup>
                            <Input placeholder='First Name' type='text'/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Last Name' type='text'/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Email' type='email'/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Phone Number' type='phone'/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Address' type='text'/>
                        </FormGroup>
                    </Form>
                </Col>
                <Col lg='5'>
                    <h5 className="mb-4 fw-bold ">Payment Information</h5>
                    <PaymentMethod />
                </Col>
                
            </Row>
            <Row className='justify-content-center btn_row' lg='2' >
                {/* <Col lg='5'>
                    <button className='register_btn'>
                        Register
                    </button>
                </Col> */}
                <button className='register_btn' onClick={() => toast("Registered!")}>
                    Register
                </button>
                <ToastContainer/>
                
            </Row>
        </Container>
    </Helmet>
  )
}

export default Register
