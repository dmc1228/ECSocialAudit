Template.staff.events({
  'click .next' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.school_demographics.staff.forEach(function(item){
      var males = template.find('#numberOfMales_' + item.id).value
      item.numberOfMales = males;

      var females = template.find('#numberOfFemales_' + item.id).value
      item.numberOfFemales = females;

      var total = template.find('#total_' + item.id).value
      item.total = total;
    })
    audit.formA.school_demographics.staff.hasChanges = true;
    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});
    Router.go('audit.formA', {_id: this._id, _section: 'infrastructure'});
  },
  'click .previous' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.school_demographics.staff.forEach(function(item){
      var males = template.find('#numberOfMales_' + item.id).value
      item.numberOfMales = males;

      var females = template.find('#numberOfFemales_' + item.id).value
      item.numberOfFemales = females;

      var total = template.find('#total_' + item.id).value
      item.total = total;
    })
    audit.formA.school_demographics.staff.hasChanges = true;
    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});
    Router.go('audit.formA', {_id: this._id, _section: 'students'});
  },
});
