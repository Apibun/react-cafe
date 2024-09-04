import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import incrementIcon from '../assets/images/icon-increment-quantity.svg'
import decrementIcon from '../assets/images/icon-decrement-quantity.svg'
import { currencyFormatter } from '../utils/currencyFormatter'
import { useSelector, useDispatch } from 'react-redux'
import { decrementProduct, incrementProduct } from '../reducers/cartSlice'

const ProductImage = ({ product, className }) => {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
      <img
        className={`w-full lg:w-60 rounded-xl object-cover border-2 ${className}`}
        src={product.image.mobile}
        alt={product.name}
      />
    </picture>
  )
}

const ProductButtonSelected = ({ product }) => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const quantity = cart.find(
    (productCart) => productCart.name === product.name
  ).quantity

  return (
    <div className="absolute -bottom-5 w-40 px-3 py-2.5 rounded-3xl bg-red">
      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch(decrementProduct(product))}
          className="flex items-center justify-center w-4 h-4 border border-white rounded-full"
        >
          <img src={decrementIcon} alt="decrement icon" />
        </button>
        <span className="flex-grow text-center text-white font-semibold">
          {quantity}
        </span>
        <button
          onClick={() => dispatch(incrementProduct(product))}
          className="flex items-center justify-center w-4 h-4 border border-white rounded-full"
        >
          <img src={incrementIcon} alt="increment icon" />
        </button>
      </div>
    </div>
  )
}

const ProductButton = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(incrementProduct(product))}
      className="absolute -bottom-5 w-40 px-6 py-2.5 rounded-3xl bg-white border border-primary-400"
    >
      <div className="flex items-center justify-between">
        <img src={addToCartIcon} alt="add to cart icon" />
        <span className="font-semibold text-sm">Add to Cart</span>
      </div>
    </button>
  )
}

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart.items)
  const isIncart = cart.some((productCart) => productCart.name === product.name)

  return (
    <div className="md:pr-6 md:pb-3 mt-4">
      <div className="flex justify-center relative">
        <ProductImage
          product={product}
          className={isIncart ? 'border-red' : 'border-transparent'}
        />
        {isIncart ? (
          <ProductButtonSelected product={product} />
        ) : (
          <ProductButton product={product} />
        )}
      </div>
      <div className="mt-6 lg:mt-10 leading-6">
        <p className="text-primary-500 text-sm">{product.category}</p>
        <p className="text-primary-900 font-semibold">{product.name}</p>
        <p className="text-red font-medium text-lg">
          {currencyFormatter.format(product.price)}
        </p>
      </div>
    </div>
  )
}

export default Product
