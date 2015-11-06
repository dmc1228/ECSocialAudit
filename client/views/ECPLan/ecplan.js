if (Meteor.isClient) {
  
  Meteor.subscribe("ecplans");

  Template.ecplan.helpers({
    
    ecplans: function () {
      return ECPlans.find();
    }
    
  });



  Template.ecplan.events({
     
  
 // Meteor.methods({    
//    checkSchool: function (school) {            
    
  //});

});

}

