formC = {
      school_demographics : {
        general: generalQuestions,
      },

	  general_infrastructure : {
        fencing: fencing,
		building_condition : building_condition,
		sanitation1: sanitation1,
		// sanitation2: sanitation2,
      },

	   general_atmosphere : {
        atmosphere: atmosphere
      },

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
  }];

var fencing = [
  {
    id: 'have_fence',
    type: 'dropdown',
    label: 'Does the school have a fence?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'fence_holes',
    type: 'dropdown',
    label: 'Does the fence have holes in it?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'tall_fence',
    type: 'dropdown',
    label: 'Is the fence at least 1.8 meters tall?',
    options: ['Yes', 'No', 'Don\'t know']
  },
  {
    id: 'secure_fence',
    type: 'dropdown',
    label: 'Do you think that someone, including learners, would be able to get through the fence?',
    options: ['Yes', 'No', 'Maybe', 'Don\'t know']
  },
  {
    id: 'secure_fence',
    type: 'checkbox',
    label: 'What is the fence made out of?',
    options: ['Concrete', 'Brick', 'Wood', 'Wire', 'Metal, with a flat top', 'Metal, with spike', 'Other']
  }];

var building_condition = [
  {
    id: 'total_number_of_structures',
    name: 'Total number of structures'
  },
  {
    id: 'number_of_inappropriate_structures',
    name: 'Number of structures made out of inappropriate material'
  }]

  var sanitation1 = [
  {
    id: 'total_toilet_blocks',
    name: 'Total number of toilet blocks'
  },
  {
    id: 'blocks_locked',
    name: 'Total number of toilet blocks that are locked'
  },
  {
    id: 'total_taps_outside',
    name: 'Total number of taps outside of toilet blocks'
  },
  {
    id: 'total_taps_outside',
    name: 'Total number of taps outside of toilet blocks'
  }];

  var atmosphere = [
  {
    id: 'feel_safe',
    type: 'dropdown',
    label: 'How safe did you feel at the school?',
    options: ['Very Safe', 'Safe', 'Neither Safe Nor Unsafe', 'Unsafe', 'Very Unsafe']
  },
  {
    id: 'cooperative',
    type: 'dropdown',
    label: 'How cooperative was the school administration?',
    options: ['Very cooperative', 'Cooperative', 'Somewhat cooperative', 'Not cooperative', 'Very uncooperative']
  }]
