Meteor.subscribe("ecplans");

Template.ecplan.helpers({
    
    ecplans: function () {
      return ECPlans.find();
    }
    
  });


Template.ecplan.events({
    
  'submit': function(event){
      event.preventDefault();
    },
    
  'keyup input.schoolSearch': function (evt) {
      var search = evt.currentTarget.value;
      Session.set("search-query", search);
    }
    
  });



Template.schoolInPlan.helpers({
    
  searchResults: function () { 
      var keyword  = Session.get("search-query");
      var query = new RegExp( keyword, 'i' );
      var results = ECPlans.find( { 'schoolName':query } );
        return {results: results};
      }

    
  });

  
}






 
