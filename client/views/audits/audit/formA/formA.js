formA = function (){
    return {
      general: generalQuestions
    }
}

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
