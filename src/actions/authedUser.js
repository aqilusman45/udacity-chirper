export class AuthedUser {
  static SET_AUTHED_USER = "SET_AUTHED_USER";

  static setAuthedUser = (authedUser) => ({
    type: AuthedUser.SET_AUTHED_USER,
    authedUser,
  });
}
