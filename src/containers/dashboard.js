import React, {useEffect} from 'react';
import * as action from '../store/actions/index'
import {connect} from 'react-redux'
import Input from '../components/Dashboard/InputArea'
import City from '../components/Dashboard/City'
import Footer from '../components/Dashboard/Footer'
import { Spring } from 'react-spring/renderprops'


const Dashboard = (props) => {

  useEffect(()=>{
    props.initSearch()    
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initSearch: () => { dispatch(action.userLog()) }
  }
}
export default connect(null, mapDispatchToProps)(Dashboard)

