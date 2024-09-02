import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import ProductList from './components/productList.js';

function App() {
  return (
    <div className="App">
      <h1>PRODUCTS-APP</h1>
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
