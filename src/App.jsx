import NavBar from './components/ItemListContainer/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="*" element={ <div>Error 404 - pagina no encontrada</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
