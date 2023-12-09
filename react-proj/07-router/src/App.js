import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';
import NotFoundPage from './pages/NotFoundPage';
import SignUp from './components/SighUp';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* Routes, Route 감싸야 함*/}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/photos' element={<PhotoPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </>

  );
}

export default App;
