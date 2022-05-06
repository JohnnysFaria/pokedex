import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import './reset.css';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
