import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import add from '../../../assets/add.svg'
import Thirdpartyaccount from './Thirdpartyaccount';
import './main.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const Beneficiary = (props) => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <main>
        <div class='container-fluid'>
            <div class='row'>
            <div class='col-md-12  align-items-center'>
                    <div class='float-left align-items-center'>
                        <p class='font-bold'>Your Beneficiary (s)</p>
                    </div>
                    <div class='float-right align-items-center'>
                        <button class='d-flex nav-btn align-items-center'>
                            <img src={add} alt='' class='img-fluid img-responsive'/>
                            Add New Beneficiary
                        </button>
                    </div>
                </div> 
                <Box sx={{ width: '100%' }} class=' col-md-12 m-auto'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} class='d-flex justify-content-between'>
                        <Tabs class='ui-tab' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Own Accounts" {...a11yProps(0)} />
                        <Tab style={{color:'#000',fontWeight:'bold'}} label="Third Party Accounts" {...a11yProps(1)} />
                        <Tab label="Borderless Recipent" {...a11yProps(2)} />
                        <Tab label="Mobile Money Recipent" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Thirdpartyaccount/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        
                    </TabPanel>
                </Box>
            </div>
        </div>
    </main>
  )
}

export default Beneficiary