import React, {Component} from 'react'
import { Switch, BrowserRouter as Router} from "react-router-dom";

//import Routes
import {authPrivateRoutes, publicRoutes} from "./routes"
import AppRoute from "./routes/route"
import NonAuthLayout from "./components/NonAuthLayout"
import VerticalLayout from "./components/VerticalLayout"

class App extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }
  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx)=>(
              <AppRoute
              path={route.path}
              component={route.component}
              layout={NonAuthLayout}
              key={idx}
              isAuthProtected={false}
              />
            ))}
            { authPrivateRoutes.map((route,idx)=>(
               <AppRoute
               path={route.path}
               component={route.component}
               layout={VerticalLayout}
               key={idx}
               isAuthProtected={true}
               />
            ))}

          </Switch>
        </Router>
      </React.Fragment>
      )
  }
}

export default App;
