import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './global.scss';
import Home from './views/Home/Home';
import { TASKES } from '../src/mock/tasks';
import TasksPen from './views/TasksPen/TasksPen';
import TasksTrash from './views/TasksTrash/TasksTrash';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={TASKES}/>,
  },
  {
    path: "/taskspen/:taskspenId",
    element: <TasksPen data={TASKES}/>,
  },
  {
    path: "/taskstrash/:taskstrashId",
    element: <TasksTrash data={TASKES}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
