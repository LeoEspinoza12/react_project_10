import React from 'react';
import Input from '../components/Dashboard/InputArea'
import City from '../components/Dashboard/City'
import Footer from '../components/Dashboard/Footer'

const Dashboard = (props) => {

 
    
  return (
    <React.Fragment>
      <div className="container">
        <Input />
        <City />
        <Footer />
      </div>
    </React.Fragment>
  )
}


export default Dashboard

