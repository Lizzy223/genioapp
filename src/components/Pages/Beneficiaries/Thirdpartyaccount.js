import React from 'react'
import euro from '../../../assets/euro.svg'
import dollar from '../../../assets/dollar.svg'
import dot from '../../../assets/threedot.svg'
import img1 from '../../../assets/paysend.svg'
import img2 from '../../../assets/default.svg'
import img3 from '../../../assets/trash.svg'
import './main.css'



const Beneficiary =(props) =>{
    const { currencyImg, name, number, currency } = props;
    return(
        <div class='col-md-3 border round-br p-2 m-1'>
                    <div class='row'>
                        <div class='col-md-12'>
                            <div class='row d-flex justify-number-between'>
                                <div class='float-left col-3'>
                                    <img src={currencyImg} alt='' class='img-responsive img-fluid'/>
                                </div>
                                <div class='col-md-6'>
                                    <p class='text-secondary' style={{whiteSpace:'nowrap',fontSize:'1rem'}}>{name}</p>
                                </div>
                                <div class='col-md-3 float-right'>
                                    <img src={dot} alt='' class='img-responsive img-fluid'/>
                                </div>
                            </div>
                        </div>                       
                        <div class='col-md-12 mt-2'>
                            <h5 class='font-bold'>{number}</h5>
                        </div>
                        <div class='col-md-12 mt-4'>
                            <div class='float-left'>
                                <p class='font-bold' style={{whiteSpace:'nowrap',fontSize:'1rem'}}>{name}</p>
                            </div>
                            <div class='float-right'>
                                <p class='text-secondary'>{currency}</p>
                            </div>
                        </div>
                        <hr/>
                        <div class='col-12 text-center mt-4 '>
                            <div class='row text-center'>
                                <div class='d-flex  justify-content-evenly'>
                                    <div class=' col-md-2'>
                                        <button class='btn-pay d-flex border-none'>
                                            <img src={img1} alt='' class='img-responsive img-fluid'/><span>Pay</span>
                                        </button>
                                    </div>
                                    <div class='col-md-4'>
                                        <button class='btn-pay d-flex border-none'>
                                            <img src={img2} alt='' class='img-responsive img-fluid'/><span style={{whiteSpace:'nowrap',fontSizeAdjust:'from-font'}} >set as default</span>
                                        </button>
                                    </div>
                                    <div class='col-md-3'>
                                        <button class='btn-pay text-red d-flex border-none'>
                                            <img src={img3} alt='' class='img-responsive img-fluid'/><span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    </div>
    )
}

const Details = [
    {
        id:1, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro,
        currency:'EUR'
    },
    {
        id:2, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:dollar,
        currency:'USD'
    },
    {
        id:3, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    {
        id:4, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    {
        id:5, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    {
        id:6, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    {
        id:7, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    {
        id:8, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    {
        id:9, 
        number:'PL9XXXXXXXXXXXX775',
        name:'Cameron Williamson',
        currencyImg:euro
    },
    

]




const Thirdpartyaccount = () => {
  return (
    <div class='container-fluid'>
        <div class='row w-100'>
            <div class='col-md-12 '>
                <div class='float-left'>
                    <p class='font-bold'>53 Beneficiary (s)</p>
                </div>
                <div class='float-right'>
                        <div class=' nav-none' >
                            <div class="search-wrapper  m-auto" >
                                <span class="las la-search"> </span>
                                <input type="search" placeholder="Search here"/>
                            </div>&nbsp;&nbsp;&nbsp;
                            <p class='align-item-center mt-2 font-bold' style={{whiteSpace:'nowrap'}}>Sort by: <span style={{color:'var(--main-color)'}}>All &nbsp; <i class='las la-angle-down'/></span></p>
                        </div>
                       
                </div>
             </div>
             <div class='col-lg-12 w-100 mt-3'>
                 <div class='row justify-content-evenly w-100'>
                     {/*  */}
                     {Details.map((Detail) =>
                    <Beneficiary key={Detail.id} name={Detail.name} number={Detail.number} currency={Detail.currency} currencyImg={Detail.currencyImg} />
                    )}
                    {/*  */}
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Thirdpartyaccount