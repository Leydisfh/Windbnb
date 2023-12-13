
import './App.css';
import './Styles/Footer.css';
import Header from './Components/Header';
import Box from './Components/Box';
import SearchEdit from './Components/Search-edit';


function App() {

  const handleSearch = (e) =>{
    e.preventDefault()
    console.log('Hicieste click')
  }

  return (
    <>
      <Header onSubmit ={handleSearch}/>
      <SearchEdit />
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
