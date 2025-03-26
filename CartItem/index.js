import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      return (
        <li className="cart-item" data-testid={`cart-item-${id}`}>
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={() => decrementCartItemQuantity(id)}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity" data-testid="quantity">
                {quantity}
              </p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={() => incrementCartItemQuantity(id)}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price" data-testid="total-price">
                Rs {price * quantity}/-
              </p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={() => removeCartItem(id)}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            data-testid="remove-icon"
            onClick={() => removeCartItem(id)}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem

