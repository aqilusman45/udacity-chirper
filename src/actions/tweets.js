export class Tweets {
  static RECEIVED_TWEETS = "RECEIVED_TWEETS";

  static receiveTweets = (tweets) => ({
    type: Tweets.RECEIVED_TWEETS,
    tweets,
  });
}
