function ProductItemLarge({product}) {

    return ( 
    <div>
        <h2>{product.title}</h2>    
        <img width="100"src={product.image_url} />      
        <p>{product.description}</p>
        <p>{product.price}</p>

    </div> );
}

export default ProductItemLarge;