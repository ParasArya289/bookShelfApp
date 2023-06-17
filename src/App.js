import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Search } from './Pages/Search/Search';
import { Shelf } from './Pages/Shelf/Shelf';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shelf/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  );
}
export default App;
