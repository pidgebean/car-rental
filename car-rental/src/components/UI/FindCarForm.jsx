import React from 'react'

import '../../styles/find-car-form.css'
import '../../styles/find-car-form.css'
import {Form, FormGroup} from 'reactstrap'

const FindCarForm = () => {
  return (
    <Form className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
            <FormGroup className='form__group'>
                <input type="text" placeholder='From address' required />
            </FormGroup>

            <FormGroup className='form__group'>
                <input type="text" placeholder='To address' required />
            </FormGroup>

            <FormGroup className='form__group'>
                <input type="text" placeholder='Journey Date' required />
            </FormGroup>

            <FormGroup className='form__group'>
                <input className='journey__time' type="text" placeholder='Journey Time' required />
            </FormGroup>

            <FormGroup className='select__group'>
                <select>
                    <option value="ac">AC Car</option>
                    <option value="non-ac">Non-AC Car</option>
                </select>
            </FormGroup>

            <FormGroup className='select__group'>
                <button className="btn find__car-btn">Find Car</button>
            </FormGroup>
        </div>
    </Form>
  )
}

export default FindCarForm