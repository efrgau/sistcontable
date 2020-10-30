import React,{Component} from 'react'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'

import WelcomeComp from './WelcomeComp'
import Sidebar from "./SideBar"


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <React.Fragment>
                <header>
                <Sidebar />
                </header>
                <body>
                <WelcomeComp />
                </body>
            </React.Fragment>
        )
    }
}



export default Dashboard;