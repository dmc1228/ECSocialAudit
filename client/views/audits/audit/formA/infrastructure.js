
Template.infrastructure.onRendered(function() {
 $('select').material_select();
});

Template.infrastructure.events({
  'click .next' : function() {
    console.log(this)
    Router.go('audit.formA', {_id: this._id, _section: 'planning'});
  },
  'click .previous' : function() {
    console.log(this)
    Router.go('audit.formA', {_id: this._id, _section: 'staff'});
  },
  'submit #infrastructure' : function(event, template) {
    event.preventDefault();
    var audit = this;
    audit.formA.security.infrastructure.forEach(function(question){
      var value = template.find('#' + question.id).value
      question.value = value;
    })
    Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});

  },
});
