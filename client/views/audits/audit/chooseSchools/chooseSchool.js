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
    var Audit = new Object();
    Audit.school = this;
    var auditID = Audits.insert(Audit);
    // Router.go('/audit/formA', {_id: auditID});
    Session.set('schoolName', this.schoolDetails.INSTITUTION_NAME)
    Session.set('auditId', auditID)

    Router.go('audit.formA', {_id: auditID, _section: 'general'});

  }
});
