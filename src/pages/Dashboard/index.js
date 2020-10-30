import React,{Component} from 'react'
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
                <div>Demo es el ejemplo</div>
                <WelcomeComp />
                </body>
            </React.Fragment>
        )
    }
}



export default Dashboard;