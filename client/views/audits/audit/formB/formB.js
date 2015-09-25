formB = function (){
    return {
      school_demographics : {
        general: generalQuestions,
      },

	  safety : {
        transport : transport,
		school : school
      },

	   infrastructure : {
        educational_support : educational_support,
		sanitation : sanitation
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
    id: 'have_fence',
    type: 'dropdown',
    label: 'Grade of learner being interviewed?',
    options: ['Grade R', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
  }];

  var transport = [
  {
    id: 'transport',
    type: 'checkbox',
    label: 'How do you get to school?',
    options: ['Walk', 'Taxi', 'Bus paid for by the school', 'Bus paid for by my family', 'Train', 'Bicycle', 'Car', 'Other']
  },
  {
    id: 'travel_time',
    type: 'dropdown',
    label: 'How long does it take for you to get to school on average?',
    options: ['0 - 15 min.', '15 - 30 min.', '30 - 1 hr.', '1 - 1.5 hr.', '1.5 - 2 hr.', '2+ hr.', 'Don\'t know']
  },
  {
    id: 'accompanied',
    type: 'dropdown',
    label: 'Does an adult accompany you to school?',
    options: ['Yes', 'No', 'Unanswered']
  },
  {
    id: 'safe_travel',
    type: 'dropdown',
    label: 'How safe do you feel on your way to school?',
    options: ['Very Safe', 'Safe', 'Neither Safe Nor Unsafe', 'Unsafe', 'Very Unsafe', 'Not Answered']
  },
  {
    id: 'violence_travel_self',
    type: 'checkbox',
    label: 'Have any of the following things ever happened to you on your way to school?',
    options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Abstain', 'Other']
  },
  {
    id: 'violence_travel_other',
    type: 'checkbox',
    label: 'Have you ever seen any of the following things happen to another learner?',
    options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Abstain', 'Other']
  }];

  var school = [
 {
    id: 'safe_school',
    type: 'dropdown',
    label: 'How safe do you feel at school?',
    options: ['Very Safe', 'Safe', 'Neither Safe Nor Unsafe', 'Unsafe', 'Very Unsafe', 'Not Answered']
  },
  {
    id: 'violence_school_self',
    type: 'checkbox',
    label: 'Have you ever been a victim of any of the following at school?',
    options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Abstain', 'Other']
  },
  {
    id: 'violence_school_other',
    type: 'checkbox',
    label: 'Have you ever seen any of the following happen to another learner at school?',
    options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Abstain', 'Other']
  },
  {
    id: 'corporal_punishment',
    type: 'dropdown',
    label: 'How often do you see learners get hit by a teacher (corporal punishment) or are hit by a teacher yourself?',
    options: ['Multiple times a day', 'Daily', 'A few times a week', 'Once a week', 'Once a month', 'Once a year', 'Never', 'Not Answered']
  },
  {
    id: 'corporal_punishment_weapon',
    type: 'checkbox',
    label: 'When teachers use corporal punishment at your school, how do they hit the learner?',
    options: ['With an open palm (inside of the hand) hand', 'With a fist', 'With a ruler or other small stick', 'With a sjambok', 'With a baton', 'With a knabkerrie', 'Other']
  },
  {
    id: 'police_presence',
    type: 'dropdown',
    label: 'When do you see the police at your school?',
    options: ['They are usually present at the school/at the school\’s entrance', 'They patrol the area and are visible occasionally', 'They only come when something has happened', 'They sometimes come when something has happened', 'They are never/rarely there', 'Unsure']
  },
  {
    id: 'police_when_present',
    type: 'checkbox',
    label: 'If police are usually present at your school, when are they visible?',
    options: ['They are not usually present at the school', 'Mornings', 'Afternoons (until 3 pm)', 'After school (until 5 pm)', 'After school (until 8 pm)']
  },
  {
    id: 'police_regular_presence',
    type: 'dropdown',
    label: 'How often are police at your school?',
    options: ['Daily', 'A few times a week', 'Once a week', 'Once a month', 'Once every 6 months', 'Once a year', 'Never', 'Not Answered']
  },
  {
    id: 'police_feel_safer',
    type: 'dropdown',
    label: 'Do police presence at your school make you feel safer?',
    options: ['Yes, they make me feel much more safe', 'Yes, they make me feel somewhat more safe', 'They neither make me feel more or less safe', 'No, they make me feel somewhat less safe', 'No, they make me feel much less safe', 'Not Answered']},
	{
    id: 'crime_report',
    type: 'checkbox',
    label: 'If you were to witness or be victim to a crime or act of violence (excluding corporal punishment) at your school, who would you report it to?',
    options: ['Principal', 'SGB Chair', 'Adminstrator', 'Life Orientation Teacher', 'Guidance Councilor', 'Other Teacher', 'School Safety Officer', 'Security Guard', 'Caretaker', 'Police', 'Parent', 'There is no one to report it to', 'Other']
  },
  {
    id: 'discrimination',
    type: 'dropdown',
    label: 'Do you know of any cases of violence against a learner because of their race, language, gender, sexuality, religion or culture?',
    options: ['Yes', 'No', 'Unsure']}];

 var educational_support = [
  {
    id: 'library',
    type: 'dropdown',
    label: 'Does your school have a library that fulfills your needs as a learner?',
    options: ['Yes we have a library and it is well stocked with books (books relevant to topics covered in school & personal reading books)', 'Yes, but it is not well stocked with books', 'No, there is a library but it is locked or used for purposes other than a library (e.g. office or classroom)', 'No, there is no library', 'No, there is no librarian so I cannot access the library', 'Unsure']
  },
  {
    id: 'computer',
    type: 'dropdown',
    label: 'Do you have regular access to a computer at school?',
    options: ['Yes, with internet access', 'Yes, without internet access', 'No, there are computers but I do not have access to it (Explain why in the comments)', 'No, there is no computer lab', 'Unsure']
  },
  {
    id: 'sports_field',
    type: 'dropdown',
    label: 'Is there a sports field that is regularly used? (E.g. a basketball court, a soccer field, etc.)',
    options: ['Yes, and it’s in good condition', 'Yes, but it is in poor condition', 'No, but there is a field', 'No, there is no field', 'Other', 'Don\’t know']
  }];

  var sanitation = [
  {
    id: 'water',
    type: 'dropdown',
    label: 'How would you describe the water supply at the school?',
    options: ['There is no water supply', 'Sometimes there is water', 'There is a regular water supply', 'Other', 'Don\'t know']
  },
  {
    id: 'soap_access',
    type: 'dropdown',
    label: 'How do students access soap?',
    options: ['There is no soap', 'Soap is in the sink', 'Ask a teacher or administrator', 'Other', 'Don\'t know']
  },
  {
    id: 'soap_regular',
    type: 'dropdown',
    label: 'How regularly is soap available?',
    options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Don\’t know']
  },
  {
    id: 'toilet_paper_access',
    type: 'dropdown',
    label: 'How do students access toilet paper?',
    options: ['There is no toilet paper', 'Toilet paper is in the stall', 'Ask a teacher or administrator', 'Other', 'Don\'t know']
  },
  {
    id: 'toilet_paper_regular',
    type: 'dropdown',
    label: 'How regularly is toilet paper available?',
    options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Don\’t know']
  },
  {
    id: 'sanitary_pads_access',
    type: 'dropdown',
    label: 'How do students access sanitary pads?',
    options: ['No sanitary pads', 'Sanitary pads are in the stall', 'Ask a teacher or administrator', 'Other', 'Don\'t know']
  },
  {
    id: 'sanitary_pads_regular',
    type: 'dropdown',
    label: 'How regularly are sanitary pads available?',
    options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Don\’t know']
  }]
