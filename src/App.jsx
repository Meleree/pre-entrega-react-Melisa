import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/ItemListContainer/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      <ItemDetailContainer />
    </>
  )
}

export default App
