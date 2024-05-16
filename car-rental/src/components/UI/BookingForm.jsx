import React from 'react'
import '../../styles/booking-form.css'

import { Form, FormGroup } from 'reactstrap'

const BookingForm = () => {

    const submitHandler = event => {
        event.preventDefault();
    }
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type="text" placeholder='First Name'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block m2-1 mb-4'>
        <input type="text" placeholder='Last Name'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type="email" placeholder='Email'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block m2-1 mb-4'>
        <input type="number" placeholder='Phone Number'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type="text" placeholder='From Address'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block m2-1 mb-4'>
        <input type="text" placeholder='To Address'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <select name="" id="">
            <option value="1 person">1 Person</option>
            <option value="2 person">2 People</option>
            <option value="3 person">3 People</option>
            <option value="4 person">4 People</option>
            <option value="5+ person">5 People</option>
            
        </select>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <select name="" id="">
            <option value="1 luggage">1 luggage</option>
            <option value="2 luggage">2 Luggage</option>
            <option value="3 luggage">3 Luggage</option>
            <option value="4 luggage">4 Luggage</option>
            <option value="5+ luggage">5 Luggage</option>
            
        </select>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type="date" placeholder='Journey Date'/>
      </FormGroup>
      
      <FormGroup className='booking__form d-inline-block m2-1 mb-4'>
        <input type="time" placeholder='Journey Time'/>
      </FormGroup>
      
      <FormGroup>
        <textarea rows={5} type='textarea' className='textarea' placeholder='Write'></textarea>
      </FormGroup>
    </Form>
  )
}

export default BookingForm
