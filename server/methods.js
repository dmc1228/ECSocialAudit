Meteor.methods({
  insertSchools: function(schools) {

    var count = schools.length;
    var i = 0;
    var uploaded = 0;


    schools.forEach(function(entry){
      i++;

      // var existingSchool = Schools.find({'schoolDetails.NEIMS_NUMBER' : entry.NEIMS_NUMBER});
      // if (typeof existingSchool === 'undefined') {

        Schools.insert({schoolDetails: entry});
        uploaded++;
      // } else {
      //   alert('School already exists! NEIMS: ' + entry.NEIMS_NUMBER);
      // }
      console.log(i + ' out of ' + count);
      if (i == count) {
        var message = ' schools were added to the database';
        if (uploaded == 1){
            message = ' school was added to the database';
        }
        return 'Upload complete! ' + uploaded + message
      }
    });
  },

  toggleUserRole: function (targetUserId, role) {
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'])) {
      throw new Meteor.Error(403, "Access denied")
    }

    var roles = [];
    var targetUser = Meteor.users.findOne({"_id" : targetUserId});
    if (targetUser != undefined && targetUser.roles != undefined) {
      roles = targetUser.roles;
    }
    if (Roles.userIsInRole(targetUserId, role)) {
      return Roles.removeUsersFromRoles(targetUserId, role);
    } else {
      roles.push(role);
      return Roles.setUserRoles(targetUserId, roles)
    }
  },
  setAdmin: function(ids) {
    var loggedInUser = Meteor.user();

    if (!loggedInUser || !loggedInUser.isAdmin) {
      throw new Meteor.Error(403, "Access denied");
    }
    var didUpdate = Meteor.users.update({"_id": {$in: ids}},  { $set: { 'isAdmin': true }}, {multi: true});
    return didUpdate;
  },
  removeAdmin: function(ids) {
    var loggedInUser = Meteor.user();

    if (!loggedInUser || !loggedInUser.isAdmin) {
      throw new Meteor.Error(403, "Access denied");
    }
    var didUpdate = Meteor.users.update({"_id": {$in: ids}},  { $set: { 'isAdmin': false }}, {multi: true});
    return didUpdate;
  },
  userHasAdminRole: function() {
    var loggedInUser = Meteor.user();
    return loggedInUser.isAdmin;
  },
  checkRoleOnServer: function(userId, roleToCheck) {
    var loggedInUser = Meteor.user();

    if (!loggedInUser || !loggedInUser.isAdmin) {
      throw new Meteor.Error(403, "Access denied");
    }

    var userWithRoles = Meteor.users.findOne({"_id" : userId}, {"roles" : 1});
    var hasRole = false;
    if (userWithRoles.roles != undefined) {
      var index = userWithRoles.roles.indexOf(roleToCheck);
      if (index > -1) {
        hasRole = true;
      }
    }
    return hasRole;

  },
  resendVerificationEmail: function () {
    var currentUser = Meteor.user();
    if(currentUser) {
      var emailAddress = currentUser.emails[0].address;
      if(emailAddress) Accounts.sendVerificationEmail(currentUser._id, emailAddress);
    }
    else throw new Meteor.Error("pants-not-found", "Can't find my pants");

    return "Verification email sent";
  },
  sendEmail: function (to, from, subject, html) {
    check([to, from, subject, html], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: html
    });
  },
});
