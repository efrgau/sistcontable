/** @format */

import React, { Component } from 'react'
import { Row, Col, CardBody, Card, Alert, Container } from 'reactstrap'
import { withRouter, Link } from 'react-router-dom'

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation'


// import images
import profile from '../../assets/images/profile-img.png'
import logo from '../../assets/images/logo.png'

class ChangePassword extends Component {
  
  componentDidMount() {
    this.props.apiError('')
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <a href="http://www.safetyntrust.com" className="text-dark">
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
                          <h5 className="text-white">{this.props.t('Welcome')}</h5>
                          <p>{this.props.t('Cambie su contraseña')}</p>
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
                            value={this.state.email}
                            label="Correo electrónico"
                            className="form-control"
                            placeholder="Ingresar correo"
                            type="email"
                            validate={{ 
                              required: { value: true, errorMessage: "Campo Requerido" } 
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <AvField
                            name="newPassword"
                            label="Contraseña Nueva:"
                            type="password"                            
                            placeholder={this.props.t('Password')}
                            validate={{ 
                              required: { value: true, errorMessage: "Campo requerido" },
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <AvField
                            name="confirmPassword"
                            label="Repetir Contraseña:"
                            type="password"
                            placeholder={this.props.t('Password')}
                            validate={{ required: { value: true, errorMessage: "Campo Requerido" }, match: { value: 'newPassword', errorMessage: 'Las contraseñas no coinciden' } }}
                          />
                        </div>

                        <div className="mt-3">
                          <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">
                            {this.props.t('Cambiar contraseña')}
                          </button>
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


export default ChangePassword;
