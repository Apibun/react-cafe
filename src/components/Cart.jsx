import removeIcon from '../assets/images/icon-remove-item.svg'
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg'
import emptyCartImg from '../assets/images/illustration-empty-cart.svg'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  
  const orderAmount = cart.reduce((acc, value) => acc + value.quantity, 0)
  const sumPrice = cart.reduce(
    (acc, value) => acc + value.quantity * value.price,
    0
  )

  return (
    <div className="m-6 p-6 bg-white rounded-lg">
      <div className="mb-2 text-red text-2xl font-bold">
        Your Cart ({cart.length > 0 ? orderAmount : 0})
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
                      {product.quantity}x
                    </p>
                    <p className="text-primary-400">@ {product.price}</p>
                    <p className="text-primary-500 font-semibold">
                      {totalPrice}
                    </p>
                  </div>
                </div>
                <button className="flex items-center justify-center w-5 h-5 border-2 border-primary-300 rounded-full">
                  <img width={12} src={removeIcon} alt="remove icon" />
                </button>
              </div>
            )
          })}
          <div className="pt-5">
            <div className="flex justify-between items-center ">
              <p className="text-primary-900 text-sm">Order Total</p>
              <div className="text-xl font-bold">{sumPrice}</div>
            </div>
            <div className="flex justify-center gap-x-2 py-3 my-4 rounded-lg bg-primary-50">
              <img src={carbonNeutralIcon} alt="carbon neutral icon" />
              <span className="text-primary-900 text-sm">
                This is a <span className="font-semibold">carbon-neutral</span>{' '}
                delivery
              </span>
            </div>
            <button className="w-full p-3 rounded-full bg-red text-white">
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
    </div>
  )
}

export default Cart
