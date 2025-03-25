import { Link } from "react-router-dom";

function ProductItemSmall({product}) {
    return ( 
        <>
        <Link to= {`/products/${product.id}`}>
            <h3>{product.title}</h3>
            </Link>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to= {`/products/${product.id}`}>
            <img width="100"src={product.imageUrl} />
            </Link>
    </>
     );
}

export default ProductItemSmall;