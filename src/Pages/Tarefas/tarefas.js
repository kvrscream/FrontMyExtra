import React, {Component} from 'react';
import {Row, Grid, Col, Table, Button} from 'react-bootstrap';
import Menu from  '../../Components/menu';
import api from '../../Services/api';

export default class Tarefas extends Component {

  state = {
    tasks: [],
  }

  editar = (e) => {

  }

  excluir = (e) => {

  }

  componentDidMount = async () => {
    const user = localStorage.getItem("@user");
    
    if(!user.length){
      this.props.history.push("/");
    }

    const tarefas = await api.post('/tasks',{user: user});
    this.setState({tasks: tarefas.data});

  }

  render(){
    return(
      <React.Fragment>
        <Menu />
        <Grid>
          <Row>
            <Col smOffset={10} xsOffset={6} >
              <Button bsStyle="primary" onClick={() => {this.props.history.push("/tarefas-create")}} >
                Nova Tarefa
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Table striped bordered condensed hover responsive>
                <thead>
                  <th>#</th>
                  <th>Tarefa</th>
                  <th>Quem Realizará</th>
                  <th>Data</th>
                  <th>Açoes</th>
                </thead>
                <tbody>
                {
                    this.state.tasks.map(row => {
                      return(
                        <tr key={row._id}>
                          <td>{row._id}</td>
                          <td>{row.title}</td>
                          <td>{row.user}</td>
                          <td>
                            {
                              row.Data
                            }
                          </td>
                          <td>
                            <Button bsStyle="info">Editar</Button>
                            <Button bsStyle="danger">Excluir</Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    )
  }
}