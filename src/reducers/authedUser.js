import { AuthedUser } from "../actions/authedUser";

export function authUser(state = { authedUser: null }, action) {
  switch (action.type) {
    case AuthedUser.SET_AUTH_USER:
      return { ...state, ...action.authedUser };
    default:
      return state;
  }
}
