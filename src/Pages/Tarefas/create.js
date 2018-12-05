import React, {Component} from 'react';
import {Row, Grid, Col, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Menu from '../../Components/menu';

export default class Create extends Component {

    render(){
        return(
            <React.Fragment>
                <Menu />
                <Grid>
                    <Col xsOffset="6">
                        <h3>Nova Tarefa</h3>
                    </Col>
                    <Form>
                        <Row>
                            <FormGroup>
                                
                                <Col Component={ControlLabel} sm={2}>
                                    Cliente:
                                </Col>
                                <Col sm={4}>
                                    <FormGroup>

                                        <FormControl type="text" placeholder="Cliente"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col Component={ControlLabel} sm={2}>
                                    Desenvolvedor:
                                </Col>
                                <Col sm={4}>
                                    <FormGroup>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">select</option>
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                                <Col Component={ControlLabel} sm={2}>
                                    Titulo:
                                </Col>
                                <Col sm={12}>
                                    <FormControl type="text" placeholder="Titulo da Tarefa"
                                        />
                                </Col>
                                <Col Component={ControlLabel} sm={12}>
                                    Descrião:
                                </Col>
                                <Col sm={12}>
                                    <FormGroup>
                                        <FormControl componentClass="textarea" placeholder="Digite Aqui" />
                                    </FormGroup>
                                </Col>
                                
                                <Col sm={2}>
                                    <Button bsStyle="success">Salvar</Button>
                                </Col>
                                <Col sm={2}>
                                <Button bsStyle="warning">Cancelar</Button>
                                </Col>
                            </FormGroup>
                        </Row>
                    </Form>
                </Grid>
            </React.Fragment>
        )
    }
}