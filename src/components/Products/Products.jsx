import React from 'react';
import Grid from "@mui/material";

const products = [
    { id: 1, name: "Shoe", description: "Running Shoes", price: "$50" },
    { id: 1, name: "Bag", description: "Nice bags", price: "$20" },
    { id: 1, name: "Cup", description: "Quality cups", price: "$6" },
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={ 4 }>
            { products.map((product) => (
                <Grid item key={ product.id } xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>\
                    <Product product={ product } />
                </Grid>
            )) }
        </Grid>
    </main>
}

export default Products;