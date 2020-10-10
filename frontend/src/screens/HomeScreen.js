
import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col md={6} ld={4} xl={3}>
                        <Product key={product._id} product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
