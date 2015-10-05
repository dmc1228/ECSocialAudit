Template.home.events({
  'click .save' : function(event, template) {
    var numberOfFormBsToAdd = template.find('#numberOfFormBs').value;
    var audit = Audits.findOne({_id: Router.current().params._id, 'user.id' : Meteor.userId()})
    var totalNumberOfForms = audit.forms.length

    var formBs = audit.forms.filter(function( form ) {
      return form.name.indexOf("formB") > -1;
    });
    var totalNumberOfFormBs= formBs.length

    for(i=1; i<=numberOfFormBsToAdd; i++) {
      var formToAdd = JSON.parse(JSON.stringify(formB));
      var currentFormIndex = totalNumberOfFormBs + i;
      formToAdd.index = totalNumberOfForms + currentFormIndex;
      formToAdd.name = formToAdd.name.replace('formB', 'formB' + currentFormIndex)
      formToAdd.display_name = formToAdd.display_name.replace('Form B', 'Form B.' + currentFormIndex)
      console.log(formToAdd.display_name)
      formToAdd.sections.forEach(function(section) {
        section.name = section.name.replace('formB', 'formB' + currentFormIndex)
        section.sub_sections.forEach(function(subsection) {
          subsection.name = subsection.name.replace('formB', 'formB' + currentFormIndex)
        })
      })

      audit.forms.push(formToAdd);
    }
    Audits.update({_id: audit._id}, {$set: {forms: audit.forms} });

    template.find('#addForms').reset();
    Router.go('audit.home', {_id: audit._id, _formIndex: 0, _sectionIndex: 0, _subsectionIndex: 0});

  }
})
