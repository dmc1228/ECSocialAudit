forms = function() {
  var all_forms = [formA, formB, formC];
  return all_forms;
}



Template.form.helpers({
  'currentContext' : function() {
    var formIndex = Session.get('formIndex');
    var sectionIndex = Session.get('sectionIndex');
    var subsectionIndex = Session.get('subsectionIndex');
    var audit = this.audit;
    var ret = new Object();
    var section = audit.forms[formIndex].sections[sectionIndex];
    var subsectionToDisplay = section.sub_sections[subsectionIndex];
    ret.sectionName = section.display_name;
    ret.subsection = subsectionToDisplay;
    ret.formName = audit.forms[formIndex].displayName;
    console.log('Currently displaying: ' + formIndex + '.' + sectionIndex + '.' + subsectionIndex)
    return ret;
  }
});

Template.form.events({
  'click .next' : function() {
    incrementFormSubsection()
  },
  'click .previous' : function() {
    decrementFormSubsection()

    // Router.go('audit.edit', {_id: auditID, _formIndex:formIndex, _sectionIndex: sectionIndex, _subSectionIndex: subSectionIndex});
  },
  'submit' : function(event, template) {
    event.preventDefault();
    var subsection = this.data;

    subsection.questions.forEach(function(question){
      var value;
      if (question.type == 'checkbox') {
        var selected = template.findAll( "input[type=checkbox]:checked");
        var values = [];
        selected.forEach(function(selection) {
          var idx = selection.id.indexOf(question.id);
          if (idx > -1) {
            values.push(selection.id);
          }

        });
        console.log(values);
        question.value = values;
      } else {
        value = template.find('#' + question.id).value
      }
      question.value = value;
    })

    var str = subsection.name;
    var names = str.split(".");
    var audit = template.data.audit;
    var form = audit.forms.filter(function( form ) {
      return form.name == names[0];
    });

    var section = form[0].sections.filter(function( section ) {
      return section.name == names[0]+'.'+names[1];
    });

    subsection.hasChanges = true;

    var audit = template.data.audit;
    audit.forms[form[0].index].sections[section[0].index].sub_sections[subsection.index] = subsection;

    Audits.update({_id: audit._id}, {$set: {forms: audit.forms} });
  },
});


function incrementFormSubsection() {
  var formIndex = Session.get('formIndex');
  var sectionIndex = Session.get('sectionIndex');
  var subsectionIndex = Session.get('subsectionIndex')
  var audit = this.audit;
  var totalNumberOfForms = audit.forms.length;
  var totalNumberOfSectionsInCurrentForm = audit.forms[formIndex].sections.length;
  var totalNumberOfSubsectionsInCurrentSection = audit.forms[formIndex].sections[sectionIndex].sub_sections.length;

  if (subsectionIndex + 1 < totalNumberOfSubsectionsInCurrentSection)
  {
    subsectionIndex++;
  } else
  {
    if (sectionIndex + 1 < totalNumberOfSectionsInCurrentForm)
    {
      sectionIndex++;
      subsectionIndex = 0;
    } else
    {
      if (formIndex + 1 < totalNumberOfForms)
      {
        formIndex++;
        sectionIndex = 0;
        subsectionIndex = 0;
      } else
      {
         //last subsection of last section of last form
         return nil;
      }
    }
  }
  Session.set('formIndex', formIndex);
  Session.set('sectionIndex', sectionIndex);
  Session.set('subsectionIndex', subsectionIndex);
}

function decrementFormSubsection() {
  var formIndex = Session.get('formIndex');
  var sectionIndex = Session.get('sectionIndex');
  var subsectionIndex = Session.get('subsectionIndex')
  var audit = this.audit;
  var totalNumberOfForms = audit.forms.length;
  var totalNumberOfSectionsInCurrentForm = audit.forms[formIndex].sections.length;
  var totalNumberOfSubsectionsInCurrentSection = audit.forms[formIndex].sections[sectionIndex].sub_sections.length;


  if (subsectionIndex > 0)
  {
    subsectionIndex--;
  } else
  {
    if (sectionIndex > 0)
    {
      sectionIndex--;
      subsectionIndex = 0;
    } else
    {
      if (formIndex > 0)
      {
        formIndex--;
        sectionIndex = 0;
        subsectionIndex = 0;
      } else
      {
         //first section of first form
         return nil;
      }
    }
  }
  Session.set('formIndex', formIndex);
  Session.set('sectionIndex', sectionIndex);
  Session.set('subsectionIndex', subsectionIndex);
}
