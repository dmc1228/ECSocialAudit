
Template.manageAudits.helpers({
    settings: function ()
    {
      return {
          collection: Audits,
          rowsPerPage: 10,
          showFilter: true,
          fields: [
            { key: 'school.schoolDetails.INSTITUTION_NAME', label: 'Name' },
            { key: 'school.schoolDetails.DISTRICT_NAME', label: 'District' },
            { key: 'update', label: '', fn: function () { return new Spacebars.SafeString('<button type="button" class="editbtn">Update</button>') } },
            { key: 'delete', label: '', fn: function () { return new Spacebars.SafeString('<button type="button" class="deletebtn">Delete</button>') } }

          ]

      };
    }
});

Template.audits.events({
  'click .reactive-table tbody tr': function (event) {
    event.preventDefault();

    // checks if the actual clicked element has the class `delete`
    if (event.target.className == "deletebtn") {
      Audits.remove(this._id)
    }
    else if (event.target.className == "editbtn") {
      Session.set('schoolName', this.school.schoolDetails.INSTITUTION_NAME)
      Session.set('auditId', this._id)
      Router.go('audit.formA', {_id: this._id, _section: 'general'});
    } else {
      Session.set('schoolName', this.school.schoolDetails.INSTITUTION_NAME)
      Session.set('auditId', this._id)
      Router.go('audit.formA', {_id: this._id, _section: 'general'});
    }
  }

});
