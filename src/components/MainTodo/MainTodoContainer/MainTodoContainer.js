import React from 'react';
import {Outlet} from 'react-router-dom';

import {TodoContainer} from './MainTodoContainer.styled';

function MainTodoContainer() {
  return (
    <TodoContainer>
      <Outlet />
    </TodoContainer>
  );
}

export default MainTodoContainer;
