import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produto/*' element={<Product/>}/>
        <Route path='/contato' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
