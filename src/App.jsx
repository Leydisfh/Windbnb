
import './App.css';

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
      <Header 
      onSubmit ={handleSearch}
      />

      <SearchEdit />


    <main>

     <Box />
    </main>
    </>
  )
}

export default App
