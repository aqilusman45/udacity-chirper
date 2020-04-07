import { combineReducers } from "redux";
import { users } from "./users";
import { tweets } from "./tweets";
import { authUser } from "./authedUser";

export default combineReducers({
  tweets,
  users,
  authUser,
});
