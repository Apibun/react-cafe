import { products } from './constants'
import Product from './components/Product'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <div className="w-full lg:mx-auto md:py-10 xl:max-w-[1280px]">
        <div className="lg:flex justify-center items-start px-6 xl:px-0">
          <div>
            <div className="my-4 lg:mt-6 text-4xl font-bold text-primary-900">
              Desserts
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {products.map((product) => (
                <Product key={product.name} product={product} />
              ))}
            </div>
          </div>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default App
