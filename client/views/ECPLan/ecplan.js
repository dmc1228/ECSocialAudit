if (Meteor.isClient) {
  
  Meteor.subscribe("ecplans");

  Template.ecplan.helpers({
    
    ecplans: function () {
      return ECPlans.find();
    }
    
  });



  Template.ecplan.events({
  

    "submit .schoolSearch": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from input
      var text = event.target.text.value;

   
    }

  });

}

