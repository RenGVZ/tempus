import React from 'react'
import TaskList from './task_list';
import TaskListContextProvider from '../context/taskListContext';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App;

