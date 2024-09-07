import removeIcon from '../assets/images/icon-remove-item.svg'
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg'
import emptyCartImg from '../assets/images/illustration-empty-cart.svg'
import { currencyFormatter } from '../utils/currencyFormatter'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../reducers/cartSlice'
import ConfirmOrderModal from './ConfirmOrderModal'
import { resetCart } from '../reducers/cartSlice'
import confirmOrderIcon from '../assets/images/icon-order-confirmed.svg'

const ProductInCart = ({ product }) => {
  const dispatch = useDispatch()

  const totalPrice = product.price * product.quantity

  return (
    <div className="flex justify-between items-center py-3" key={product.name}>
      <div className="flex flex-col justify-center leading-7">
        <div className="font-semibold text-sm text-primary-900 leading-9">
          {product.name}
        </div>
        <div className="flex gap-x-2">
          <p className="mr-2 font-semibold text-sm text-red">
            {`${product.quantity}x`}
          </p>
          <p className="text-sm text-primary-400">{`@ ${currencyFormatter.format(
            product.price
          )}`}</p>
          <p className="text-sm text-primary-500 font-semibold">
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
}

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <div className="mt-1 mb-3">
        <img src={emptyCartImg} alt="empty cart image" />
      </div>
      <p className="text-primary-500 font-semibold">
        Your added items will appear here
      </p>
    </div>
  )
}

const ProductInModal = ({ product }) => {
  const totalPrice = product.price * product.quantity

  return (
    <div className="flex justify-between items-center py-4" key={product.name}>
      <div className="flex gap-x-4">
        <div className="w-12">
          <img
            className="object-contain rounded-md"
            src={product.image.thumbnail}
            alt="image thumbnail"
          />
        </div>
        <div className="w-[9.5rem] md:w-auto lg:w-auto text-sm leading-6">
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
        {currencyFormatter.format(totalPrice)}
      </div>
    </div>
  )
}

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const isNotEmptyCart = cart.length > 0
  const orderAmount = cart.reduce((acc, value) => acc + value.quantity, 0)
  const sumPrice = cart.reduce(
    (acc, value) => acc + value.quantity * value.price,
    0
  )

  const handleOpenModal = () => {
    document.body.style.overflow = 'hidden'
    setShowModal(true)
  }

  const handleCloseModal = (isShowModal) => {
    document.body.style.overflow = 'unset'
    setShowModal(isShowModal)
  }

  const handleConfirmOrder = () => {
    dispatch(resetCart())
    document.body.style.overflow = 'unset'
    setShowModal(false)
  }

  return (
    <div className="xl:w-96 my-6 lg:ml-3 p-6 bg-white rounded-lg">
      <div className="mb-3 text-red text-2xl font-bold">
        Your Cart {`(${orderAmount})`}
      </div>
      {isNotEmptyCart ? (
        <div className="divide-y divide-gray-100">
          {cart.map((product) => (
            <ProductInCart key={product.name} product={product} />
          ))}
          <div className="flex justify-between items-center py-6">
            <p className="text-primary-900 text-sm">Order Total</p>
            <div className="text-xl font-bold">
              {currencyFormatter.format(sumPrice)}
            </div>
          </div>
          <div className="flex justify-center gap-x-2 py-3 mb-4 rounded-lg bg-primary-50">
            <img src={carbonNeutralIcon} alt="carbon neutral icon" />
            <span className="text-primary-900 text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{' '}
              delivery
            </span>
          </div>
          <button
            onClick={handleOpenModal}
            className="w-full p-3 rounded-full bg-red text-white"
          >
            <span className="font-semibold">Confirm Order</span>
          </button>
        </div>
      ) : (
        <EmptyCart />
      )}
      <ConfirmOrderModal isShowModal={showModal} handleClose={handleCloseModal}>
        {/* modal-header */}
        <img
          className="my-4 lg:mt-2"
          src={confirmOrderIcon}
          alt="confirm order icon"
        />
        <div className="text-3xl lg:text-4xl font-bold max-w-60 lg:max-w-fit">
          Order Confirmed
        </div>
        <div className="mt-2 text-primary-500">
          we hope you enjoy your food!
        </div>
        {/* modal body */}
        <div className="px-5 pt-2 my-7 rounded-lg bg-primary-50 divide-y">
          {cart.map((product) => (
            <ProductInModal key={product.name} product={product} />
          ))}
          <div className="flex justify-between items-center py-6">
            <p className="text-sm text-primary-900">Order Total</p>
            <div className="text-xl font-bold">
              {currencyFormatter.format(sumPrice)}
            </div>
          </div>
        </div>
        {/* modal footer */}
        <button
          onClick={handleConfirmOrder}
          className="w-full p-3 rounded-full bg-red text-white"
        >
          <span className="font-semibold text-sm">Start New Order</span>
        </button>
      </ConfirmOrderModal>
    </div>
  )
}

export default Cart
