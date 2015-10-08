//SUB SECTIONS
var general =  {
  type: 'sub_section',
  name: 'formA.school_demographics.general',
  id: 'formA_school_demographics_general',
  display_name: '1.1 General',
  index: 0,
  questions:

            [
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
            ]
};

//SECTIONS

var school_demographics = {
  type: 'section',
  name: 'formA.security',
  display_name: '1. School Demographics',
  index: 1,
  sub_sections: [general]
};

formA = {
          type: 'form',
          name: 'formA',
          index: 0,
          display_name: 'Form A: Administrator Interview',
          sections:[school_demographics]
        };
