import ProductList from "../componets/ProductList";
import Grid from '@mui/material/Grid2';

function Home() {
    return ( 
    <>
        <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
        <ProductList />
        </Grid>
        </Grid>
    </>
    );
}

export default Home;