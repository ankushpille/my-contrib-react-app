// redux/reducers.js
import { INCREMENT, DECREMENT } from './actions'

const initialState = { value: 0 }

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }

    case DECREMENT:
      return { value: state.value - 1 }

    default:
      return state
  }
}