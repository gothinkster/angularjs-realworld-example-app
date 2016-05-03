class ProfileArticlesCtrl {
  constructor(profile, $state) {
    'ngInject';

    // The profile for this page, resolved by UI Router
    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');


  }
}


export default ProfileArticlesCtrl;
