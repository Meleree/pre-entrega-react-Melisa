import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';

const hocFilterProducts = (Component) => {
    return function (props) {
        const { products, loading } = useProducts();  
        const [query, setQuery] = useState("");

        const changeInput = (event) => {
            setQuery(event.target.value.toLowerCase());
        };

        const search = () => {
            return products.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        };

        return (
            <>
                <div className="search-container">
                    <input 
                        type="text" 
                        id="search-input"  
                        placeholder="Buscar..." 
                        onChange={changeInput} 
                    />
                </div>
                <Component {...props} products={search()} loading={loading} />
            </>
        );
    };
};

export default hocFilterProducts;
