formA = function (){
    return {
      school_demographics : {
        general: generalQuestions,
        grades: grades,
        staff: staff
      },
      security: {
        infrastructure: infrastructure,
        planning: planning,
        // violence: violence,
        // staff: security_staff
        // sense: sense
      }

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

var grades = [
  {
    id: 'gradeR',
    name: 'Grade R'
  },
  {
    id: 'grade1',
    name: 'Grade 1'
  },
  {
    id: 'grade2',
    name: 'Grade 2'
  },
  {
    id: 'grade3',
    name: 'Grade 3'
  },
  {
    id: 'grade4',
    name: 'Grade 4'
  },
  {
    id: 'grade5',
    name: 'Grade 5'
  },
  {
    id: 'grade6',
    name: 'Grade 6'
  },
  {
    id: 'grade7',
    name: 'Grade 7'
  },
  {
    id: 'grade8',
    name: 'Grade 8'
  },
  {
    id: 'grade9',
    name: 'Grade 9'
  },
  {
    id: 'grade10',
    name: 'Grade 10'
  },
  {
      id: 'grade11',
      name: 'Grade 11'
  },
  {
      id: 'grade12',
      name: 'Grade 12'
  }]

var staff = [
  {
    id: 'total_number_of_teachers',
    name: 'Total number of teachers'
  },
  {
    id: 'number_of_permanent_teachers',
    name: 'Number of permanent teachers'
  },
  {
    id: 'number_of_administrative_staff',
    name: 'Number of adminstrative staff'
  },
  {
    id: 'number_of_security_guards',
    name: 'Number of security guards'
  },
  {
    id: 'number_of_maintenance_staff',
    name: 'Number of maintenance staff'
  }]

var infrastructure = [
  {
    id: 'cctv',
    type: 'dropdown',
    label: 'Does the school have CCTV?',
    options: ['Yes, and it works', 'Yes, but it doesn\'t work', 'No', 'Don\'t know']
  },
  {
    id: 'alarm',
    type: 'dropdown',
    label: 'Does the school have an alarm?',
    options: ['Yes, and it works', 'Yes, but it doesn\'t work', 'No', 'Don\'t know']
  }
]

var planning = [
  {
    id: 'safety_committee',
    type: 'dropdown',
    label: 'Does the school have a safety committee?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'active_safety_committee',
    type: 'dropdown',
    label: 'Is the Safety Committee active at the school?',
    options: ['Yes (please describe in comments)', 'No, no committee exists', 'I don\'t know what they do']
  }
]
