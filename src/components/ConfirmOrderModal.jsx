import confirmOrderIcon from '../assets/images/icon-order-confirmed.svg'
import { useSelector, useDispatch } from 'react-redux'

const ConfirmOrderModal = ({ isShowModal, children }) => {
  return (
    isShowModal && (
      //   backdrop
      <div className="flex justify-center items-end fixed inset-0 transition-colors bg-black/70">
        {/* modal */}
        <div className="relative w-[22rem] max-h-[41rem] overflow-auto px-6 py-5 rounded-xl bg-white">
          <img
            className="my-4"
            src={confirmOrderIcon}
            alt="confirm order icon"
          />
          {/* modal-title */}
          <div className="text-3xl font-bold max-w-60">Order Confirmed</div>
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
