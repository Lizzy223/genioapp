import React from 'react'
import img1 from '../../assets/tree.svg'
import img2 from '../../assets/notification.svg'
import img3 from '../../assets/profile.svg'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div class='container-fluid'>
         <header>
            <div  class='row w-100'>
                <div class='col-md-12 justify-content-betwween d-flex align-items-center'>
                    <div class='col-md-3 float-left align-items-center'>
                        <h2 class='font-sm-small'>
                            {props.dash}
                        </h2>
                    </div>
                    <div class='col-md-5 ml-5 nav-none align-items-center' >
                        <div class="search-wrapper  m-auto" >
                            <span class="las la-search"> </span>
                            <input type="search" placeholder="Search here"/>
                        </div>
                    </div>
                    <div class='col-md-4 col-sm-12 align-items-center float-right '>
                        <div class='row d-flex align-items-center  navbar-end'>
                            <div class='col-md-6 d-flex align-items-center '>
                                <img src={img1} alt='' class='img-fluid img-responsive w-25 h-25'/>&nbsp;
                                <span class='text-secondary'>0 planted</span>&nbsp;
                                <img src={img2} alt='' class='img-fluid img-responsive w-25 h-25' />
                            </div>
                            <div class='col-md-6 align-items-center d-flex'>

                            <img src={img3} alt='' class='img-fluid img-responsive'/>&nbsp;                            
                            <div class='mr-3'>
                                <small class='text-success'>Verified</small>
                                    <p class='text-bold' style={{whiteSpace:'nowrap'}}>{props.name} &nbsp; <i class='las la-angle-down'/></p>
                            </div>
                            </div>
                        </div>                        
                    </div>
                </div>
               
            </div>
            
            {/* <h2>
                Beneficiaries
            </h2>

            <div class="search-wrapper col-2 m-auto" >
                <span class="las la-search"> </span>
                <input type="search" placeholder="Search here"/>
            </div> */}
            {/* <div class="user-wrapper">
                <img src="" alt="" width="30px" height="30px"/>
                <div>
                    <h4>John Doe</h4>
                    <small>Super admin</small>
                </div>
            </div> */}
            {/* <div class='col-6 float-right '>
                <div class='row d-flex  navbar-end'>
                    <div class='col-md-6 d-flex '>
                        <img src={img1} alt='' class='img-fluid img-responsive w-25 h-25'/>&nbsp;
                        <span class='text-secondary'>0 planted</span>&nbsp;
                        <img src={img2} alt='' class='img-fluid img-responsive w-25 h-25' />
                    </div>
                    <div class='col-md-6 d-flex'>

                    <img src={img3} alt='' class='img-fluid img-responsive'/>&nbsp; */}
                    {/* dropdown */}
                    {/* <div class="dropdown">
                        <p class="border-none dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{whiteSpace:'nowrap'}}>
                            <small class='text-success'>Verified</small>
                            <p class='text-bold'>Huss Smith</p>
                        </p>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class='col-md-12 mt-2'>
                <div class='float-left'>
                    <p>Your Beneficiary (s)</p>
                </div>
                <div class='float-right'>
                    <button class='d-flex nav-btn'>
                        <img src={add} alt='' class='img-fluid img-responsive'/>
                        Add New Beneficiary
                    </button>
                </div>
            </div> */}
        </header>
        
    </div>
  )
}

export default Navbar