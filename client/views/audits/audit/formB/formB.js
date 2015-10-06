//SUB SECTIONS
var school_demographics_general =  {
  type: 'sub_section',
  name: 'formB.general_information.school_demographics_general',
  id: 'formB_general_information_school_demographics_general',
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
            },
            {
              id: 'have_fence',
              type: 'dropdown',
              label: 'Grade of learner being interviewed?',
              options: ['Grade R', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
          }]
};

var transport = {
  type: 'sub_section',
  name: 'formB.safety.transport',
  id: 'formB_safety_transport',
  display_name: '2.1 Transport',
  index: 0,
  questions:[
              {
                id: 'transport',
                type: 'checkbox',
                label: '2.1.1 How do you get to school?',
                options: ['Walk', 'Taxi', 'Bus paid for by the school', 'Bus paid for by my family', 'Train', 'Bicycle', 'Car', 'Other'],
                hasComment: true,
              },
              {
                id: 'travel_time',
                type: 'dropdown',
                label: '2.1.2 How long does it take for you to get to school on average?',
                options: ['0 - 15 min.', '15 - 30 min.', '30 - 1 hr.', '1 - 1.5 hr.', '1.5 - 2 hr.', '2+ hr.', 'Don\'t know'],
                hasComment: true,
              },
              {
                id: 'accompanied',
                type: 'dropdown',
                label: '2.1.3 Does an adult accompany you to school?',
                options: ['Yes', 'No', 'Unanswered'],
                hasComment: true,
              },
              {
                id: 'safe_travel',
                type: 'dropdown',
                label: '2.1.4 How safe do you feel on your way to school?',
                options: ['Very Safe', 'Safe', 'Unsafe', 'Very Unsafe', 'Not Answered'],
                hasComment: true,
              },
              {
                id: 'violence_travel_self',
                type: 'checkbox',
                label: '2.1.5 Have any of the following things ever happened to you on your way to school?',
                options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Abstain', 'Other'],
                hasComment: true,
              },
              {
                id: 'violence_travel_other',
                type: 'checkbox',
                label: '2.1.6 Have you ever seen any of the following things happen to another learner?',
                options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Abstain', 'Other'],
                hasComment: true,
              }
            ]
};

var school = {
  type: 'sub_section',
  name: 'formB.safety.school',
  id: 'formB_safety_school',
  display_name: '2.2 At School',
  index: 1,
  questions:[
         {
            id: 'safe_school',
            type: 'dropdown',
            label: '2.2.1 How safe do you feel at school?',
            options: ['Very Safe', 'Safe', 'Very Unsafe', 'Not Answered'],
            hasComment: true,
          },
          {
            id: 'violence_school_self',
            type: 'checkbox',
            label: '2.2.2 Have you ever been a victim of any of the following at school?',
            options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Other'],
            hasComment: true,
          },
          {
            id: 'violence_school_other',
            type: 'checkbox',
            label: '2.2.3 Have you ever seen any of the following happen to another learner at school?',
            options: ['Threatened with violence', 'Pickpocketed', 'Mugged', 'Physically assaulted without a weapon', 'Physically assaulted with a weapon (excluding guns)', 'Physically assaulted with a gun', 'Verbally harassed', 'Sexually harassed', 'Raped', 'Other'],
            hasComment: true,
          },
          {
            id: 'corporal_punishment',
            type: 'dropdown',
            label: '2.2.4 How often do you see learners get hit by a teacher (corporal punishment) or are hit by a teacher yourself?',
            options: ['Multiple times a day', 'Daily', 'A few times a week', 'Once a week', 'Once a month', 'Once a year', 'Never', 'Not Answered'],
            hasComment: true,
          },
          {
            id: 'corporal_punishment_weapon',
            type: 'checkbox',
            label: '2.2.5 When teachers use corporal punishment at your school, how do they hit the learner?',
            options: ['With an open palm (inside of the hand) hand', 'With a fist', 'With a ruler or other small stick', 'With a sjambok', 'With a baton', 'With a knabkerrie', 'Other'],
            hasComment: true,
          },
          {
            id: 'police_presence',
            type: 'dropdown',
            label: '2.2.6 When do you see the police at your school?',
            options: ['They are usually present at the school/at the school\’s entrance', 'They patrol the area and are visible occasionally', 'They only come when something has happened', 'They sometimes come when something has happened', 'They are never/rarely there', 'Unsure'],
            hasComment: true,
          },
          {
            id: 'police_when_present',
            type: 'checkbox',
            label: '2.2.7 If police are usually present at your school, when are they visible?',
            options: ['They are not usually present at the school', 'Mornings', 'Afternoons (until 3 pm)', 'After school (until 5 pm)', 'After school (until 8 pm)'],
            hasComment: true,
          },
          {
            id: 'police_regular_presence',
            type: 'dropdown',
            label: '2.2.8 How often are police at your school?',
            options: ['Daily', 'A few times a week', 'Once a week', 'Once a month', 'Once every 6 months', 'Once a year', 'Never', 'Not Answered'],
            hasComment: true,
          },
          {
            id: 'police_feel_safer',
            type: 'dropdown',
            label: '2.2.9 Does police presence at your school make you feel safer?',
            options: ['Yes, they make me feel much more safe', 'Yes, they make me feel somewhat more safe', 'They neither make me feel more or less safe', 'No, they make me feel somewhat less safe', 'No, they make me feel much less safe', 'Not Answered'],
            hasComment: true,
          },
        	{
            id: 'crime_report',
            type: 'checkbox',
            label: '2.2.10 If you were to witness or be victim to a crime or act of violence (excluding corporal punishment) at your school, who would you report it to?',
            options: ['Principal', 'SGB Chair', 'Adminstrator', 'Life Orientation Teacher', 'Guidance Councilor', 'Other Teacher', 'School Safety Officer', 'Security Guard', 'Caretaker', 'Police', 'Parent', 'There is no one to report it to', 'Other'],
            hasComment: true,
          },
          {
            id: 'discrimination',
            type: 'dropdown',
            label: '2.2.11 Do you know of any cases of violence against a learner because of their race, language, gender, sexuality, religion or culture?',
            options: ['Yes', 'No', 'Unsure'],
            hasComment: true,
          }
        ]
};

