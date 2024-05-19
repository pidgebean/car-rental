import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/search.css'

import { Container, Row} from 'reactstrap'
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const Search = () => {

  const [search, setSearch] = useState('')

  
  return (
    <Helmet title='Search'>
        <CommonSection title='Search'/>
        <input 
          type="text" 
          placeholder='  
          Type here...' 
          onChange={(e) => setSearch(e.target.value)}
          className='search__page-bar'/>

        <Container>
          <Row>
          
            {
              carData.filter((item) => {
                return search.toLowerCase() === '' ? item : item.carName.toLowerCase().includes(search);
              }).map((item) =>(
                <CarItem item={item} key={item.id}/>
              ))

              
              // carData.filter((item) => {
              //   return search === '' ? item : item.carName.toLowerCase().includes(search);
              // }).map((item) => (
              //   <CarItem item={item} key={item.id} />
            }
          </Row>
        </Container>
        
    </Helmet>
  )
}

export default Search
