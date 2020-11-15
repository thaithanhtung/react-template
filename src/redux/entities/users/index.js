import baseEntity from '../utils';

const ENTITY_DEFAULT = {
  name: null,
  old: null,
};

export const entitiesUser = {
  name: 'entitiesUser',
  state: { ids: {} },
  reducers: {
    ...baseEntity(ENTITY_DEFAULT),
  },
  effects: (dispatch) => ({}),
};
