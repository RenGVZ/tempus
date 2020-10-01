import React, {useContext} from 'react';
import TaskListContext from '../context/taskListContext';
import Task from './task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      <ul className="list">
        {tasks.map(task => {
          return <Task />;
        })}
      </ul>
    </div>
  )
}

export default TaskList
