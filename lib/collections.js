// Ground an existing Meteor.Collection
Schools = new Ground.Collection("schools");
Audits = new Ground.Collection("audits");

 // = new Meteor.Collection('items');

if (Meteor.isServer) {
  // Insecure: entire collection will be available to all clients
  // ReactiveTable.publish("insecure-items", Audits);

  // Publish only a subset of items with "show" set to true
  // ReactiveTable.publish("user-audits", Audits, {"user._id": Meteor.userId()});

  // Publish only to logged in users
  // ReactiveTable.publish("all-items", function () {
  //   if (this.userId) {
  //     return Items;
  //   } else {
  //     return [];
  //   }
  // });

  // Publish only the current user's items
  ReactiveTable.publish("user-audits", Audits, function () {
    return {"userId": this.userId};
  });
}
