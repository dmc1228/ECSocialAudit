
Template.general.onRendered(function() {
  $('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15 // Creates a dropdown of 15 years to control year
 });
 $('select').material_select();

});

var generalQuestions = [
  {
    id: 'general_q1',
    type: 'text',
    label: 'Name of Auditor'
  },
  {
    id: 'general_q2',
    type: 'date',
    label: 'Date of Survey'
  },
  {
    id: 'general_q3',
    type: 'dropdown',
    label: 'Position of person being interviewed',
    options: ['Principal', 'Dep. Principal', 'Secretary', 'Other']
  },
  {
    id: 'general_q4',
    type: 'dropdown',
    label: 'Type of school',
    options: ['Primary', 'Secondary', 'Combined']
  },
  {
    id: 'general_q5',
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
