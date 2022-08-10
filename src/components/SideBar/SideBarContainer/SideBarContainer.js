import React from 'react';

import TodosFolderList from '../TodosFolderList';
import Form from '../../InputText';

import {SideBar, Controls, Btn} from './SideBarContainer.styled';

function SideBarContainer({toggleSideBar}) {
  return (
    <SideBar
      onClick={e => {
        if (
          e.target.name === 'folder' ||
          e.target.name === 'folderBtn' ||
          e.target.name === 'deleteBtn'
        ) {
          return;
        } else {
          toggleSideBar();
        }
      }}
    >
      <Controls>
        <Btn to="today">Today</Btn>
        <Btn to="all">All tasks</Btn>
        <Btn to="completed">Completed tasks</Btn>
      </Controls>

      <TodosFolderList />

      <Form textBtn="+" placeholder="add new list here" name="folder" />
    </SideBar>
  );
}

export default SideBarContainer;
