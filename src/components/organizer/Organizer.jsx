import React, { useState } from 'react';
import '../../global.scss';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';
import square from '../../assets/square.svg';
import more from '../../assets/more.svg';
import squareClicked from '../../assets/squareClicked.svg';
import { Link } from 'react-router-dom';

const Organizer = ({ data }) => {
  const [taskImages, setTaskImages] = useState(Array(data.length).fill(false)); // O fill preenche tudo com false.
  const [tasks, setTasks] = useState(data); // Estado para armazenar a lista de tarefas
  const [isAdding, setIsAdding] = useState(false); // Controla o modo de adição
  const [newTask, setNewTask] = useState(''); // Controla o valor da nova tarefa
  const [newDescription, setNewDescription] = useState(''); // Controla a descrição da nova tarefa

  const handleImageClick = (index) => {
    const newTaskImages = [...taskImages];
    newTaskImages[index] = !newTaskImages[index];
    setTaskImages(newTaskImages);
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  // Adiciona a nova tarefa à lista
  const handleSaveClick = () => {
    if (newTask.trim() && newDescription.trim()) {
      const newTaskObj = {
        id: tasks.length + 1, // Garantir que o id seja único
        title: newTask,
        description: newDescription, // Nova descrição
        completed: false,
      };
      setTasks([...tasks, newTaskObj]); // Adiciona a nova tarefa à lista
      setIsAdding(false);
      setNewTask('');
      setNewDescription('');
    }
  };

  // Atualiza o valor do input para a nova tarefa
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Atualiza o valor do input para a descrição da nova tarefa
  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  return (
    <main className='main'>
      <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
      <table className='main__table'>
        <thead className='main__thead'>
          <tr className='main__tr'>
            <td className='main__item'>Tarefa</td>
            <td className='main__item'>Status</td>
            <td className='main__item'>Opções</td>
          </tr>
        </thead>
        <tbody className='main__tbody'>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td className='main__square'>
                {taskImages[index] ? (
                  <img src={squareClicked} onClick={() => handleImageClick(index)} width={15} />
                ) : (
                  <img src={square} onClick={() => handleImageClick(index)} width={15} />
                )}
              </td>
              <td className='main__images'>
                <Link to={`/taskspen/${task.id}`}><img src={pencil} width={20} /></Link>
                <Link to={`/taskstrash/${task.id}`}><img src={trash} width={20} /></Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className='main__tfoot'>
          <tr>
            <td>
              {isAdding ? (
                <input
                  type='text'
                  value={newTask}
                  onChange={handleInputChange}
                  placeholder='Digite a nova tarefa...'
                  autoFocus
                />
              ) : (
                'Nova tarefa...'
              )}
            </td>
            <td>
              {isAdding ? (
                <input
                  type='text'
                  value={newDescription}
                  onChange={handleDescriptionChange}
                  placeholder='Digite a descrição...'
                />
              ) : null}
            </td>
            <td>
              {isAdding ? (
                <button onClick={handleSaveClick}>Adicionar</button>
              ) : (
                <img src={more} onClick={handleAddClick} width={20} style={{ cursor: 'pointer' }} />
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
};

export default Organizer;
