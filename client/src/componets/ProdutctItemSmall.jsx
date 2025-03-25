import { Link } from "react-router-dom";

function ProductItemSmall({product}) {
    return ( 
        <>
        <Link to= {`/products/${product.id}`}>
            <h2>{product.title}</h2>
            </Link>
            <Link to= {`/products/${product.id}`}>
            <img width="100"src={product.imageUrl} alt={product.title} />
            </Link>
            <p>{product.price}</p>
        </>
     );
}

export default ProductItemSmall;