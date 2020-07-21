import { init } from '@rematch/core';

import * as models from './models';

export default function configureStore() {
  const store = init({ models });

  return store;
}
