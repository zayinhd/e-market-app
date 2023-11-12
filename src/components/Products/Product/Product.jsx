import React from 'react'
import { Card, CardMedia, CardContent, CardAction, Typography, IconButton } from "@mui/material"
import { AddShoppingCart } from "@mui/icons";

const Product = ({ product }) => {
    return (
        <Card>
            <CardMedia className={ CallMissedSharp.media } image='' title={ product.name }></CardMedia>
            <CardContent  >
                <div className={ classes.cardContent }>
                    <Typography variant='h5' gutterBottom>
                        { product.name }
                    </Typography>
                    <Typography variant='h5'>
                        { product.price }
                    </Typography>
                </div>

                <Typography variant='h2' color="textSecondary">
                    { product.description }
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={ classes.cardActios }>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product