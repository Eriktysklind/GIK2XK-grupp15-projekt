import { useEffect, useState } from "react";
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { create, getOne, remove, update } from "../services/ProductService";
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import SailingIcon from '@mui/icons-material/Sailing';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ProductEdit(){
    const { id } = useParams();
    const Navigate = useNavigate();
    const emptyProduct = {id:0, title:"", description:"", imageUrl:"", price:"", userID:2};
    const [ product, setProduct ] = useState(emptyProduct);

    useEffect(() => {
        
        if (id) {
            getOne(id).then((product) => setProduct(product));
        } else {
            setProduct(emptyProduct);
        }
    }, [id] );



    function onChange(e) {
       const name = e.target.name;
       const value = e.target.value;

       const newProduct = {...product, [name]: value};
       setProduct(newProduct);
    }

    //spara funktion
    function onSave() {
        if(product.id === 0) {
            create(product).then(Response => Navigate('/', {replace:true, state:Response}));
           
    } else {
        update(product).then((Response) => Navigate(`/products/${product.id}`, {replace:true, state:Response}))
    }
}

//ta bort funktion
function onDelete(){
    remove(product.id).then((Response) => Navigate('/', {replace:true, state:Response}) ) 
}

    return (
    <Container maxWidth="lg">
        <Typography variant="h4" component={"h2"}>{product.id ? 'Ändra' : 'Lägg till produkt'} 

        </Typography>
        <Box mt={2}>
<form>
    <Box>
        <TextField fullWidth margin="normal" onChange={onChange} value={product.title} name='title' id='title' label='Titel'/>
    </Box>
    <Box>
    <TextField fullWidth margin="normal" onChange={onChange} value={product.description} multiline minRows={5} name="description" id="description" label='Beskrivning'/>
    </Box>
    <Box>
    <TextField fullWidth margin="normal" onChange={onChange} value={product.imageUrl || ""} name="imageUrl" id="imageUrl" label='URL för bild'/>
    </Box>
    <Box>
    <TextField onChange={onChange} value={product.price} name="price" id="price" label='Pris'/>
    </Box>
    <Box  mt={2}  sx={{
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 50px)',
    gap: 1,
  }}>
    <Button startIcon={<RestoreIcon/>} sx={{ gridColumn: '1', gridRow: '2 / 3' }} 
     variant= 'contained' onClick={() => Navigate(-1)}>Tillbaka</Button>

    {id  && (
        <Button startIcon={<DeleteForeverIcon/>}  onClick={onDelete} variant="contained" color="error">
            Ta bort
        </Button>
    )}

    <Button startIcon={<SailingIcon/>} sx={{ gridColumn: '5', gridRow: '2 / 3' }} 

    onClick={onSave} variant='contained' color='success'>Spara Båt</Button>
    </Box>
</form>
</Box>
</Container>
    );
}



export default ProductEdit;