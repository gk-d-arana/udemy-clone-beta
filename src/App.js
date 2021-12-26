import React from 'react'
import Wrapper from './components/utilComponents/Wrapper'
import './components/utilComponents/assets/css/styles.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ControlPanelWrapper from './components/ControlPanel/ControlPanelWrapper'


const App = () => {
  return(
    <div>

    <Router>
      <Switch>
      <Route component={ControlPanelWrapper} path="/control_panel/"/>
      <Route component={Wrapper} path="/"/>
    </Switch>
    </Router>
    

    
    </div>
  )
}
export default App