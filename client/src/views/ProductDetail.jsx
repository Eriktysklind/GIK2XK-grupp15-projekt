import { Button} from "@mui/material";
import ProductItemLarge from "../componets/ProductItemLarge";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getOne} from '../services/ProductService';
import RatingForm from "../componets/RatingForm";

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
    </div> ) : (
        <h3>Kunden inte hämta produkten</h3>
    );
}

export default ProductDetail;