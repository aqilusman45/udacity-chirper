import React from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";
const Tweet = ({ tweet }) => {
  if (tweet === null) {
    return <p>tweet dont exist</p>;
  }
  return <div className="tweet"></div>;
};

const mapStateToProps = ({ authUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);
