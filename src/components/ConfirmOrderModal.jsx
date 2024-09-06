import confirmOrderIcon from '../assets/images/icon-order-confirmed.svg'

const ConfirmOrderModal = ({ isShowModal, handleClose, children }) => {
  const handleCloseModal = () => {
    handleClose(!isShowModal)
  }

  return (
    isShowModal && (
      //   backdrop
      <div
        onClick={handleCloseModal}
        className="flex justify-center items-center w-full max-h-full fixed inset-0 z-10 transition-colors bg-black/70"
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full md:w-[28rem] lg:w-[30rem] xl:w-[35rem] max-h-[34rem] md:max-h-[31rem] lg:max-h-[41rem] overflow-auto p-5 lg:p-8 rounded-xl bg-white"
        >
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
