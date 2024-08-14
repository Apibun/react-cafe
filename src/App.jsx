import ProductList from './components/ProductList'

const App = () => {
  return (
    <>
      <div className="w-full">
        <div className="text-4xl font-bold mx-6 my-4 text-primary-900">
          Desserts
        </div>
        <ProductList />
      </div>
    </>
  )
}

export default App
