import {combineReducers} from '@reduxjs/toolkit';

import {TodosReducer, FolderReducer} from './planner/planner-slice';

const rootReducer = combineReducers({
  folders: FolderReducer,
  todos: TodosReducer,
});

export default rootReducer;
