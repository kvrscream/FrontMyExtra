import React, {Component} from 'react';
import {Col, Button, Form, FormGroup, ControlLabel, FormControl, Image} from 'react-bootstrap';
import api from '../Services/api';

import '../index.css';
import ImagemReact from '../logo.svg';

export default class Login extends Component{

  state = {
    user: '',
    pwd: ''
  }

  login = async () => {
    const response = await api.post('/login',{username: this.state.user, password: this.state.pwd}); 
    if(response.data[0]._id !== null){
      localStorage.setItem("@user", response.data[0].username);
      this.props.history.push("/dashboard");
    }
    
  }

  handleUser = e => {
    this.setState({user:e.target.value});
  }

  handlePwd = e  => {
    this.setState({pwd: e.target.value});
  }

  render(){
    return(
      <React.Fragment >
        <Col xs={12} sm={6}>
            <Form horizontal className="login" >
              <h3>Login</h3>
              <FormGroup>
                <Col Component={ControlLabel} sm={2}>
                  Usuário:
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="E-mail" value={this.state.user} onChange={this.handleUser} />
                </Col>
              </FormGroup>
              <FormGroup>
              <Col Component={ControlLabel} sm={2}>
                  Senha:
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="senha" value={this.state.pwd} onChange={this.handlePwd} />
                </Col>
              </FormGroup>
              <Button bsStyle="primary" onClick={this.login}> Entrar</Button>
              <Button bsStyle="default"> Esqueci a Senha</Button>
            </Form>
        </Col>
        <Col xs={12} sm={6}>
          <Image src={ImagemReact} />
        </Col>
      </React.Fragment>
    )
  }

}