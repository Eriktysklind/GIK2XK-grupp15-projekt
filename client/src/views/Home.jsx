import { Paper, Grid2 } from "@mui/material";
import ProductList from "../componets/ProductList";
import SatisfiedCustomers from "../componets/SatisfiedCustomers";

function Home() {
    return ( 
    <>
        <Grid2 container spacing={2} >
        <Grid2 component="section" >
        <ProductList />
        <SatisfiedCustomers />
        </Grid2>
        </Grid2>
    </>
    );
}

export default Home;