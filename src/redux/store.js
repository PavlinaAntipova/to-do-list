import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const plannerPersistConfig = {
  key: 'planner',
  storage: storage,
};

export const store = configureStore({
  reducer: {
    planner: persistReducer(plannerPersistConfig, rootReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
