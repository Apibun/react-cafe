import { product } from '../constants'
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'

const Product = () => {
  return (
    <div className="grid grid-row-1 mx-6">
      {product.map((item) => (
        <div className="mt-4" key={item.name}>
          <div className="flex justify-center relative">
            <img
              className="w-full rounded-xl object-contain"
              src={item.image.mobile}
              alt={item.name}
            />
            <button className="absolute -bottom-5 w-[9.5rem] px-6 py-2.5 rounded-3xl bg-white border border-primary-400">
              <div className="flex items-center justify-between">
                <img src={addToCartIcon} alt="add to cart icon" />
                <span className="font-medium text-sm">Add to Cart</span>
              </div>
            </button>
          </div>
          <div className="mt-6 leading-6">
            <p className="text-primary-500 text-sm">{item.category}</p>
            <p className="text-primary-900 font-semibold">{item.name}</p>
            <p className="text-red font-medium text-lg">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
