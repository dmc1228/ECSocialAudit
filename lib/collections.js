var onlineSchools = new Meteor.Collection('schools');
Schools = new Ground.Collection(onlineSchools);

var onlineAudits = new Meteor.Collection('audits');
Audits = new Ground.Collection(onlineAudits);





if (Meteor.isServer) {
  // Publish only the current user's items
  ReactiveTable.publish("user-audits", Audits, function () {
    return {"userId": this.userId};
  });

  Meteor.publish('audits', function() {
    return Audits.find();
  });

  Meteor.publish('schools', function() {
    return Schools.find();
  });
}
