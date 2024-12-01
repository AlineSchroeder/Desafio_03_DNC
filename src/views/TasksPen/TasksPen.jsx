import React from 'react'
import CardMenu from '../../components/cardMenu/CardMenu'
import HeaderMenu from '../../components/headerMenu/HeaderMenu'
import { useParams } from 'react-router-dom';

const TasksPen = ({ data }) => {
    const { taskspenId } = useParams();
    const taskspenselected = data.find((taskspen) => taskspen.id == taskspenId);
  return (
    <div>
        <HeaderMenu />
        <CardMenu data={taskspenselected} type='editar'/>
    </div>
  )
}

export default TasksPen