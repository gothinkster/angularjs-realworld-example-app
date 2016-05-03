export default class Profile {
  constructor (AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  get(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username,
      method: 'GET'
    }).then((res) => res.data.profile);
  }

  follow(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username + '/follow',
      method: 'POST'
    }).then((res) => res.data);
  }

  unfollow(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username + '/follow',
      method: 'DELETE'
    }).then((res) => res.data);
  }

}
