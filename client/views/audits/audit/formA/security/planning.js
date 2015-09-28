//
// Template.planning.onRendered(function() {
//  $('select').material_select();
// });
//
// Template.planning.events({
//   'click .next' : function() {
//     console.log(this)
//     Router.go('audit.formA', {_id: this._id, _section: 'violence'});
//   },
//   'click .previous' : function() {
//     console.log(this)
//     Router.go('audit.formA', {_id: this._id, _section: 'planning'});
//   },
//   'submit #infrastructure' : function(event, template) {
//     event.preventDefault();
//     var audit = this;
//     audit.formA.security.planning.forEach(function(question){
//       var value = template.find('#' + question.id).value
//       question.value = value;
//     })
//     audit.formA.security.planning.hasChanges = true;
//     Audits.update({_id : audit._id}, {$set: {formA: audit.formA}});
//
//   },
// });
