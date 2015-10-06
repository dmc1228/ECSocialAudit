
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

    if (t.find('#' + Session.get('currentSubsectionId')) != undefined)
      t.find('#' + Session.get('currentSubsectionId')).reset();

  }
})

Template.registerHelper('shouldShowSideNav', function(){
    var isViewingAnAudit = (Router.current().url.indexOf("/audit/edit") > -1);
    return isViewingAnAudit;
});

Template.registerHelper('shouldHighlightForm', function(name){
  // var addClass = ""
  // var activeForm = Session.get('activeForm')
  // if (activeForm == name){
  //     addClass= 'active'
  // }
  // console.log(activeForm + ' : ' + name + ' - ' + addClass)
  // return addClass;
});

Template.registerHelper('shouldHighlightSubsection', function(name){
  var addClass = ""
  var activeSubsection = Session.get('activeSubsection')
  if (activeSubsection == name){
      addClass= 'active'
  }
  // console.log(activeSubsection + ' : ' + name + ' - ' + addClass)
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
