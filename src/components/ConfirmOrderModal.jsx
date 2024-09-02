import confirmOrderIcon from '../assets/images/icon-order-confirmed.svg'
import { useSelector, useDispatch } from 'react-redux'

const ConfirmOrderModal = ({ isShowModal, children }) => {
  return (
    isShowModal && (
      //   backdrop
      <div className="flex justify-center lg:items-center fixed inset-0 transition-colors bg-black/70">
        {/* modal */}
        <div className="relative w-full lg:w-[30rem] xl:w-[35rem] lg:max-h-[41rem] overflow-auto px-6 lg:px-8 py-5 lg:py-8 mt-20 lg:mt-0 rounded-xl bg-white">
          <img
            className="my-4 lg:mt-2"
            src={confirmOrderIcon}
            alt="confirm order icon"
          />
          {/* modal-title */}
          <div className="text-3xl lg:text-4xl font-bold max-w-60 lg:max-w-fit">
            Order Confirmed
          </div>
          <div className="mt-2 text-primary-500">
            we hope you enjoy your food!
          </div>
          {children}
        </div>
      </div>
    )
  )
}

export default ConfirmOrderModal
