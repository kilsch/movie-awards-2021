import { createStore } from "redux";

const initialState = {
  isLoading: true
}

function sharedReducer(state = initialState, action) {
  switch (action.type) {
    case 'loading/complete':
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default createStore(sharedReducer);