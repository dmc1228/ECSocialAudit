//SUB SECTIONS
var generalQuestions =  {
  type: 'sub_section',
  name: 'formC.general_information.generalQuestions',
  id: 'formC_general_information_generalQuestions',
  display_name: '1.1 General',
  index: 0,
  questions:[
              {
                id: 'name_of_auditor',
                type: 'text',
                label: 'Name of Auditor'
              },
              {
                id: 'survey_date',
                type: 'date',
            	label: 'Date of Survey'
            }]
};

var fencing =  {
  type: 'sub_section',
  name: 'formC.general_infrastructure.fencing',
  id: 'formC_general_infrastructure_fencing',
  display_name: '2.1 Fencing',
  index: 0,
  questions:[
              {
                id: 'have_fence',
                type: 'dropdown',
                label: '2.1.1 Does the school have a fence?',
                options: ['Yes', 'No', 'Don\'t know'],
                hasComment: true,
              },
              {
                id: 'fence_holes',
                type: 'dropdown',
                label: '2.1.2 Does the fence have holes in it?',
                options: ['Yes', 'No', 'Don\'t know'],
                hasComment: true,
              },
              {
                id: 'tall_fence',
                type: 'dropdown',
                label: '2.1.3 Is the fence at least 1.8 meters tall?',
                options: ['Yes', 'No', 'Don\'t know'],
                hasComment: true,
              },
              {
                id: 'secure_fence',
                type: 'dropdown',
                label: '2.1.4 Do you think that someone, including learners, would be able to get through the fence?',
                options: ['Yes', 'Maybe', 'No', 'Don\'t know'],
                hasComment: true,
              },
              {
                id: 'fence_material',
                type: 'checkbox',
                label: '2.1.5 What is the fence made out of?',
                options: ['Concrete', 'Brick', 'Wood', 'Wire', 'Metal, with a flat top', 'Metal, with spikes', 'Other'],
                hasComment: true,
              }]
};

var building_condition =  {
  type: 'sub_section',
  name: 'formC.general_infrastructure.building_condition',
  id: 'formC_general_infrastructure_building_condition',
  display_name: '2.2 Building Condition',
  index: 1,
  questions:[
              {
                type: 'number',
                id: 'total_number_of_structures',
                label: '2.2.1 Total number of structures',
                hasComment: true,
              },
              {
                type: 'number',
                id: 'number_of_inappropriate_structures',
                label: '2.2.2 Number of structures made out of inappropriate material',
                hasComment: true,
              }]
}

var sanitation = {
  type: 'sub_section',
  subtype: 'dynamic_table',
  id: 'formC_general_infrastructure_sanitation',
  name: 'formC.general_infrastructure.sanitation',
  display_name: '2.3 Sanitation',
  index: 2,
  columns: [
            {
              id: 'block',
              label: 'Block',
              index: 0,
              type: 'text',
            },
            {
              id: 'gender',
              label: 'Gender',
              index: 1,
              type: 'dropdown',
              options: ['Male', 'Female', 'Both']
            },
            {
              id: 'type',
              label: 'Type',
              index: 2,
              type: 'dropdown',
              options: ['Learner', 'Staff', 'Both']
            },
            {
              id: 'numberOfToilets',
              label: '# of toilets',
              index: 3,
              type: 'number',
            },
            {
              id: 'numberOfBrokenToilets',
              label: '# of broken toilets',
              index: 4,
              type: 'number',
            },
            {
              id: 'numberOfLockingDoors',
              label: '# with locking doors',
              index: 5,
              type: 'number',
            },
            {
              id: 'numberOfDisabledToilets',
              label: '# with wheelchair access',
              index: 6,
              type: 'number',
            },
            {
              id: 'numberOfUrinals',
              label: '# of urinals',
              index: 7,
              type: 'number',
            },
            {
              id: 'numberOfUrinalsBroken',
              label: '# of urinals broken',
              index: 8,
              type: 'number',
            },
            {
              id: 'numberOfTaps',
              label: '# of taps',
              index: 9,
              type: 'number',
            },
            {
              id: 'numberOfTapsBroken',
              label: '# of taps broken',
              index: 10,
              type: 'number',
            },
            {
              id: 'hasSoap',
              label: 'Soap',
              index: 11,
              type: 'dropdown',
              options: ['Yes', 'No', 'Unknown']
            },
            {
              id: 'hasSaniBin',
              label: 'Sani bin',
              index: 12,
              type: 'dropdown',
              options: ['Yes', 'No', 'Unknown']
            },
            {
              id: 'hasToiletPaper',
              label: 'Toilet Paper',
              index: 13,
              type: 'dropdown',
              options: ['Yes', 'No', 'Unknown']
            },
            {
              id: 'condition',
              label: 'Overall Conditions',
              index: 14,
              type: 'dropdown',
              options: ['Good', 'Fair', 'Poor']
            },
            {
              id: 'comment',
              label: 'Comments',
              index: 15,
              type: 'textarea',
            },
          ]
}



var atmosphere =  {
  type: 'sub_section',
  name: 'formC.atmosphere_general.atmosphere',
  id: 'formC_atmosphere_general_atmosphere',
  display_name: '3.1 Atmosphere',
  index: 0,
  questions:[
              {
                id: 'feel_safe',
                type: 'dropdown',
                label: '3.1.1 How safe did you feel at the school?',
                options: ['Very Safe', 'Safe', 'Neither Safe Nor Unsafe', 'Unsafe', 'Very Unsafe'],
                hasComment: true,
              },
              {
                id: 'cooperative',
                type: 'dropdown',
                label: '3.1.2 How cooperative was the school administration?',
                options: ['Very cooperative', 'Cooperative', 'Somewhat cooperative', 'Not cooperative', 'Very uncooperative'],
                hasComment: true,
              }]
};

//SECTIONS
var general_information = {
  type: 'section',
  name: 'formC.general_information',
  index: 0,
  display_name: '1. General Information',
  sub_sections: [generalQuestions]
};

var general_infrastructure = {
  type: 'section',
  name: 'formC.general_infrastructure',
  display_name: '2. General Infrastructure',
  index: 1,
  sub_sections: [fencing, building_condition, sanitation]
};

var atmosphere_general = {
  type: 'section',
  name: 'formC.atmosphere_general',
  display_name: '3. General Atmosphere',
  index: 2,
  sub_sections: [atmosphere]
};

formC = {
          type: 'form',
          name: 'formC',
          index: 1,
          display_name: 'Form C: Observed Conditions',
          sections:[general_information, general_infrastructure, atmosphere_general]
        };
