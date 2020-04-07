import { Tweets } from "../actions/tweets";

const INITIAL_STATE = {};

export function tweets(state = { ...INITIAL_STATE }, action) {
  switch (action.type) {
    case Tweets.RECEIVED_TWEETS:
      return { ...state, ...action.tweets };
    default:
      return state;
  }
}
