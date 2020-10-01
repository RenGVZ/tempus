import React, {createContext, useState} from 'react';

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {task: 'Study', id: 1},
    {task: 'Clean up', id: 2},
    {task: 'Code', id: 3}
  ]);
  
  return (
     <TaskListContextProvider value={{tasks}} >
      {props.children}
     </TaskListContextProvider>
  )
}

export default TaskListContextProvider;