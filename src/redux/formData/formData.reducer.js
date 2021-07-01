import { UPDATE } from "./formData.types";

const INITIAL_STATE = {
  values: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE:
      //when state is changed, we need to ensure the reference of the object has also changed, hence Object.assign is being used
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, action.values),
      });

    default:
      return state;
  }
}
