
Template.general.onRendered(function() {
  $('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15 // Creates a dropdown of 15 years to control year
 });
 $('select').material_select();

});

Template.general.helpers({
  'print' : function(thingToPrint) {
    console.log(thingToPrint);
  },
});

Template.general.events({
  'submit #general' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.general.forEach(function(question){
      var value = template.find('#' + question.id).value
      question.value = value;
    })
    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});

  },
});
