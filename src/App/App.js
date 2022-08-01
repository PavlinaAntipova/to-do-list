import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Moment from 'moment';
import {ToastContainer} from 'react-toastify';
import {ThemeProvider} from 'styled-components';

import Layout from '../components/Layout/Layout';
import {TasksPage} from '../pages/TasksPage';
import {HomePage} from '../pages/HomePage';

import {theme} from '../helper/theme';
import {Container, Main} from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation().pathname;

  return (
    <ThemeProvider theme={theme}>
      <Main location={location}>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />

              <Route
                path="today"
                element={<TasksPage titleText={Moment().format('LL')} />}
              />
              <Route path="all" element={<TasksPage titleText="All Tasks" />} />
              <Route
                path="completed"
                element={<TasksPage titleText="Completed Tasks" />}
              />
              <Route path="folders/:id" element={<TasksPage />} />
            </Route>
          </Routes>
        </Container>
        <ToastContainer />
      </Main>
    </ThemeProvider>
  );
}

export default App;
