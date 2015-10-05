
userType = function() {
  if(userIsInRole('admin')) return 'Admin';
  else if(userIsVerified) return 'Normal';
  else return 'Guest';
}

userIsInRole = function(role) {
  // var emailIsVerified = userIsVerified();
  // if(Meteor.user()!=undefined) {
  //   if(Meteor.user().emails[0].verified==true) {
  //     emailIsVerified = Meteor.user().emails[0].verified;
  //   }
  // }

  var userIsInRole = false;
  if (Roles.userIsInRole(Meteor.user(), ['admin', role])) {
    userIsInRole = true;
  }

  // return (userIsInRole && emailIsVerified);
  return userIsInRole;
}

userIsVerified = function() {
  var emailIsVerified = false;
  if(Meteor.user()!=undefined) {
    if(Meteor.user().emails[0].verified==true) {
      emailIsVerified = Meteor.user().emails[0].verified;
    }
  }
  return emailIsVerified;
}
