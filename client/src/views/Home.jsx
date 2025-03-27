import { Paper, Grid2 } from "@mui/material";
import ProductList from "../components/ProductList";
import SatisfiedCustomers from "../components/SatisfiedCustomer";

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