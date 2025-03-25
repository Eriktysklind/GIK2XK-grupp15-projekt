import ProductItemSmall from "./ProductItemSmall";
import {getAll} from '../services/ProductService';
import { useEffect, useState } from "react";
function ProductList({pathname}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll(pathname).then(products => {
            setProducts(products);
        })
    }, [pathname]);

    return (
    <ul>
        {products?.length > 0 ? (products.map((product) => (
            <li key={`products_${product.id}`}>
            <ProductItemSmall product={product}/>
            </li>))
            ) : (
                <h3>Kunde ej hämta produkten</h3>
            )}
    </ul>
    );
}

export default ProductList;