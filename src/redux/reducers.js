import * as entities from './entities';
import * as modules from './model';

const reducers = () => ({
  models: {
    ...entities,
    ...modules,
  },
});

export default reducers;
