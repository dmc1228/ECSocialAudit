var onlineSchools = new Meteor.Collection('schools');
Schools = new Ground.Collection(onlineSchools);

var onlineAudits = new Meteor.Collection('audits');
Audits = new Ground.Collection(onlineAudits);





if (Meteor.isServer) {
  // Publish only the current user's items
  ReactiveTable.publish("user-audits", Audits, function () {
    if (Roles.userIsInRole(this.userId, ['admin'])){
      return {};
    }
    return {"user.id": this.userId};
  });

  Meteor.publish('audits', function() {
    return Audits.find();
  });

  Meteor.publish('schools', function() {
    return Schools.find();
  });

  Meteor.publish("allUsers", function () {
  var currentUser = Meteor.users.findOne({"_id": this.userId});

  if(currentUser!=undefined) {
    // if(currentUser.emails[0].verified==true) {
      return Meteor.users.find();
    // }
  }

  });
}

// Accounts.config({ restrictCreationByEmailDomain: 'tedxcapetown.org', sendVerificationEmail: true });
Meteor.startup(function () {
  if (Meteor.isServer) {
  // smtp = {
  //    username: 'carla@equaleducation.org',   // eg: server@gentlenode.com
  //    password: 'carla!@#',   // eg: 3eeP1gtizk5eziohfervU
  //    server:   'email2.texo.co.za',  // eg: mail.gandi.net
  //    port: 465
  //  }
 // var url = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  // process.env.MAIL_URL = url


//CREATE ADMIN ROLE
  var user = Meteor.users.findOne({'emails.address' : {$in: ['carla@equaleducation.org.za']}});
  console.log(user);
  if (!user){
    console.log('*** creating admin user ***')
    var id = Accounts.createUser({
       email: 'carla@equaleducation.org.za',
       password: "carla!@#",
       profile: { name: 'Admin'}
     });

     Roles.addUsersToRoles(id,['admin']);

   } else if (!Roles.userIsInRole(user._id, ['admin']) || !user.emails[0].verified){
      Roles.addUsersToRoles(user._id, ['admin']);
      console.log('*** updating existing admin user ***');
      var emails = [{'address' : 'carla@equaleducation.org.za', 'verified' : true}];
      console.log(emails);
      Meteor.users.update({'_id' : user._id}, {$set: {'emails' : emails}})
   }
 }
});
