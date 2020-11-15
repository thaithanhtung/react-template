import { init } from '@rematch/core';
import reducers from './reducers';

const initReducer = reducers();
export const store = init({
  models: initReducer.models,
});

export const { dispatch } = store;
