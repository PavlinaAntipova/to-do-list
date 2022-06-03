import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Outlet, useLocation} from 'react-router-dom';

import OptionsList from '../OptionsList';
import Form from '../../Form';
import {getFoldersId} from '../../../redux/selectors';

function MainTodoContainer() {
  const [itemsIsShown, setItemsIsShown] = useState(false);
  const [optionIsShown, setOptionIsShown] = useState(false);
  const foldersId = useSelector(getFoldersId);
  const location = useLocation();

  return (
    <section>
      {location.pathname === '/' && <h2>Welcome to Todo Planner!</h2>}

      <Outlet />
    </section>
  );
}

export default MainTodoContainer;
