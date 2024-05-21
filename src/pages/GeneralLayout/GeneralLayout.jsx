import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const GeneralLayout = () => {
  const navigate = useNavigate()
useEffect(() => {
  const token = localStorage.getItem('auth-token')
  if (!token) {
    navigate('/login')
  }
})

  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default GeneralLayout
