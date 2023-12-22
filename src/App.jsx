
import './App.css';
import './Styles/Footer.css';
import Header from './Components/Header';
import Box from './Components/Box';
import { useEffect, useState } from 'react';
import stays from '../stays.json'


function App() {

const [selectedLocation, setSelectedLocation] = useState('');
const [selectedGuests, setSelectedGuests] = useState('');
const [filteredStays, setFilteredStays] = useState(stays);

  //Controlando el search buuton inicial
  const handleSearch = (event) =>{
    event.preventDefault();
  const results = stays.filter((stay)=>{
    return (
      selectedGuests <= stay.maxGuests.toString() &&
      selectedLocation === `${stay.city}, ${stay.country}`
    )
  })

  setFilteredStays(results.length > 0 ? results : stays);
  }


  useEffect(()=>{
   

  }, [selectedLocation, selectedGuests])

  return (
    <>
      <Header
        onLocationSelect = {setSelectedLocation}
        onGuestsSelect = {setSelectedGuests}
        onSubmit ={(event) => handleSearch(event)}
      />
   
      <main>

     <Box stays={filteredStays}/>
    </main>

    <footer className='windbnb__footer'>
      <a href="https://github.com/Leydisfh">Created by Leydis Fernandez - devChallenges.io</a>
    </footer>
    </>
  )
}


export default App
