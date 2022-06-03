import {createSlice} from '@reduxjs/toolkit';

const FoldersSlice = createSlice({
  name: 'planner/folders',
  initialState: {
    ids: [],
    items: {},
  },
  reducers: {
    addFolder(state, action) {
      return {
        ids: [...state.ids, action.payload.id],
        items: {...state.items, [action.payload.id]: action.payload},
      };
    },
    deleteFolder(state, action) {
      const newIds = state.ids.filter(id => id !== action.payload);
      return {
        ids: [...newIds],
        items: {...state.items, [action.payload]: undefined},
      };
    },
    updateTodosInFolder(state, action) {},
  },
});

const TodosSlice = createSlice({
  name: 'planner/todos',
  initialState: {
    ids: [],
    items: {},
  },
  reducers: {
    addTodo(state, action) {
      return {
        ids: [...state.ids, action.payload.id],
        items: {...state.items, [action.payload.id]: action.payload},
      };
    },
    deleteTodo(state, action) {
      const newIds = state.ids.filter(id => id !== action.payload);
      return {
        ids: [...newIds],
        items: {...state.items, [action.payload]: undefined},
      };
    },
    completeTodo(state, action) {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            completed: !state.items[action.payload]?.completed,
          },
        },
      };
    },
    deleteTodosByFolder(state, action) {
      const idsInFolder = Object.entries(state.items).map(todo => {
        if (todo[1]?.folder === action.payload) {
          return todo[0];
        }
      });

      const newIds = state.ids.filter(
        e => idsInFolder.findIndex(i => i == e) === -1,
      );

      const newState = idsInFolder.reduce((prev, current) => {
        return {...prev, [current]: undefined};
      }, {});
      return {...state, ids: [...newIds], items: {...state.items, ...newState}};
    },
  },
});

export const {addFolder, deleteFolder, updateTodosInFolder} =
  FoldersSlice.actions;
export const {addTodo, deleteTodo, completeTodo, deleteTodosByFolder} =
  TodosSlice.actions;
export const FolderReducer = FoldersSlice.reducer;
export const TodosReducer = TodosSlice.reducer;
