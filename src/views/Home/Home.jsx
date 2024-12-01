import React, { useState } from "react";
import "../../global.scss";
import HeaderMenu from "../../components/headerMenu/HeaderMenu";
import Organizer from "../../components/organizer/Organizer";
import { TASKES } from "../../mock/tasks"; // Importa o mock

const Home = () => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState(TASKES);

  return (
    <div className="home">
      <HeaderMenu />
      <div className="home__organizador">
        {/* Passa tasks e setTasks como props para o Organizer */}
        <Organizer data={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Home;
