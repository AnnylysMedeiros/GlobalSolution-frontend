import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import rosaDeserto from '../../img/rosa-do-deserto.jpg'
import bromelia from '../../img/bromélia.jpg'
import crisantemo from '../../img/crisantemo.jpg'
import hibisco from '../../img/hibisco.jpg'
import caladium from '../../img/caladium.jpg'
import coleus from '../../img/Coleus.jpg'
import espadaSao from '../../img/espada-de-sojorge.jpg'
import "./index.css";

interface IMyPlants {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const MyPlants: React.FC = () => {
  const [tasks, setTasks] = useState<IMyPlants[]>([]);
  const history = useHistory();

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const response = await api.get("/tasks");
    console.log(response);
    setTasks(response.data);
  }

  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  function newTask() {
    history.push("/tarefas_cadastro");
  }

  function editTask(id: number) {
    history.push(`/tarefas_cadastro/${id}`);
  }

  function viewTask(id: number) {
    history.push(`/meus_cultivos/${id}`);
  }

  async function finishedTask(id: number) {
    await api.patch(`/meus_cultivos/${id}`);
    loadTasks();
  }

  async function deleteTask(id: number) {
    await api.delete(`/meus_cultivos/${id}`);
    loadTasks();
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
      <h3>Plantas cadastradas</h3>
        <Button variant="dark" size="sm" onClick={newTask}>
          Nova Tarefa
        </Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data de Atualização</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{formatDate(task.updated_at)}</td>
              <td>{task.finished ? "Finalizado" : "Pendente"}</td>
              <td>
                <Button
                  size="sm"
                  disabled={task.finished}
                  variant="primary"
                  onClick={() => editTask(task.id)}
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  disabled={task.finished}
                  variant="success"
                  onClick={() => finishedTask(task.id)}
                >
                  Finalizar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => viewTask(task.id)}
                >
                  Visualizar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Remover
                </Button>{" "}
              </td>
            </tr>
          ))}


      <ul>
        <li>
          <h4> Rosa do deserto</h4>
          <img src={rosaDeserto} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
        <li>
          <h4>Bromélia</h4>
          <img src={bromelia} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
        <li>
          <h4>Crisântemo</h4>
          <img src={crisantemo} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
        <li>
          <h4>Hibisco</h4>
          <img src={hibisco} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
        <li>
          <h4>Caladium</h4>
          <img src={caladium} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
        <li>
          <h4>Coleus</h4>
          <img src={coleus} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
        <li>
          <h4>Espada de São Jorge</h4>
          <img src={espadaSao} alt="" />
          <p></p>
          <p>Data cadastro</p>
          <button>Saúde da planta</button>
        </li>
      </ul>
        </tbody>
      </Table>
    </div>
  );
};

export default MyPlants;
