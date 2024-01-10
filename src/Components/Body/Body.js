import React from 'react'
import Footer from '../Footer/Footer'
import RouterNavigation from '../RouterNavigation/RouterNavigation'
import { HashRouter } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <HashRouter>
        <RouterNavigation />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default Body
