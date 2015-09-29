Template.searchSchools.helpers({
    // schools: function () {
    //     return Schools;
    // },
    settings: function () {
        return {
            collection: Schools,
            rowsPerPage: 10,
            showFilter: true,
            fields: [{ key: 'schoolDetails.INSTITUTION_NAME', label: 'Name' },{ key: 'schoolDetails.DISTRICT_NAME', label: 'Disctrict' }]
        };
    }
});

Template.chooseSchool.events({
  'click .reactive-table tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    var audit = new Object();
    audit.school = this;
    audit.forms = forms();
    audit.userId = Meteor.userId();
    console.log(audit)

    var auditID = Audits.insert(audit);

    Session.set('schoolName', this.schoolDetails.INSTITUTION_NAME)
    Session.set('auditId', auditID);

    Router.go('audit.edit', {_id: auditID});

  }
});
