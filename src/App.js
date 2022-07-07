import './App.css';
import Header from './components/Pages/Header';
import Products from './components/Pages/Products';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/Pages/AddProduct';
import Edit from './components/Pages/Edit';

function App() {
  return (
    <div className="App bg-gray-200">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/editProduct/:id' element={<Edit></Edit>}></Route>
      </Routes>

    </div>
  );
}

export default App;
