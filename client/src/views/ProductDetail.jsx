import { Button, Rating } from "@mui/material";
import ProductItemLarge from "../componets/ProductItemLarge";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
    const product = {
        id: 3,
                title: "Ranger Z521 BASS",
                description: "För första gången kan vi här i Skandinavien erbjuda Rangers tävlingsbåt nummer ett. Från och med 2022 är att vi erbjuder samtliga Rangers modeller då nu alla är CE-märkta för vår marknad och kan därmed för första gången i Skandinavien erbjuda även som här, den största professionell bassbåten.",
                price: 450000,
                imageUrl: "https://www.mojoboats.se/wp-content/uploads/2022/03/RZ521L_R281_20.jpg",
                createdAt: "2025-03-24T10:12:00.000Z",
                updatedAt: "2025-03-24T00:00:00.000Z"
    }
    const navigate = useNavigate();
    return ( 
    <div>
        <ProductItemLarge product={product}/>
        <div>
        <Rating/>
        </div>
        <Button onClick={() => navigate(-1)}>Tillbaka</Button>
        <Button onClick={() => navigate(`/products/${product.id}/edit`)}>Ändra</Button>
    </div> );
}

export default ProductDetail;