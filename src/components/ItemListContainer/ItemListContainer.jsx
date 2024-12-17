import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../data/data';
import { RingLoader } from 'react-spinners';
import './styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts()
      .then((data) => {

        if (idCategory) {
          const productsFilter = data.filter((product) => product.category === idCategory)
          setProducts(productsFilter)
        } else {
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idCategory])

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      {
        loading ? (
          <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <RingLoader color="indigo" size={150} />
          </div>
        ) : (
          <ItemList products={products} />
        )
      }
    </div>
  );
};

export default ItemListContainer;
