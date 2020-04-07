import { getInitialData } from "../utils/api";
import { Tweets } from "./tweets";
import { Users } from "./users";
import { AuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return async (dispatch) => {
    try {
      const { users, tweets } = await getInitialData();
      dispatch(Users.receiveUsers(users));
      dispatch(Tweets.receiveTweets(tweets));
      dispatch(AuthedUser.setAuthedUser(AUTHED_ID));
    } catch (error) {
      console.log(error);
    }
  };
}
