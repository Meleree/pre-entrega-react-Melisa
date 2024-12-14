import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../data/data';
import { RingLoader } from 'react-spinners';
import './styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { idCategory } = useParams();

    useEffect(() => {
      setLoading(true);

      getProducts()
        .then((data) => {
          if(idCategory) {
            const filterProducts = data.filter((product) => product.category === idCategory);
            setProducts(filterProducts);
          } else {
            setProducts(data);
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [idCategory]);

    return (
      <div className="ItemListContainer">
        <h1>{greeting}</h1>
        {
          loading ? (
            <div style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <RingLoader color="purple" />
            </div>
          ) : (
            <div className="item-list-container">
              <ItemList products={products} />
            </div>
          )
        }
      </div>
    );
};

export default ItemListContainer;
