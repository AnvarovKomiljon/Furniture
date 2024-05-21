import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import GeneralLayout from './pages/GeneralLayout/GeneralLayout'
import './App.css'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Card = React.lazy(() => import('./pages/Card/Card'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'))
const ProductPage = React.lazy(() => import('./pages/ProductPage/ProductPage'))
const Login = React.lazy(() => import('./pages/Login/Login'))

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<GeneralLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/productpage/:productId' element={<ProductPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default App
