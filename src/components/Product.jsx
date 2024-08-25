import { products } from '../constants'
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import incrementIcon from '../assets/images/icon-increment-quantity.svg'
import decrementIcon from '../assets/images/icon-decrement-quantity.svg'
import { currencyFormatter } from '../utils/currencyFormatter'
import { useSelector, useDispatch } from 'react-redux'
import { decrementProduct, incrementProduct } from '../reducers/cartSlice'

const Product = () => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div className="grid grid-row-1 mx-6">
      {products.map((product) => (
        <div className="mt-4" key={product.name}>
          <div className="flex justify-center relative">
            <img
              className="w-full rounded-xl object-contain"
              src={product.image.mobile}
              alt={product.name}
            />
            {cart.find((productCart) => productCart.name === product.name) ? (
              <div className="absolute -bottom-5 w-[9.5rem] px-6 py-2.5 rounded-3xl bg-red border border-primary-400">
                <div className="flex items-center justify-between">
                  <button onClick={() => dispatch(decrementProduct(product))}>
                    <img src={decrementIcon} alt="decrement icon" />
                  </button>
                  <span className="text-white font-semibold">
                    {
                      cart.find(
                        (productCart) => productCart.name === product.name
                      ).quantity
                    }
                  </span>
                  <button onClick={() => dispatch(incrementProduct(product))}>
                    <img src={incrementIcon} alt="increment icon" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => dispatch(incrementProduct(product))}
                className="absolute -bottom-5 w-[9.5rem] px-6 py-2.5 rounded-3xl bg-white border border-primary-400"
              >
                <div className="flex items-center justify-between">
                  <img src={addToCartIcon} alt="add to cart icon" />
                  <span className="font-semibold text-sm">Add to Cart</span>
                </div>
              </button>
            )}
          </div>
          <div className="mt-6 leading-6">
            <p className="text-primary-500 text-sm">{product.category}</p>
            <p className="text-primary-900 font-semibold">{product.name}</p>
            <p className="text-red font-medium text-lg">
              {currencyFormatter.format(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
