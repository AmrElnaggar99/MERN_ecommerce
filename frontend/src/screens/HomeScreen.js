
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

import Message from '../components/Message'
import Loader from '../components/Loader'
const HomeScreen = () => {
    // Before redux
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products')
    //         setProducts(data)
    //     }

    //     fetchProducts()
    // }, [])
    // After redux
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader></Loader> : error ? <Message variant='danger'>{error}</Message> :
                (<Row>
                    {products.map(product => (
                        <Col key={product._id} md={6} ld={4} xl={3}>
                            <Product key={product._id} product={product} />
                        </Col>
                    ))}
                </Row>)
            }
        </>
    )
}

export default HomeScreen
