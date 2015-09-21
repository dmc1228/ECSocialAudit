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
    console.log(this)
    var post = this;
    Session.set('post', post);
    var Audit = new Object();
    Audit.school = this;
    var auditID = Audits.insert(Audit);
    // Router.go('/audit/formA', {_id: auditID});
    Router.go('audit.formA', {_id: auditID, _section: 'general'});

  }
});
