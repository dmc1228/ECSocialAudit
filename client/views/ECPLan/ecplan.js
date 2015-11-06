if (Meteor.isClient) {
  
  Meteor.subscribe("ecplans");

  Template.ecplan.helpers({
    
    ecplans: function () {
      return ECPlans.find();
    }
    
  });


  Template.ecplan.events({
    'keyup input.schoolSearch': function (evt) {
      Session.set("search-query", evt.currentTarget.value);
    }
  })


  Template.schoolInPlan.helpers({
    
    searchResults: function () { 
        var keyword  = Session.get("search-query");
        var query = new RegExp( keyword, 'i' );
        var results = ECPlans.find( { 'schoolName':query } );
        return {results: results};
      }

    
  });

  
}


if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAll: function() {

        return ECPlans.remove({});

      }

    });

  });

}

