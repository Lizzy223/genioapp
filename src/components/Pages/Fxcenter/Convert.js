import React from 'react'
import './Fxcenter.css'
import usd from '../../../assets/usdflag.svg'
import pay from '../../../assets/convertsend.svg'
import euro from '../../../assets/eurflag.svg'
import { TabList, TabPanel,Tab, Tabs } from 'react-tabs';




// table

const Rows = [
    {id:1, currency:'USD US Dollar', img:usd, rate:'1.605923', change:'Okalhoma', chart:'chief'},    {id:2, currency:'0', img:euro, rate:'Algeria', change:'Okalhoma', chart:'chief'},
    {id:3, currency:'EUR Euro', img:pay, rate:'1.700041', change:'Okalhoma', chart:'chief'},
    {id:4, currency:'GBP British Pound', img:usd, rate:'0.554125', change:'Okalhoma', chart:'chief'},
    {id:5, currency:'AUD Austrialian Dollar', img:usd, rate:'71.11923', change:'Okalhoma', chart:'chief'},
    {id:6, currency:'CAD Canadian Dollar', img:usd, rate:'0.114523', change:'Okalhoma', chart:'chief'}
]

const Table = (props) =>{
    const { currency,img, rate, change, chart}  = props;
   
       return(        
        
        <tr>
            <td>{img} {currency}</td>
            <td>{rate}</td>
            <td>{change}</td>
            <td>{chart}</td>
        </tr>
    )
    }

const LiveRate=() => {
    return(
        <div class=''>
            <p class='text-secondary'> Rates are updated every 5 seconds</p>
            <div class='mt-4'>
               

                <table className=' ' id='table'>
                    <thead>
                        <tr>                                                                            
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>Change</th>
                            <th>Chart</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {Rows.map((Row) =>
                <Table key={Row.id} currency={Row.currency} rate={Row.rate} change={Row.change} chart={Row.chart} />
                )}
                <button class='pay-btn'>Add Currency</button>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Convert = () => {
  return (
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-md-12 m-auto text-center'>
                <form>
                    <div class='row d-flex justify-content-between'>
                        <div class='col-md-3'>
                            <p class='text-left font-bold'>Amount</p>
                            <input type='text' class='convert-input' placeholder='$0.00'/>
                            <p class='mt-3 text-left' style={{color:'#2B4146'}}>Exchange rate: $1 = N20 </p>
                        </div>
                        <div class='col-md-3'>
                            <p class='text-left font-bold'>From</p>
                            <div>
                                <select  class='convert-input' name="cars" id="cars">
                                    <option class='select-items' value="USD - US Dollar">  USD - US Dollar</option>
                                    <option class='select-items'  value="EUR - Euro">EUR - Euro</option>
                                </select>
                            </div>
                            <p class='mt-3 text-left' style={{color:'#2B4146'}}>You send: $ 0.00</p>
                        </div>
                        <div class='col-md-3'>
                            <p class='text-left font-bold'>To</p>
                            <select  class='convert-input' name="cars" id="cars">
                                <option class='select-items' value="EUR - Euro"> <img src={euro} alt='' class='img-responsive img-fluid'/> EUR - Euro</option>
                                <option class='select-items'  value="EUR - Euro"><img src={usd} alt='' class='img-responsive img-fluid'/>EUR - Euro</option>
                            </select>
                            <p class='mt-3 text-left' style={{color:'#2B4146'}}>They receive: €0.00</p>
                        </div>
                        <div class='col-md-12'>
                        {/* &nbsp is for creating space  */}
                            <div class='float-right d-flex justify-content-between'>
                                <p style={{color:'#2B4146', whiteSpace:'nowrap'}} class='mt-3'>Fees: <span class='font-bold'> $0.00</span></p> &nbsp;&nbsp;
                                <button class=' nav-btn'>
                                    <img src={pay} alt='' class='img-fluid img-responsive'/>&nbsp;&nbsp;
                                    convert & send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class='col-md-12 mt-2'>
                <Tabs>
                        <TabList className='col-md-8 m-auto text-center d-flex justify-content-between pl-5 mb-5'>
                            <Tab><button className='tab-btn active'> Live Rate</button></Tab>
                            <Tab><button className='tab-btn'> Other Companies Rate</button></Tab>
                        </TabList>
                        <TabPanel>
                            <LiveRate/>
                        </TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Convert