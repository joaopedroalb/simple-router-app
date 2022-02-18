import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
