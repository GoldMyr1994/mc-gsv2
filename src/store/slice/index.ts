import * as persistent from "./persistent";
import * as volatile from "./volatile";

const slice = {
  persistent: persistent.slice,
  volatile: volatile.slice,
};

const actions = {
  persistent: persistent.actions,
  volatile: volatile.actions,
};

const rootReducer = {
  persistent: persistent.reducer,
  volatile: volatile.reducer,
};

export { slice, actions, rootReducer };
