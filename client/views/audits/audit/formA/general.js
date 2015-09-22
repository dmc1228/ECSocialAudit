
Template.general.onRendered(function() {
  $('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15 // Creates a dropdown of 15 years to control year
 });
 $('select').material_select();

});

var generalQuestions = [
  {
    id: 'name_of_auditor',
    type: 'text',
    label: 'Name of Auditor'
  },
  {
    id: 'survey_date',
    type: 'date',
    label: 'Date of Survey'
  },
  {
    id: 'interviewee_position',
    type: 'dropdown',
    label: 'Position of person being interviewed',
    options: ['Principal', 'Dep. Principal', 'Secretary', 'Other']
  },
  {
    id: 'school_type',
    type: 'dropdown',
    label: 'Type of school',
    options: ['Primary', 'Secondary', 'Combined']
  },
  {
    id: 'school_has_disabeled_learners',
    type: 'dropdown',
    label: 'Does the school have learners with disabilities?',
    options: ['Yes', 'No']
  }
];

Template.general.helpers({
  'general_questions' : function() {
    return generalQuestions;
  },
});

Template.general.events({
  'submit #general' : function(event, template) {
    event.preventDefault();
    var audit = this.audit;
    console.log(audit);

    var formA = new Object();
    var general =  new Object();
    var school_demographics = new Object();
    var userValues = [];

    generalQuestions.forEach(function(item){
      var value = template.find('#' + item.id).value
      var question = new Object();
      question.id = item.id
      question.value = value;
      userValues.push(question);
    })

    general.values = userValues;
    school_demographics.general = general;
    formA.school_demographics = school_demographics;
    // audit.formA = formA;
    console.log(audit);
    Audits.update({_id : audit._id}, {$set: {formA: formA}});

  },
});
