import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';

const CardDetails = () => {

  const cartData = useSelector((state) => state.cartreducer.carts);
  console.log("this is fdsa", cartData);

  return (
    <>
      {
        cartData.length ?
          <Container className='mt-2'>
            <h2 className="text-center">Cart Details:</h2>
            <Container className='mt-3 mx-auto'>
              {
                cartData.map((cartItem) => {
                  return (
                    <>
                      <div className="itemsdetails">
                        <div className="items_img p-3">
                          <img src={cartItem.imgdata} height={200} alt="" />
                        </div>
                        <div className="details">
                          <Table>
                            <tr>
                              <td>
                                <p> <strong>{cartItem.rname} </strong>: </p>
                                <p> <strong>Price</strong>: Rs. 500 </p>
                                <p> <strong>Disches</strong>: Nepali </p>
                              </td>
                              <td>
                                <p> <strong>Rating</strong>: Momo</p>
                                <p> <strong>Order Review</strong>: 1000 order from people </p>
                                <p> <strong>Remove</strong><MdDelete /></p>
                              </td>
                            </tr>
                          </Table>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </Container>
            <p> <strong>Total</strong>: 500 </p>
          </Container>
          :
          <p>Your cart is empty</p>
    }

    </>
  )
}

export default CardDetails