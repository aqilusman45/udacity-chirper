export class Users {
  static RECEIVED_USERS = "RECEIVED_USERS";
  static receiveUsers = (users) => {
    return {
      type: Users.RECEIVED_USERS,
      users,
    };
  };
}
