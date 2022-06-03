import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import {TodayTasksPage} from '../pages/TodayTasksPage';
import {AllTasksPage} from '../pages/AllTasksPage';
import {CompletedTasksPage} from '../pages/CompletedTasksPage';
import {TasksByFolderPage} from '../pages/TasksByFolderPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="today" element={<TodayTasksPage />} />
        <Route path="all" element={<AllTasksPage />} />
        <Route path="completed" element={<CompletedTasksPage />} />
        <Route path="folders/:id" element={<TasksByFolderPage />} />
        <Route path="*" element={<TodayTasksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
