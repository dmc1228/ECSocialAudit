Template.students.events({
  'click .next' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.school_demographics.grades.forEach(function(grade){
      var numberOfBoys = template.find('#numberOfBoys_' + grade.id).value
      grade.numberOfBoys = numberOfBoys;

      var numberOfGirls = template.find('#numberOfGirls_' + grade.id).value
      grade.numberOfGirls = numberOfGirls;

      var total = template.find('#total_' + grade.id).value
      grade.total = total;
    })
    audit.formA.school_demographics.grades.hasChanges = true;
    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});
    Router.go('audit.formA', {_id: this._id, _section: 'staff'});
  },
  'click .previous' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.school_demographics.grades.forEach(function(grade){
      var numberOfBoys = template.find('#numberOfBoys_' + grade.id).value
      grade.numberOfBoys = numberOfBoys;

      var numberOfGirls = template.find('#numberOfGirls_' + grade.id).value
      grade.numberOfGirls = numberOfGirls;

      var total = template.find('#total_' + grade.id).value
      grade.total = total;
    })
    audit.formA.school_demographics.grades.hasChanges = true;
    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});
    Router.go('audit.formA', {_id: this._id, _section: 'general'});
  },
  'submit #general' : function(event, template) {


  },
});
