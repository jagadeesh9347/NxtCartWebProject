import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: Rs <span data-testid="total-price">{totalAmount}</span>
            /-
          </h1>
          <p className="total-items">
            <span data-testid="total-items">{totalItems}</span> Items in Cart
          </p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
          <button
            className="remove-all-button"
            type="button"
            data-testid="remove-all"
            onClick={removeAllCartItems}
          >
            Remove All
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
