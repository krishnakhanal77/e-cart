import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { DEL } from '../redux/actions/action';

const CardDetails = () => {

  const cartData = useSelector((state) => state.cartreducer.carts);
 // console.log("this is fdsa", cartData);
const dispatch = useDispatch();
const del =(id) =>{
  dispatch(DEL(id))
}
const [price, setPrice] = useState(0);
console.log(price)

const total = () =>{
  let price = 0;
  cartData.map((item, k)=>{
    price = item.price + price;
  })
  setPrice(price)
}
 useEffect (()=>{
total();
 },[total])
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
                                <p> <strong>Price</strong>: Rs. {cartItem.price} </p>
                                <p> <strong>Disches</strong>: Nepali </p>
                              </td>
                              <td>
                                <p> <strong>Rating</strong>: Momo</p>
                                <p> <strong>Order Review</strong>: 1000 order from people </p>
                                <p onClick={() => del(cartItem.id)} > <strong>Remove</strong><MdDelete /></p>
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
            <p> <strong>Total</strong>: Rs.{price} </p>
          </Container>
          :
          <p>Your cart is empty</p>
    }

    </>
  )
}

export default CardDetails