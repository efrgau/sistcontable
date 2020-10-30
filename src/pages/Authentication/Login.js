import React, { Component } from 'react'
import {Container, Row, Col, Card, CardBody, Alert, CardText} from "reactstrap"
import {AvForm, AvField} from "availity-reactstrap-validation"
import {Link} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

//import images of enterprise
import profile from "../../assets/images/profile-img.png"
import logo from "../../assets/images/logo.png"

class Login extends Component{
    constructor(props){
        super()
        //this.handleValidSubmit = this.handleValidSubmit.bind();
    }
     
    render(){
        return(
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                  <a href="/login" className="text-dark">
                    <i className="bx bx-home h2"></i>
                  </a>
                </div>
                <div className="account-pages my-5 pt-sm-5">
                  <Container>
                    <Row className="justify-content-center">
                      <Col md={8} lg={6} xl={5}>
                        <Card className="overflow-hidden">
                          <div className="bg-primary">
                            <Row>
                              <Col className="col-7">
                                <div className="text-light p-4">
                                  <h5 className="text-white">Bienvenidos</h5>
                                  <p>Login</p>
                                </div>
                              </Col>
                              <Col className="col-5 align-self-end">
                              <img src={profile} alt="" className="img-fluid pr-sm-2 mb-sm-3" />
                              </Col>
                            </Row>
                          </div>
                          <CardBody className="pt-0 bg-soft-warning">
                            <div>
                              <Link to="/">
                                <div className="avatar-md profile-user-wid mb-4">
                                  <span className="avatar-title rounded-circle bg-light">
                                  <img src={logo} alt="" className="rounded-circle" height="34" />
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="p-2">
                              <AvForm className="form-horizontal" onValidSubmit={this.handleValidSubmit}>
                                {this.props.error && this.props.error ? <Alert color="danger">{this.props.error}</Alert> : null}
        
                                <div className="form-group">
                                  <AvField
                                    name="email"
                                    label="Correo Electrónico"
                                    className="form-control"
                                    placeholder= "ingrese correo"
                                    type="email"
                                    validate={{ required: { value: true, errorMessage: "Campo requerido" } }}
                                  />
                                </div>
        
                                <div className="form-group">
                                  <AvField
                                    name="password"
                                    label="Contraseña:"
                                    type="password"
                                    placeholder="Contraseña"
                                    validate={{ required: { value: true, errorMessage: "Campo requerido" } }}
                                  />
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                  <label className="custom-control-label" htmlFor="customControlInline">
                                    Recordar
                                  </label>
                                </div>
        
                                <div className="mt-3">
                                  <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">
                                    Ingresar
                                  </button>
                                </div>
        
                                <div className="mt-4 text-center">
                                  <Link to="/forgot-password">
                                    <i className="mdi mdi-lock mr-1"></i>
                                    Olvido la contraseña?
                                  </Link>
                                </div>
                              </AvForm>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </React.Fragment>
           )
    }
}

export default Login


