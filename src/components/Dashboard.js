import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Tweets from "./Tweets";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul>
          {this.props.tweetIds.map((id) => {
            return (
              <li key={id}>
                <Tweets id={id} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort((a, b) => b.timeStamp - a.timeStamp),
  };
};
export default connect(mapStateToProps)(Dashboard);
