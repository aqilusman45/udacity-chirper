import { Users } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case Users.RECEIVED_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
}
