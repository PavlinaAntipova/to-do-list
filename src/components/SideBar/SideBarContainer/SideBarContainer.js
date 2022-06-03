import React from 'react';
import {NavLink} from 'react-router-dom';

import Filter from '../Filter';
import TodosFolderList from '../TodosFolderList';
import Form from '../../Form';

import s from './SideBarContainer.module.css';

function SideBarContainer() {
  const getClassNameBtn = isActive =>
    isActive ? `${s.btn} ${s.active}` : s.btn;

  return (
    <aside className={s.aside}>
      {/* <div className="user">
                <p>User</p>
            </div> */}
      {/* <Filter /> */}
      <div className={s.controls}>
        <NavLink
          className={({isActive}) => getClassNameBtn(isActive)}
          to="today"
        >
          Today
        </NavLink>
        <NavLink className={({isActive}) => getClassNameBtn(isActive)} to="all">
          All tasks
        </NavLink>
        <NavLink
          className={({isActive}) => getClassNameBtn(isActive)}
          to="completed"
        >
          Completed tasks
        </NavLink>
      </div>

      <TodosFolderList />

      <Form textBtn="+" placeholder="add new list here" name="folder" />
    </aside>
  );
}

export default SideBarContainer;
