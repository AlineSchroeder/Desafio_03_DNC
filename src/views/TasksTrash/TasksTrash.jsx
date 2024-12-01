import React from 'react'
import CardMenu from '../../components/cardMenu/CardMenu'
import HeaderMenu from '../../components/headerMenu/HeaderMenu'
import { useParams } from 'react-router-dom';

const TasksTrash = ({ data }) => {
    const { taskstrashId } = useParams();
    const taskstrashselected = data.find((taskstrash) => taskstrash.id == taskstrashId);
  return (
    <div>
        <HeaderMenu />
        <CardMenu data={taskstrashselected} type='excluir'/>
    </div>
  )
}

export default TasksTrash