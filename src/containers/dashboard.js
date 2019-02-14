import React, {useEffect} from 'react';
import Input from '../components/Dashboard/InputArea'
import City from '../components/Dashboard/City'
import Footer from '../components/Dashboard/Footer'
import { Spring } from 'react-spring/renderprops'
import {createLog} from '../shared/utility'


const Dashboard = (props) => {

  useEffect(()=>{
    createLog()
  }, [])
    
  return (
    <React.Fragment>
      <Spring
        from={{opacity: 0}}
        to={{opacity:1}}
        config={{duration: 1500}}>
          {props => 
            <div 
              style={props}
              className="container">
              <Input />
              <City />
              <Footer />
            </div>
          }

      </Spring>
    </React.Fragment>
  )
}


export default Dashboard

