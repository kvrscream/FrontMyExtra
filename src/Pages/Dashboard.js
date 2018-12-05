import React, {Component} from 'react';
import {Grid, Panel, Row, Col} from 'react-bootstrap';

import Menu from '../Components/menu';

export default class Dashboard extends Component{

  render(){
    return(
      <React.Fragment>
        <Menu />
        <Grid>
          <h2>Bem Vindo</h2>
          <Row>
            <Col xs={6}>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  Tarefas Abertas
                </Panel.Heading>
                <Panel.Body>
                  0
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={6}>
              <Panel  bsStyle="success">
                <Panel.Heading>
                  Tarefas Concluídas
                </Panel.Heading>
                <Panel.Body>
                  0
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    )
  }
}