var educational_support = {
  type: 'sub_section',
  name: 'formB.infrastructure.educational_support',
  id: 'formB_infrastructure_educational_support',
  display_name: '3.1 Educational Support Facilities',
  index: 0,
  questions:[
              {
                id: 'library',
                type: 'dropdown',
                label: '3.1.1 Does your school have a library that fulfills your needs as a learner?',
                options: ['Yes we have a library and it is well stocked with books (books relevant to topics covered in school & personal reading books)', 'Yes, but it is not well stocked with books', 'No, there is a library but it is locked or used for purposes other than a library (e.g. office or classroom)', 'No, there is no library', 'No, there is no librarian so I cannot access the library', 'Unsure'],
                hasComment: true,
              },
              {
                id: 'computer',
                type: 'dropdown',
                label: '3.1.2 Do you have regular access to a computer at school?',
                options: ['Yes, with internet access', 'Yes, without internet access', 'No, there are computers but I do not have access to it (Explain why in the comments)', 'No, there is no computer lab', 'Unsure'],
                hasComment: true,
              },
              {
                id: 'sports_field',
                type: 'dropdown',
                label: '3.1.3 Is there a sports field that is regularly used? (E.g. a basketball court, a soccer field, etc.)',
                options: ['Yes, and it’s in good condition', 'Yes, but it is in poor condition', 'No, but there is a field', 'No, there is no field', 'Other', 'Don\’t know'],
                hasComment: true,
            }]
};

var sanitation = {
  type: 'sub_section',
  name: 'formB.infrastructure.sanitation',
  id: 'formB_infrastructure_sanitation',
  display_name: '3.2 Sanitation',
  index: 1,
  questions:[
            {
              id: 'water',
              type: 'dropdown',
              label: '3.2.1 How would you describe the water supply at the school?',
              options: ['There is no water supply', 'Sometimes there is water', 'There is a regular water supply', 'Other', 'Don\'t know'],
              hasComment: true,
            },
            {
              id: 'soap_access',
              type: 'dropdown',
              label: '3.2.2 How do students access soap?',
              options: ['There is no soap', 'Soap is in the sink', 'Ask a teacher or administrator', 'Other', 'Don\'t know'],
              hasComment: true,
            },
            {
              id: 'soap_regular',
              type: 'dropdown',
              label: '3.2.3 How regularly is soap available?',
              options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Don\’t know'],
              hasComment: true,
            },
            {
              id: 'toilet_paper_access',
              type: 'dropdown',
              label: '3.2.4 How do students access toilet paper?',
              options: ['There is no toilet paper', 'Toilet paper is in the stall', 'Ask a teacher or administrator', 'Other', 'Don\'t know'],
              hasComment: true,
            },
            {
              id: 'toilet_paper_regular',
              type: 'dropdown',
              label: '3.2.5 How regularly is toilet paper available?',
              options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Don\’t know'],
              hasComment: true,
            },
            {
              id: 'sanitary_pads_access',
              type: 'dropdown',
              label: '3.2.6 How do students access sanitary pads?',
              options: ['No sanitary pads', 'Sanitary pads are in the stall', 'Ask a teacher or administrator', 'Other', 'Don\'t know'],
              hasComment: true,
            },
            {
              id: 'sanitary_pads_regular',
              type: 'dropdown',
              label: '3.2.7 How regularly are sanitary pads available?',
              options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Don\’t know'],
              hasComment: true,
          }
        ]
};

//SECTIONS
var general_information = {
  type: 'section',
  name: 'formB.general_information',
  index: 0,
  display_name: '1. General Information',
  sub_sections: [school_demographics_general]
};

var safety = {
  type: 'section',
  name: 'formB.safety',
  display_name: '2. Safety',
  index: 1,
  sub_sections: [transport, school]
};

var infrastructure = {
  type: 'section',
  name: 'formB.infrastructure',
  display_name: '3. Infrastructure',
  index: 2,
  sub_sections: [educational_support, sanitation]
};

formB = {
          type: 'form',
          name: 'formB',
          index: 1,
          display_name: 'Form B: Learner Questionnaire',
          sections:[general_information, safety, infrastructure]
        };
