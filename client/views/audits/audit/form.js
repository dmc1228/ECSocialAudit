forms = function() {
  var all_forms = [formA];
  return all_forms;
}



Template.form.helpers({
  'currentSectionNameAndSubsection' : function() {
    var formIndex = Session.get('formIndex');
    var sectionIndex = Session.get('sectionIndex');
    var subsectionIndex = Session.get('subsectionIndex');
    var audit = this.audit;
    var ret = new Object();
    var section = audit.forms[formIndex].sections[sectionIndex];
    var subsectionToDisplay = section.sub_sections[subsectionIndex];
    ret.sectionName = section.display_name;
    ret.subsection = subsectionToDisplay;
    console.log(formIndex + '.' + sectionIndex + '.' + subsectionIndex)
    console.log(audit);
    console.log('finding sectin')
    console.log(ret);
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
  'submit #general' : function(event, template) {
    event.preventDefault();
    // var audit = this;
    // audit.formA.school_demographics.general.forEach(function(question){
    //   var value = template.find('#' + question.id).value
    //   question.value = value;
    // })
    // audit.formA.school_demographics.general.hasChanges = true;
    // console.log(audit.formA.school_demographics.general.hasChanges);
    //
    // Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});

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
