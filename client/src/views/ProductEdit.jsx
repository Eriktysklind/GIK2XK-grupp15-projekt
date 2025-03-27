import { useEffect, useState } from "react";
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { create, getOne, remove, update } from "../services/ProductService";
import { Button, TextField } from '@mui/material'
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
    
    <form>
    
    <div>
        <TextField onChange={onChange} value={product.title} name='title' id='title' label='Titel'/>
    </div>
    <div>
    <TextField onChange={onChange} value={product.description} multiline minRows={5} name="description" id="description" label='Beskrivning'/>
    </div>
    <div>
    <TextField onChange={onChange} value={product.imageUrl || ""} name="imageUrl" id="imageUrl" label='URL för bild'/>
    </div>
    <div>
    <TextField onChange={onChange} value={product.price} name="price" id="price" label='Pris'/>
    </div>
    <div>
    <Button variant= 'contained' onClick={() => Navigate(-1)}>Tillbaka</Button>

    {id  && (
        <Button onClick={onDelete} variant="contained" color="error">
            Ta bort
        </Button>
    )}

    <Button onClick={onSave} variant='contained' color='success'>Spara Båt</Button>
    </div>
</form>
    );
}



export default ProductEdit;