import { Button} from "@mui/material";
import ProductItemLarge from "../components/ProductItemLarge";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getOne} from '../services/ProductService';
import RatingForm from "../components/RatingForm";

function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
  
    useEffect(() => {
        getOne(id).then((product) => setProduct(product));
    }, [id]);
    const navigate = useNavigate();

    return product ? ( 
    <div>
        <ProductItemLarge product={product}/>
        <div>
        <RatingForm productId={product.id}/>
        </div>
        <Button onClick={() => navigate(-1)}>Tillbaka</Button>
        <Button onClick={() => navigate(`/products/${product.id}/edit`)}>Ändra</Button>
    </div> ) : (
        <h3>Kunden inte hämta produkten</h3>
    );
}

export default ProductDetail;