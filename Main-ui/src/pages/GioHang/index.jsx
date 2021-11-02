import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/Cart';
import './index.scss';
function Cart(props) {

    const { cartItems, setCartItems } = useContext(CartContext);

    return (
        <div className='Cart'>
            <section className='Cart__head'>
                <Link to='/shop' style={{ textDecoration: 'none' }}>
                    <Button variant='outlined' size='small'><i class="fas fa-arrow-circle-left"> </i>Continue shopping</Button>
                </Link>
            </section>
            <hr />
            <section className="Cart__content">
                <table>
                    <tr>
                        <td>Tên hàng</td>
                        <td>Giá bán</td>
                    </tr>
                </table>
                {cartItems.map((item, index) => {
                    return <tr>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>


                })}
            </section>
        </div>
    );
}

export default Cart;