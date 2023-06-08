import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyPlants from "./pages/MyPlants";
import TasksForm from "./pages/MyPlants/Form";
import TasksDetail from "./pages/MyPlants/Detail";
import NewPlants from "./pages/NewPlants";
import recursosIA from "./pages/Recursos";

const App: React.FC = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/meus_cultivos" exact component={MyPlants} />
      <Route path="/tarefas_cadastro" exact component={TasksForm} />
      <Route path="/tarefas_cadastro/:id" exact component={TasksForm} />
      <Route path="/tarefas/:id" exact component={TasksDetail} />
      <Route path="/pesquisa_plantas" exact component={NewPlants} />
      <Route path="/recursos" exact component={recursosIA} />
    </Switch>
  );
};
export default App;
