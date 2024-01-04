import React, { Component } from "react";
import axios from "axios";
import "./Cart.css";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export const calculateSubtotal = (cartItems) => {
  let subtotal = 0;
  for (const item of cartItems) {
    subtotal += item.price;
  }
  return subtotal;
};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      subtotal: 0,
    };
  }

  componentDidMount() {
    this.fetchCartItems();
  }

  deleteCartItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cartitems/${id}`);
      this.fetchCartItems();
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  fetchCartItems() {
    axios
      .get("http://localhost:5000/cartitems")
      .then((response) => {
        const cartItems = response.data;
        const subtotal = calculateSubtotal(cartItems);
        this.setState({ cartItems, subtotal });
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }

  render() {
    const { cartItems, subtotal } = this.state;

    return (
      <div className="cart">
        <div className="cart-card">
          <p className="cart-title">Shopping Cart</p>
          <div className="cart-container">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <div className="cart-content">
                  <div className="cart-text">
                    <span className="cart-name">Lorem Ipsum</span>
                    <p className="cart-price">${item.price}</p>
                  </div>
                  <button
                    className="cart-delete"
                    onClick={() => this.deleteCartItem(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="cart-subtotal">Subtotal: $ {subtotal}</p>
          <Link to = '/payment'><Button primary className="cart-buy">Checkout</Button></Link>
        </div>
      </div>
    );
  }
}

export default Cart;
