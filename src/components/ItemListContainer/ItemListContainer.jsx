import './styles/ItemListContainer.css'; 
import ItemList from './ItemList';
import hocFilterProducts from '../../hoc/hocFilterProducts';

const ItemListContainer = ({ greeting, products, loading }) => {
    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? <p>Cargando...</p> : <ItemList products={products} />}
        </div>
    );
};

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer);

export default ItemListContainerWithHoc;