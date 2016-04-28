class AuthCtrl {
  constructor($state) {
    'ngInject';

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }

  submitForm() {
    this.isSubmitting = true;

    console.log(this.formData);
  }
}

export default AuthCtrl;
