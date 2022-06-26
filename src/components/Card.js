import React, { useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import CardData from '../CardData'
import { ADD } from '../redux/actions/action';

const Products = () => {

  const [data, setData] = useState(CardData);

  const dispatch = useDispatch();
  const sendCart = (e) => {
    dispatch(ADD(e))
  }

  return (
    <>
      <Container className='mt-3'>
        <h2 className='text-center'>Products</h2>
        <Row className='d-flex justify-content-center align-items-center'>
          {
            data.map((item) => {
              return (
                <>
                  <Card style={{ width: '18rem', border: 'none' }} className="my-1 ">
                    <Card.Img variant="top" src={item.imgdata} style={{ height: '15rem' }} />
                    <Card.Body>
                      <Card.Title> {item.rname} </Card.Title>
                      <Card.Text>
                        Rs. {item.price}
                      </Card.Text>
                      <div className="button_div d-flex justify-content-center">
                        <Button onClick={() => sendCart(item)} variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Products;