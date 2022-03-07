import React from 'react'
import Convert from './Convert.js'
import img1 from '../../../assets/convert.svg'
import img2 from '../../../assets/rate.svg'
import img3 from '../../../assets/balance.svg'
import { TabList, TabPanel,Tab, Tabs } from 'react-tabs';
import './Fxcenter.css'



const Fxcenter = (props) => {

   

  return (
    <main>
        
        <div className='container-fluid mt-n5'>
            <div className='row'>
                <div className='col-md-12 p-5 '>
                    
                    <Tabs>
                        <TabList className='col-md-8 m-auto text-center d-flex justify-content-between pl-5 '>
                            <Tab><button className='tab-btn '> <img src={img3} class='img-fluid tab-img img-responsive w-75 h-75' alt=''/> &nbsp; Balance Exchange</button></Tab>
                            <Tab><button className='tab-btn'><img src={img2} class='img-fluid tab-img img-responsive' alt=''/> &nbsp; Forward Rate</button></Tab>
                            <Tab><button className='tab-btn active'><img src={img1} class='img-fluid tab-img img-responsive' alt=''/> &nbsp; Convert and send</button></Tab>
                        </TabList>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel class='active'> <Convert/> </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Fxcenter