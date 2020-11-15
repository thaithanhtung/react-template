import { createSelector } from 'reselect';

export const getUesr = (id) =>
  createSelector(
    (state) => state.entityGtsUser.ids,
    (entityById) => entityById[id]
  );
