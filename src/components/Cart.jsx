import removeIcon from '../assets/images/icon-remove-item.svg'
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg'
import emptyCartImg from '../assets/images/illustration-empty-cart.svg'
import { currencyFormatter } from '../utils/currencyFormatter'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../reducers/cartSlice'
import ConfirmOrderModal from './ConfirmOrderModal'
import { resetCart } from '../reducers/cartSlice'

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const orderAmount = cart.reduce((acc, value) => acc + value.quantity, 0)
  const sumPrice = cart.reduce(
    (acc, value) => acc + value.quantity * value.price,
    0
  )

  const handleNewOrder = () => {
    dispatch(resetCart())
    setShowModal(false)
  }

  return (
    <div className="m-6 p-6 bg-white rounded-lg">
      <div className="mb-2 text-red text-2xl font-bold">
        Your Cart ({orderAmount})
      </div>
      {cart.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {cart.map((product) => {
            const totalPrice = product.price * product.quantity
            return (
              <div
                className="flex justify-between items-center py-3"
                key={product.name}
              >
                <div className="flex flex-col justify-center leading-7">
                  <div className="font-semibold text-primary-900">
                    {product.name}
                  </div>
                  <div className="flex gap-x-2">
                    <p className="mr-2 text-red font-semibold">
                      {`${product.quantity}x`}
                    </p>
                    <p className="text-primary-400">{`@ ${currencyFormatter.format(
                      product.price
                    )}`}</p>
                    <p className="text-primary-500 font-semibold">
                      {currencyFormatter.format(totalPrice)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeProduct(product))}
                  className="flex items-center justify-center w-5 h-5 border-2 border-primary-300 rounded-full"
                >
                  <img width={12} src={removeIcon} alt="remove icon" />
                </button>
              </div>
            )
          })}
          <div className="pt-5">
            <div className="flex justify-between items-center">
              <p className="text-primary-900 text-sm">Order Total</p>
              <div className="text-xl font-bold">
                {currencyFormatter.format(sumPrice)}
              </div>
            </div>
            <div className="flex justify-center gap-x-2 py-3 my-4 rounded-lg bg-primary-50">
              <img src={carbonNeutralIcon} alt="carbon neutral icon" />
              <span className="text-primary-900 text-sm">
                This is a <span className="font-semibold">carbon-neutral</span>{' '}
                delivery
              </span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="w-full p-3 rounded-full bg-red text-white"
            >
              <span className="font-semibold">Confirm Order</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src={emptyCartImg} alt="empty cart image" />
          <p className="text-primary-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      )}
      <ConfirmOrderModal isShowModal={showModal}>
        <div className="px-5 py-2 my-7 rounded-lg bg-primary-50 divide-y">
          {cart.map((product) => (
            <div
              className="flex justify-between items-center py-4"
              key={product.name}
            >
              <div className="flex gap-x-4">
                <div className="w-12">
                  <img
                    className="object-contain rounded-md"
                    src={product.image.thumbnail}
                    alt="image thumbnail"
                  />
                </div>
                <div className="w-[9.5rem] text-sm leading-6">
                  <div className="font-semibold truncate">{product.name}</div>
                  <div className="flex gap-x-4">
                    <p className="text-red font-semibold">{`${product.quantity}x`}</p>
                    <p className="text-primary-500">{`@ ${currencyFormatter.format(
                      product.price
                    )}`}</p>
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold">
                {currencyFormatter.format(product.price * product.quantity)}
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-6 pb-4">
            <p className="text-sm text-primary-900">Order Total</p>
            <div className="text-xl font-bold">
              {currencyFormatter.format(sumPrice)}
            </div>
          </div>
        </div>
        <button
          onClick={handleNewOrder}
          className="w-full p-3 rounded-full bg-red text-white"
        >
          <span className="font-semibold text-sm">Start New Order</span>
        </button>
      </ConfirmOrderModal>
    </div>
  )
}

export default Cart
