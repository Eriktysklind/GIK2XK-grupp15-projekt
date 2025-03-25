import ProductItemSmall from "./ProductItemSmall";
import {getAll} from '../services/ProductService';
import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
function ProductList({pathname}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll(pathname).then(products => {
            setProducts(products);
        })
    }, [pathname]);

    return (
    <Grid2 container spacing={2}>
        {products?.length > 0 ? (products.map((product) => (

          <Grid2
            key={`products_${product.id}`}
            size= {{xs: 12, md: 6}}
          >
            <ProductItemSmall product={product} />
          </Grid2>))
            ) : (
                <Grid2 size={{xs:12}}>
                  <h3>Kunde ej hämta produkterna</h3>
                </Grid2>
              )}
    </Grid2>
    );
}

export default ProductList;