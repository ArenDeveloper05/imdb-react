import React, { useState, useRef, useEffect } from 'react'
import './Search.css'
import {BsSearch} from 'react-icons/bs'

const Search = ({handleSearch}) => {
  const [inputValue, setInputValue] = useState("");
  
  const placeholderRef = useRef(null);
  

  useEffect(()=>{
    if(!inputValue){
      placeholderRef.current.style.border = " 5px solid red";
      placeholderRef.current.style.backgroundColor = "#ee6060"
      
    }
    else{
      placeholderRef.current.style.border = "none"
      placeholderRef.current.style.backgroundColor = "white"

    }
    
  },[inputValue])
  const inputIsValid = inputValue && inputValue.trim()!==false && inputValue!== " ";
  const handleEnterSearch = e => e.keyCode===13 && inputIsValid?handleSearch(inputValue):"";  




  
  return (
    <div className='search-div'>
        <div className='search-icon-div'><BsSearch className="search-icon"/></div>
        <input type="search" className='search-input' placeholder='Search your movie...' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} ref={placeholderRef}
         onKeyDown={handleEnterSearch}/>
        <button type='button' className='search-button' onClick={()=> inputIsValid && handleSearch(inputValue)}>Search</button>
    </div>
  )
}

export default Search