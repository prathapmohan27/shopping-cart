import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from './About';

function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/product" exact element={<Product />}></Route>
      <Route path="/about" exact element={<About />}></Route>
    </Routes>
  );
}

export default Main;
