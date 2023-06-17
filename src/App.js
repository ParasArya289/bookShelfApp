import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shelf } from './Pages/Shelf/Shelf';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shelf/>}/>
        {/* <Route path="/search" element={<Shelf/>}/> */}
      </Routes>
    </div>
  );
}
export default App;
