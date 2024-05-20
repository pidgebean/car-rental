import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import '../styles/login.css'
import { Link } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const notify = () => {
        toast("Logged In!");
    }
  return (
    <Helmet>
        <CommonSection title='Login'/>

        <Container>
            <Row className='justify-content-center'>
                <Col lg='3'>
                    <Form>
                        <FormGroup className='login_form'>
                            <Input placeholder='Username' type='text' required/>
                        </FormGroup>
                        
                        <FormGroup className='login_form'>
                            <Input placeholder='Password' type='text' required/>
                        </FormGroup>

                        
                    </Form>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg='4' className='btn-col'>
                    <button className='login_btn' onClick={notify}>Login</button>
                    
                    <Link to='/register'>
                        <button className='login_btn' >Register</button>
                    </Link>
                    
                </Col>
                <ToastContainer/>
            </Row>
        </Container>
    </Helmet>
  )
}

export default Login
