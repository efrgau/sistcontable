import React,{Component} from 'react'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'


class WelcomeComp extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
          <div>
             Esta es el espacio de tareas contables
          </div>
        )
    }
}



export default WelcomeComp;