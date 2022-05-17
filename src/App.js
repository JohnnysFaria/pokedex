import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import './reset.css';
import './global.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
