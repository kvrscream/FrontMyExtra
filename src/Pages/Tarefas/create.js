import React, {Component} from 'react';
import {Row, Grid, Col, Form, FormControl, FormGroup, ControlLabel, Button, Alert} from 'react-bootstrap';
import Menu from '../../Components/menu';

import api from '../../Services/api';

export default class Create extends Component {

    state = {
        users: [],
        title: '',
        description: '',
        dev:'',
        cliente: ''
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value});
    }

    handleDesc = (e) => {
        this.setState({description: e.target.value});
    }

    handleDev = (e) => {
        this.setState({dev: e.target.value});
    }

    handleClient = (e) => {
        this.setState({cliente: e.target.value});
    }

    componentDidMount = async () => {
        const response = await api.get('/');
        this.setState({users: response.data});
    }

    saveTask = async () => {
        const data = {
            title: this.state.title,
            description: this.state.description,
            user: this.state.dev,
            cliente: this.setState.cliente
        }

        const response = await api.post("/tasks/create", data);
        console.log(response.data); 

    }

    render(){
        return(
            <React.Fragment>
                <Menu />
                <Grid>
                    <Col xsOffset="5">
                        <h3>Nova Tarefa</h3>
                    </Col>
                    <Form>
                        <Row>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Col Component={ControlLabel} sm={2}>
                                        Cliente:
                                    </Col>
                                    <Col sm={12}>
                                        <FormGroup>
                                            <FormControl type="text" placeholder="Cliente"
                                            value={this.state.cliente}
                                            onChange={this.handleClient}
                                            />
                                        </FormGroup>
                                    </Col>
                                    
                                    <Col Component={ControlLabel} sm={2}>
                                        Desenvolvedor:
                                    </Col>
                                    <Col sm={12}>
                                        <FormGroup>
                                            <FormControl componentClass="select" placeholder="select" ref="dev" >
                                                <option value="">select</option>
                                                {
                                                    this.state.users.map(row => {
                                                        return (
                                                            <option key={row._id} value={row.username} onClick={this.handleDev} >{row.name}</option>
                                                        )
                                                    })
                                                }
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col Component={ControlLabel} sm={2}>
                                        Titulo:
                                    </Col>
                                    <Col sm={12}>
                                        <FormControl type="text" placeholder="Titulo da Tarefa"
                                            value={this.state.title}
                                            onChange={this.handleTitle}
                                        />
                                    </Col>
                                    <Col Component={ControlLabel} sm={12}>
                                        Descrião:
                                    </Col>
                                    <Col sm={12}>
                                        <FormGroup>
                                            <FormControl componentClass="textarea" placeholder="Digite Aqui" 
                                                value={this.state.description}
                                                onChange={this.handleDesc}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <Col sm={2} xs={6}>
                                            <Button bsStyle="success" onClick={this.saveTask}>Salvar</Button>
                                        </Col>
                                        <Col sm={2} xs={6}>
                                            <Button bsStyle="warning">Cancelar</Button>
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                            <br /> <br />
                                <Alert bsStyle="info">
                                    <strong>Cadastro de Tarefa</strong>
                                    <p>
                                        A tarefa cadastrada aqui vai ser distribuida para o 
                                        <strong>Desenvolvedor</strong>
                                        selecionado.
                                        <br />
                                        Podendo assim controlar melhor a distribuição e organização do dia-a-dia.
                                    </p>
                                </Alert>
                            </Col>
                        </Row>
                    </Form>
                </Grid>
            </React.Fragment>
        )
    }
}