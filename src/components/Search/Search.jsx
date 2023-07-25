import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import './search.css';



const Search = ({searchForApartments, searchMessage}) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  

  
     const handleSearch = (e) => {
      e.preventDefault();
      searchForApartments(searchTerm)
      
     }
  return (
     <div className="search">
     <form  onSubmit={handleSearch} className='input'>
      <CiLocationOn className='location' size={25} color='#565656'/>
      <input
      type='text'
      className='search__input'
       margin="normal"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </form>
    </div>
  )
}

export default Search