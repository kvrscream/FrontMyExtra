import React, {Component} from 'react';
import Menu from '../../Components/menu';
import api from '../../Services/api';
import {Grid, Col, Row, Alert, Button} from 'react-bootstrap';

export default class Detalhe extends Component {

  state = {
    task: [],
    id: '',
    status: ['Aberto', 'Em Andamento', 'Concluído', 'Cancelado'],
    input: ''
  }

  componentDidMount = async () => {
    const local = localStorage.getItem('@user');
    
    if(!local.length)
    {
      this.props.history.push('/');
    }

    const taskid = this.props.match.params.taskid
    this.setState({id: taskid});

    const tarefas = await api.get(`/tasks/${taskid}`);

    this.setState({task: tarefas.data[0]}); 
    console.log(tarefas.data[0]);
  }

  handleChange(e)  {
    const select = e.target.value;
    this.setState({input: select});
  }

  atualiza = async() => {
    const selected = this.state.input;
    console.log(selected);
  }


  render(){
    return (
      <React.Fragment>
        <Menu />
        <Grid>
          <Row className='justify-content-md-center'>
            <Col md={6}>
              <h1>{this.state.task.title}</h1>
              <p>
                {this.state.task.description}
              </p>
              <p>Status: {this.state.task.status}</p>
              <p>
                Data da Abertura: {this.state.task.data}
              </p>
              <select name="status" className="form-control">
                {
                  this.state.status.map(
                    row => {
                      return(
                        <option value={row} onClick={this.handleChange}>{row}</option>
                      )
                    }
                  )
                }
              </select>

              <br />
              <Button className="btn btn-primary" onClick={this.atualiza} >Atualizar</Button>
            </Col>
            <Col md={6}>
              <Alert variant="info">
              <p>
                Confira os dados da tarefa e mude os status conforme a situação
              </p>
              </Alert>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }

}