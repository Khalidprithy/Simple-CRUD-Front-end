import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './components/Pages/Header';
import Products from './components/Pages/Products';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/Pages/AddProduct';
import Edit from './components/Pages/Edit';
import Footer from './components/Pages/Footer';

function App() {
  return (
    <div className="App bg-gray-200">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/products/:id' element={<Edit></Edit>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
