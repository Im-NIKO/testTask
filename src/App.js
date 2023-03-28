import Navigation from './components/Header/Header';
import Product from './components/Products/Product';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <div className="App">
        <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="product" element={<Product/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
