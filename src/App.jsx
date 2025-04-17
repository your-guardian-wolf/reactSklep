import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ProductList from './components/products/ProductList'

const mockUser = {
  name: "John Doe"
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header user={mockUser}/>
     <ProductList/>
    </>
  )
}

export default App
