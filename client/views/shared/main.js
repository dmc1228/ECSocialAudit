
Template.sideNav.onRendered(function() {
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  $('.button-collapse').sideNav({
      menuWidth: 450, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});


Template.header.helpers({
  'shouldShowSideNav' : function() {
    var isViewingAnAudit = (Router.current().url.indexOf("/audit/") > -1);
    return isViewingAnAudit;
  }
});

Template.title.helpers({
  'currentSchoolName': function(){
    var isViewingAnAudit = (Router.current().url.indexOf("/audit/") > -1);
    if (isViewingAnAudit) {
        schoolName = Session.get('schoolName')
        return schoolName;
      }
    }
  })
