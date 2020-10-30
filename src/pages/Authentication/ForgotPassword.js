/** @format */

import React, { Component } from 'react'
import { Row, Col, Alert, Card, CardBody, Container } from 'reactstrap'
import { withRouter, Link } from 'react-router-dom'

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation'

// import images
import profile from '../../assets/images/profile-img.png'
import logo from '../../assets/images/logo.png'

class ForgetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.userForgetPassword(values, this.props.history)
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="bx bx-home h2"></i>
          </Link>
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
                          <h5 className="text-white">Bienvenido!</h5>
                          <p>Valida tu correo electrónico</p>
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
                      {this.props.forgetError && this.props.forgetError ? (
                        <Alert color="danger" style={{ marginTop: '13px' }}>
                          {"Error al procesar la contraseña"}
                        </Alert>
                      ) : null}
                      {this.props.forgetSuccessMsg ? (
                        <Alert color="success" style={{ marginTop: '13px' }}>
                          {this.props.forgetSuccessMsg}
                        </Alert>
                      ) : null}

                      <AvForm className="form-horizontal mt-4" onValidSubmit={this.handleValidSubmit}>
                        <div className="form-group">
                          <AvField name="email" label="Correo electrónico:" className="form-control" placeholder="Ingresa un correo" type="email" validate={{ required: { value: true, errorMessage: "Campo Requerido" } }} />
                        </div>
                        <Row className="form-group">
                          <Col className="text-right">
                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">
                              Enviar Contraseña
                            </button>
                          </Col>
                        </Row>
                      </AvForm>
                    </div>
                    <div className="mt-5 text-center">
                      <p>
                        Regresar al{' '}
                        <Link to="login" className="font-weight-medium text-primary">
                          Inicio de sesión
                        </Link>
                      </p>
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


export default ForgetPassword;
