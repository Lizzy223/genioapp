import React from 'react'
import Navbar from './Navbar/Navbar'
import Fxcenter from './Pages/Fxcenter/Fxcenter'
import Beneficiary from './Pages/Beneficiaries/Beneficiary'
import Sidebar from './Sidebar/Sidebar'

const Dash = () => {
  return (
    <div>

    <Sidebar/>
    {/* <!-- main content --> */}
    <div class="main-content">
       <Navbar name='Huss Smith'/>
        <Beneficiary/>
        {/* <Fxcenter/> */}
    </div>
    </div>
  )
}

export default Dash