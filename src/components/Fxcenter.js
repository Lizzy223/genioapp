import React from 'react'
import Fxcenter from './Pages/Fxcenter/Fxcenter'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'

const Fxcenters = () => {
  return (
      <div>
        <Sidebar/>
        <div class="main-content">
            <Navbar name='Kudi LTD'/>
                <Fxcenter/>
        </div>
    </div>
  )
}

export default Fxcenters