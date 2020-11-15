import produce from 'immer';

//  model
export const modalUser = {
  name: 'modalUser',
  state: {
    name: 'tung',
    old: 25,
  },
  reducers: {
    saveUser: produce((state) => {
      state.name = 'Nam';
      state.old = 27;
      return state;
    }),
  },
};
