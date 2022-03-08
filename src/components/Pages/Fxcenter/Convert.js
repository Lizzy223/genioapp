import React, {useState}  from 'react'
import './Fxcenter.css'
import usd from '../../../assets/usdflag.svg'
import pay from '../../../assets/convertsend.svg'
import euro from '../../../assets/eurflag.svg'
import gain from '../../../assets/gain.svg'
import loss from '../../../assets/LOSS.svg'
import add from '../../../assets/add.svg'
import Chart from './Chart'
import { TabList, TabPanel,Tab, Tabs } from 'react-tabs';
import { display } from '@mui/system'




// table

const Rows = [
    {id:1, currency:'USD US Dollar', img:usd, rate:'1.605923', change:'+0.53%', chart:gain}, 
    {id:3, currency:'EUR Euro', img:euro, rate:'1.700041', change:'-1.03%', chart:loss},
    {id:4, currency:'GBP British Pound', img:usd, rate:'0.554125', change:'-0.25%', chart:loss},
    {id:5, currency:'AUD Austrialian Dollar', img:usd, rate:'71.11923', change:'+0.84%', chart:gain},
    {id:6, currency:'CAD Canadian Dollar', img:usd, rate:'0.114523', change:'+2.44%', chart:gain}
]

const Table = (props) =>{
    const { currency,img, rate, change, chart}  = props;
   
       return(        
        
        <tr>
            <td class='d-flex'><img src={img} alt='' class='img-responsive rounded-img img-fluid'/> &nbsp; &nbsp; {currency}</td>
            <td>{rate}</td>
            <td>{change}</td>
            <td><img src={chart} alt='' class='img-responsive img-fluid'/></td>
        </tr>
    )
    }

const LiveRate=() => {
    return(
        <div class=''>
            <p class='text-secondary font-bold'> Rates are updated every 5 seconds</p>
            <div class='mt-4'>
               

                <table className=' ' id='table'>
                    <thead>
                        <tr>                                                                            
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>Change(24hrs)</th>
                            <th>Chart(24hrs)</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {Rows.map((Row) =>
                <Table key={Row.id} img={Row.img} currency={Row.currency} rate={Row.rate} change={Row.change} chart={Row.chart} />
                )}
                <button class='add-btn align-items-center'><i class='las la-plus font-bold'/> Add Currency</button>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Convert = () => {
    const [show, setShow] = useState(false);

    const [isShow, setIsShow] = useState(false);

  return (
    <div class='container-fluid'>
        <div class='row mt-5'>
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
                            <div class='w-100 col-12 justify-content-between p-2 d-flex border rounded-bg convert-input'onClick={() => setShow(!show)} >
                                <div class='float-left d-flex '>
                                    <img src={usd} alt='' class='img-fluid img-responsive'/>
                                    <span class=''>USD - US Dollar</span>
                                </div>
                                <div class='float-right'>
                                    <i class='la la-angle-down'/>
                                </div>   
                            </div>
                            
                            {show && (
                            <div class='w-100  mt-3  z-index p-2 rounded border' style={{height:'40%', background:'#fff'}}>
                                <div class='float-left d-flex '>
                                    <img src={usd} alt='' class='img-fluid img-responsive'/>
                                    <span class=''>USD - US Dollar</span>
                                </div>
                                <div class='float-left d-flex mt-2'>
                                    <img src={euro} alt='' class='img-fluid img-responsive'/>
                                    <span class=''>USD - US Dollar</span>
                                </div>
                            </div>
                             )}
.
                            <p class='mt-3 text-left' style={{color:'#2B4146'}}>You send: <span class='font-bold'> $ 0.00</span></p>
                        </div>
                        
                        <div class='col-md-3'>
                            <p class='text-left font-bold'>To</p>
                            <div class='w-100 col-12 justify-content-between p-2 d-flex border rounded-bg convert-input'onClick={() => setIsShow(!isShow)} >
                                <div class='float-left d-flex '>
                                    <img src={euro} alt='' class='img-fluid img-responsive'/>
                                    <span class=''>EUR - Euro</span>
                                </div>
                                <div class='float-right'>
                                    <i class='la la-angle-down'/>
                                </div>   
                            </div>
                            
                            {isShow && (
                            <div class='w-100  mt-3  z-index p-2 rounded border' style={{height:'40%', background:'#fff'}}>
                                <div class='float-left d-flex '>
                                    <img src={usd} alt='' class='img-fluid img-responsive'/>
                                    <span class=''>USD - US Dollar</span>
                                </div>
                                <div class='float-left d-flex mt-2'>
                                    <img src={euro} alt='' class='img-fluid img-responsive'/>
                                    <span class=''>USD - US Dollar</span>
                                </div>
                            </div>
                             )}
                            <p class='mt-3 text-left' style={{color:'#2B4146'}}>They receive:<span class='font-bold'> €0.00</span></p>
                        </div>
                        <div class='col-md-12 mt-4 mb-5'>
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
                            <Tab><button className='tab2-btn active'> Live Rate</button></Tab>
                            <Tab><button className='tab2-btn'> Other Companies Rate</button></Tab>
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