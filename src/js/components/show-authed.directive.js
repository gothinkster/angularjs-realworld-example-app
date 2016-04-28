function ShowAuthed(User) {
  'ngInject';

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.User = User;

      scope.$watch('User.current', function(val) {
          // If user detected
          if (val) {
            if (attrs.showAuthed === 'true') {
              element.css({ display: 'inherit'})
            } else {
              element.css({ display: 'none'})
            }

          // no user detected
          } else {
            if (attrs.showAuthed === 'true') {
              element.css({ display: 'none'})
            } else {
              element.css({ display: 'inherit'})
            }
          }
      });

    }
  };
}

export default ShowAuthed;
