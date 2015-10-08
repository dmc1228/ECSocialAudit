
Template.manageAudits.helpers({
    settings: function ()
    {
      return {
          collection: "user-audits",
          rowsPerPage: 10,
          showFilter: true,
          fields: [
            { key: 'school.schoolDetails.INSTITUTION_NAME', label: 'Name' },
            { key: 'school.schoolDetails.DISTRICT_NAME', label: 'District' },
            { key: 'user.email', label: 'User' },
            { key: 'update', label: '', fn: function () { return new Spacebars.SafeString('<button type="button" class="editbtn">Update</button>') } },
            { key: 'delete', label: '', fn: function () { return new Spacebars.SafeString('<button type="button" class="deletebtn">Delete</button>') } }
          ]
      };
    }
});


update =  function(audit) {
  var forms = audit.forms
  var version = 2;
  console.log(forms[0].sections[0].sub_sections[1]);

  if (audit.version != version){
    console.log('Updating '+ audit._id + ' to version ' + version);

    forms.forEach(function(form) {

      if (form.name == 'formA'){
        //fixing Form A, 2.5.1
        form.sections[1].sub_sections[4].questions[0].label = '2.5.1 How safe do you feel learners and educators are at the school?';
        form.sections[1].sub_sections[4].questions[0].options = ['Very Safe','Safe', 'Neither Safe Nor Unsafe', 'Unsafe', 'Very Unsafe'];


        var rows = form.sections[0].sub_sections[1].rows;
        var newRows = [];
        var index = 0;
        rows.forEach(function(row) {
          if (index < 13) {
            newRows[index] = row;
          } else {
            if (index == 14) { //total
              newRows[index].type = 'label';
              newRows[index].id = 'specialEd';
              newRows[index].name = 'Special Ed. Students';
              newRows[index+1] = row;
            }
          }
          index++;
        })
      }

      if (form.name.indexOf('formB') > -1) {
        //fixing Form B, 2.2.1
        form.sections[1].sub_sections[1].questions[0].options = ['Very Safe', 'Safe', 'Unsafe', 'Very Unsafe', 'Not Answered'];
        //fixing Form B, 2.1.4
        form.sections[1].sub_sections[0].questions[3].options = ['Very Safe', 'Safe', 'Unsafe', 'Very Unsafe', 'Not Answered'];
      }
    })

    var updated =   Audits.update({_id: audit._id}, {$set: {forms: forms, version: version} });
    console.log('Updated: ' + updated);
  }
}

Template.audits.events({
  'click .reactive-table tbody tr': function (event) {
    event.preventDefault();

    // checks if the actual clicked element has the class `delete`
    if (event.target.className == "deletebtn") {
      Audits.remove(this._id)
    }
    else if (event.target.className == "editbtn") {
      Session.set('schoolName', this.school.schoolDetails.INSTITUTION_NAME)
      Session.set('formIndex', 0);
      Session.set('sectionIndex', 0);
      Session.set('subsectionIndex', 0);

      //update
      update(this);

      Router.go('audit.edit', {_id: this._id, _formIndex: 0, _sectionIndex: 0, _subsectionIndex: 0});
    } else {

      Session.set('schoolName', this.school.schoolDetails.INSTITUTION_NAME)
      Session.set('formIndex', 0);
      Session.set('sectionIndex', 0);
      Session.set('subsectionIndex', 0);

      //update
      update(this);

      Router.go('audit.edit', {_id: this._id, _formIndex: 0, _sectionIndex: 0, _subsectionIndex: 0});
    }
  }

});
