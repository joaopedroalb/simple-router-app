import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produto/:name' element={<Product />} />
          <Route path='/contato' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
