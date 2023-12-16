import { useState } from 'react';
import './App.css';
import './Styles/Footer.css';
import Header from './Components/Header';
import Box from './Components/Box';
//import SearchEdit from './Components/Search-edit';


function App() {
  const [location, setLocation] = useState('');



  //Capturando el valor del location
  const changeLocation = (e) =>{
    e.preventDefault();
    setLocation(e.target.value)
  }

  //Controlando el search buuton inicial
  /*const handleSearch = (e) =>{
    e.preventDefault()
    return  stays.find((item)=>{
      if(location === item.city || location === item.country){
        return setIslocation(true)
      }
      setShowList(true);
    })
  }*/

  return (
    <>
      <Header
        valueLocation={location}
        onChangeLocation = {changeLocation}
       // onSubmit ={handleSearch}
      />
   
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
