import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {setProducts} from '../redux/actions/productsActions'
import ProductComponents from './ProductComponents'
import { Box } from '@mui/material'

function ProductListing() {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Eror", err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products: ", products)
  return (
    <div>
        <Box sx={{display: 'grid', gridTemplateColumns:'auto auto auto'}}>
            <ProductComponents/>
        </Box>
    </div>
  )
}

export default ProductListing