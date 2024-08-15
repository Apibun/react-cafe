import Product from './components/Product'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <div className="w-full">
        <div className="text-4xl font-bold mx-6 my-4 text-primary-900">
          Desserts
        </div>
        <Product />
        <Cart />
      </div>
    </>
  )
}

export default App
