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
		    violence: violence,
        staff: security_staff,
        sense: sense
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
  }];

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
  }];

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
  }];

var planning = [
  {
    id: 'safety_committee',
    type: 'dropdown',
    label: 'Does the school have a safety committee?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'safety_committee_activities',
    type: 'dropdown',
    label: 'Are you aware of the activities of the safety committee?',
    options: ['Yes (please describe in comments)', 'No, no committee exists', 'No, a committee exists, but I don\'t know what they do']
  },
  {
    id: 'safety_plan',
    type: 'dropdown',
    label: 'Does the school have a safety plan?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'safety_plan_policy',
    type: 'dropdown',
    label: 'Are you aware of the policies of the safety plan?',
    options: ['Yes (please describe in comments)', 'No, no plan exists', 'No, a plan exists, but I don\'t know what they do']
  },
  {
    id: 'safety_officer',
    type: 'dropdown',
    label: 'Does the school have a school safety officer?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'safety_officer_activities',
    type: 'dropdown',
    label: 'Are you aware of the activities of the school safety officer?',
    options: ['Yes (please describe in comments)', 'No, there is no school safety officer', 'No, there is an officer, but I don\'t know what they do']
  },
  {
    id: 'conduct_code',
    type: 'dropdown',
    label: 'Does the school have a code of conduct"?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'code_policies',
    type: 'dropdown',
    label: 'Are you aware of the policies of the code of conduct?',
    options: ['Yes (please describe in comments)', 'No, no code exists', 'No, a code exists, but I don\'t know what they do']
  }];

var violence = [
  {
    id: 'violence_3months',
    type: 'checkbox',
    label: 'In the last 3 months, which of the following events have taken place at the school and been reported to the administration?',
    options: ['Theft of personal property', 'Gang violence', 'Sexual harassment', 'Alcohol use', 'Drug use', 'Physical violence against an educator', 'Physical violence against a learner', 'Not answered']
  },
  {
    id: 'violence_1year',
    type: 'checkbox',
    label: 'In the last year, which of the following events have taken place at the school and been reported to the administration?',
    options: ['Physical violence resulting in significant injury of an educator', 'Physical violence resulting in signficant injury of a learner', 'A rape', 'A shooting', 'A stabbing', 'Significant vandalism', 'Burglary', 'Not answered']
  },
  {
    id: 'reported',
    type: 'dropdown',
    label: 'How regularly are there reported cases of burglaries and significant vandalism?',
    options: ['Never Almost Never', 'Once a year', 'Every 6 months', 'Once a month', 'Weekly', 'Daily', 'Don\’t know']
  }];

var security_staff = [
  {
    id: 'teacher_training',
    type: 'dropdown',
    label: 'When did teachers last receive safety training?',
    options: ['In the last 6 months', 'In the last year', 'In the last 2 years', 'More than 2 years ago', 'Never', 'Don\'t know']
  },
  {
    id: 'hired_guards',
    type: 'dropbox',
    label: 'Who hires the security guard(s)?',
    options: ['There is no security guard', 'WCED', 'SGB', 'Principal', 'Don\'t know', 'Other']
  },
  {
    id: 'guard_trained',
    type: 'dropdown',
    label: 'Are the security guards trained?',
    options: ['There is no security guard', 'Yes', 'No', 'Don\’t know']
  },
  {
    id: 'defensive_instrument',
    type: 'checkbox',
    label: 'What type of defensive instrument does the security guard have?',
    options: ['There is no security guard', 'The security guard does not have a defensive instrument', 'Gun', 'Baton', 'Knobkerrie', 'Sjambok', 'Don\t know', 'Other']
  },
  {
    id: 'body_search',
    type: 'dropdown',
    label: 'Does the school conduct body searches?',
    options: ['Yes, they are conducted by police with police dogs', 'Yes, they are conducted by police without dogs', 'Yes, they are conducted by staff', 'No', 'Don\’t know']
  },
  {
    id: 'body_search_gender',
    type: 'dropdown',
    label: 'If body searches are conducted, is it required that they are they done by an official of the same gender as the learner being searched (e.g. men search boys and women search girls)?',
    options: ['Yes, it is required and searches are always done by the same gender', 'Yes, it is required but searches are not always done by the same gender', 'No, it is not required', 'No, we do not conduct body searches', 'Don\’t know']
  },
  {
    id: 'bag_search',
    type: 'dropdown',
    label: 'Does the school conduct bag searches?',
    options: ['Yes, they are conducted by police with police dogs', 'Yes, they are conducted by police without dogs', 'Yes, they are conducted by staff', 'No', 'Don\’t know']
  }];

var sense = [
  {
    id: 'safe_feel',
    type: 'dropdown',
    label: 'How safe do you feel learners and educators are at the school',
    options: ['Very Safe','Safe', 'Neither Safe Nor Unsafe', 'Unsafe', 'Very Unsafe']
  },
  {
    id: 'safety_challenges',
    name: 'Please discuss what you [the adminstrator] think the challenges to safety are at the school. Record their answer below'
  }]
