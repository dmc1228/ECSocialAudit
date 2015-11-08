Meteor.subscribe("ecplans");

Template.ecplan.helpers({
    
    ecplans: function () {
      return ECPlans.find();
    }
    
    inputAttributes: function () {
      return { 'class': 'easy-search-input', 'placeholder': 'Type your school name here' };
    },
    schools: function () {
      return ECPlan.find({}, { sort: { schoolName: 1 } });
    },
    index: function () {
      return ecPlansIndex;
    },
    resultsCount: function () {
      return ecPlansIndex.getComponentDict().get('count');
    },
    showMore: function () {
      return false;
    },
    
    
    
  });


Template.ecplan.events({
  
    
  
  });



Template.schoolInPlan.helpers({
    
 
    
  });