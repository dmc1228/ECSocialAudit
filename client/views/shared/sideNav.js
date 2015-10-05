
Template.sideNav.onRendered(function() {
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  $('.modal-trigger').leanModal();

  $('.button-collapse').sideNav({
      menuWidth: 100, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});


Template.form.events({
  'click .changeIndex' : function(e, t) {
    console.log('change index');
    t.find('#' + Session.get('currentSubsectionId', this.id)).reset();

    var str = this.name;
    var names = str.split(".");
    var audit = t.data.audit;
    var form = audit.forms.filter(function( form ) {
      return form.name == names[0];
    });

    var section = form[0].sections.filter(function( section ) {
      return section.name == names[0]+'.'+names[1];
    });

    var subsectionIndex = this.index;

    Session.set('formIndex', form[0].index);
    Session.set('sectionIndex', section[0].index);
    Session.set('subsectionIndex', subsectionIndex);
    Session.set('currentSubsectionId', this.id);
  }
})

Template.registerHelper('shouldShowSideNav', function(){
    var isViewingAnAudit = (Router.current().url.indexOf("/audit/edit") > -1);
    return isViewingAnAudit;
});

Template.registerHelper('shouldHighlight', function(subsectionName){
  var addClass = ""
  var activeSubsection = Session.get('activeSubsection')
  if (activeSubsection == subsectionName){
      addClass= 'active'
  }
    return addClass;
});

Template.registerHelper('shouldShow', function(hasChanges) {
  var shouldShow = "hide";
  if (hasChanges != undefined) {
    if (hasChanges == true) {
      shouldShow = "";
    }
  }

  return shouldShow;
});
