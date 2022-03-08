import React from 'react'
import logo from '../../assets/logo.svg'
import wallet from '../../assets/walletbalance.svg'
import eye from '../../assets/eye.svg'
import star from '../../assets/sidebarstar.svg'
import img1 from '../../assets/dashboard.svg'
import img2 from '../../assets/wallet.svg'
import img3 from '../../assets/card.svg'
import img4 from '../../assets/fxcenter.svg'
import img5 from '../../assets/profile.svg'
import img6 from '../../assets/pearls.svg'
import refer from '../../assets/refer.svg'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <input type="checkbox" name="" id="nav-toggle"/>
    <div class="sidebar">
        <div class="sidebar-brand">
            <h2>
                <img src={logo}  alt='' class='img-responsive img-fluid w-50 h-50 text-center d-block m-auto' />
            </h2>
        </div>
        <div class="sidebar-menu">
            <ul>
                <div class='col-9 m-auto rounded p-4 mb-5 nav-none' style={{background:'#2b899d', color:'#fff'}}>
                    <div class='row'>
                        <div class='col-md-12 d-flex'>
                            <div>
                                <img src={wallet} alt='' class='img-responsive img-fluid'/> &nbsp;
                            </div>
                            <div>
                                <p>Wallet balance</p>
                                <p class='font-bold'>$15,000.00</p>
                            </div>
                            <div>
                            &nbsp; <img src={eye} alt='' class='img-responsive img-fluid'/>
                            </div>
                        </div>
                        <hr/>
                        <div class='col-md-12 mt-1 d-flex'>
                            <div>
                                <img src={star} alt='' class='img-responsive img-fluid'/> &nbsp;
                            </div>
                            <div>
                                <p>Awarded Points</p>
                                <p class='font-bold'>35</p>
                            </div>
                        </div>
                        <hr/>
                        <div class='col-md-12 mt-1 d-flex'>
                            <button class='payin-btn'>Pay-In</button>&nbsp;&nbsp;
                            <button class='payout-btn'>Pay-Out</button>
                        </div>
                    </div>
                </div>
                <li className='mt-3'>
                    <a href="/" ><span class="las "><img scr={img1} alt='' class=''/> </span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="/" class="active"><span class="las "><img scr={img2} alt='' class=''/> </span>
                    <span>Wallet</span></a>
                </li>
                <li>
                    <a href="/"><span class="las "><img scr={img3} alt='' class=''/> </span>
                    <span>Cards</span></a>
                </li>
                <li>
                    <Link to="/fx-center"><span class="las "><img scr={img4} alt='' class=''/> </span>
                     <span>Fx center</span></Link>
                </li>
                <li>
                    <Link to="/"><span class="las "><img scr={img5} alt='' class=''/> </span>
                    <span>Beneficiary</span></Link>
                </li>
                <li>
                    <a href="/"><span class="las "><img scr={img6} alt='' class=''/> </span>
                    <span>Perks</span></a>
                </li>

                <div class='col-md-9 mt-3 rounded p-4 m-auto nav-none' style={{background:'#fff', color:'#000'}}>
                    <div class='w-100 d-flex' style={{background:'#fff', color:'#000'}}>
                        <div class='float-left'>
                            <img src={refer} alt='' class='img-responsive img-fluid'/> &nbsp;
                        </div>
                        <div class='float-right'>
                            <p class='font-bold'>Refer and earn</p>
                            <p class='text-secondary'>Use the below link to invite friends</p>
                        </div>                        
                    </div>
                    <div>
                    <button class='d-flex btn-sm nav-btn text-center'>
                        Invite Friends
                    </button>
                    </div>
                </div>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Sidebar