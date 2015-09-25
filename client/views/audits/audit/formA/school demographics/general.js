
Template.general.onRendered(function() {
  $('.datepicker').pickadate({
   autoclose: true,
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15 // Creates a dropdown of 15 years to control year
 });
 $('select').material_select();
});

Template.general.events({
  'click .next' : function() {
    console.log(this)
    Router.go('audit.formA', {_id: this._id, _section: 'students'});
  },
  'click .previous' : function() {
    console.log(this)
    Router.go('audit.school');
  },
  'submit #general' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.school_demographics.general.forEach(function(question){
      var value = template.find('#' + question.id).value
      question.value = value;
    })
    audit.formA.school_demographics.general.hasChanges = true;
    console.log(audit.formA.school_demographics.general.hasChanges);

    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});

  },
});
