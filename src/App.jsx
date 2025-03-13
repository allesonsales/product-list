import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './pages/item/item'
import Provider from './provider'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import ErrorBoundary from './errorboundary'
import ModalBuy from './pages/modalBuy/modalBuy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider>
        <Home />
        <Item />
        <Cart />
        <ModalBuy />
      </Provider>
    </>
  )
}

export default App
