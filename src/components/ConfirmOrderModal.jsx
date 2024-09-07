const ConfirmOrderModal = ({ isShowModal, handleClose, children }) => {
  const handleCloseModal = () => {
    handleClose(!isShowModal)
  }

  return (
    isShowModal && (
      <>
        {/* backdrop */}
        <div className="w-full fixed inset-0 z-10 transition-colors bg-black/70">
          {/* modal */}
          <div
            className="fixed inset-0 z-20 overflow-y-auto"
            onClick={handleCloseModal}
          >
            {/* modal dialog */}
            <div className="flex items-center min-h-full md:max-w-[28rem] lg:max-w-[31.5rem] mx-auto">
              {/* modal content */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[35rem] max-h-full my-10 p-5 rounded-xl bg-white"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default ConfirmOrderModal
