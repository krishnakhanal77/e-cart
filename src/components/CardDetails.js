import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md';

const CardDetails = () => {
  return (
    <>
      <Container className='mt-2'>
        <h2 className="text-center">Cart Details:</h2>
        <Container className='mt-3 d-flex mx-auto'>
          <div className="itemsdetails">
            <div className="items_img p-3">
              <img src="https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg" height={200} alt="" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>: Momo</p>
                    <p> <strong>Price</strong>: Rs. 500 </p>
                    <p> <strong>Disches</strong>: Nepali </p>
                    <p> <strong>Total</strong>: 500 </p>
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
        </Container>
      </Container>
    </>
  )
}

export default CardDetails