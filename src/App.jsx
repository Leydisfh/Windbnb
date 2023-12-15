import { useState } from 'react';
import {  IoLocationSharp  } from "react-icons/io5";
import './App.css';
import './Styles/Footer.css';
import stays from '../stays.json'
import Header from './Components/Header';
import Box from './Components/Box';
import SearchEdit from './Components/Search-edit';


function App() {
  const [location, setLocation] = useState('');
  const [isLocation, setIslocation] = useState(false);
  const [showList , setShowList] = useState(false); // Estado de la lista

  const [locationOptions, setLocationOptions] = useState(location)
  const [guestValues, setGuestValues] = useState('');
  
  //Capturando el valor del location
  const changeLocation = (e) =>{
    e.preventDefault();
    setLocation(e.target.value)
  }

  //Controlando el search buuton inicial
  const handleSearch = (e) =>{
    e.preventDefault()
    return  stays.find((item)=>{
      if(location === item.city || location === item.country){
        return setIslocation(true)
      }
      setShowList(true);
    })
  }

  // Funcion para controlar que lso valores no se repitan
  const uniqueLocations = Array.from(
    new Set(stays.map((item) => `${item.city}, ${item.country}`))
  );

// Creando elemento li del componente search
  const locationList = location && showList &&(
  uniqueLocations.map((item, index) => (
      <li key={index}>
        <IoLocationSharp style={{ fontSize: '20px' }} /> 
        {item}
      </li>

  ))
 ) ;


 const onChangeValue = (e) =>{
  e.preventDefault()
  return setGuestValues(e.target.value)
 }

 const handleLocation =(e) =>{
  return setLocationOptions(e.target.value);
 }

  return (
    <>
      <Header 
        valueLocation={location}
        onChangeLocation = {changeLocation}
        onSubmit ={handleSearch}
       
      />
     { 
      isLocation && (
      <SearchEdit  
      locationValue={locationOptions}
      locationOptions ={locationList}
      onChangeLocation= {handleLocation}
      value = {guestValues}
      onChangeGuest = {onChangeValue}
      /> 
      )
      }   
      <main>

     <Box />
    </main>

    <footer className='windbnb__footer'>
      <a href="https://github.com/Leydisfh">Created by Leydis Fernandez - devChallenges.io</a>
    </footer>
    </>
  )
}

export default App
