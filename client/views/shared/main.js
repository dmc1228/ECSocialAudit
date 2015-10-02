
Template.sideNav.onRendered(function() {
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  $('.modal-trigger').leanModal();

  $('.button-collapse').sideNav({
      menuWidth: 450, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});


Template.header.helpers({
  'shouldShowSideNav' : function() {
    var isViewingAnAudit = (Router.current().url.indexOf("/audit/edit") > -1);
    return isViewingAnAudit;
  }
});

Template.title.helpers({
  'currentSchoolName': function(){
    var isViewingAnAudit = (Router.current().url.indexOf("/audit/edit") > -1);
    if (isViewingAnAudit) {
        var auditId = Session.get('auditId');
        var paramsId = Router.current().params._id;
        var schoolName = Session.get('schoolName')
        if (schoolName == undefined || auditId != paramsId) {
          var audit = Audits.findOne({_id : paramsId, 'user.id' : Meteor.userId()}, {'school.schoolDetails.INSTITUTION_NAME' : 1, _id : 0});
          schoolName = audit.school.schoolDetails.INSTITUTION_NAME
          Session.set('auditId', paramsId);
          Session.set('schoolName', schoolName);
        }
        return schoolName;
      } else {
        Session.set('auditId', null);
        Session.set('schoolName', null);
      }
    }
  })

  Template.sideNav.events({
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
    }
  })

  Template.modal.events({
    'click .modal-save' : function(event, template) {
      var numberOfForms = template.find('#numberOfFormBs').value;
      var formToAdd = formB;
      console.log(formB)
      console.log(numberOfForms)
      var audit = Audits.findOne({_id: Router.current().params._id, 'user.id' : Meteor.userId()})

      for(i=0; i<numberOfForms; i++) {
        audit.forms.push(formToAdd);
      }
      Audits.update({_id: audit._id}, {$set: {forms: audit.forms} });

      template.find('#addForms').reset();

    }
  })

  Template.registerHelper('print', function(thingToPrint){
      console.log(thingToPrint);
  });

  Template.registerHelper('stringsAreEqual', function(string1, string2){
      return string1 == string2;
  });

  Template.registerHelper('hasChanges', function(id, section) {

    var a = Audits.findOne({_id : id}, {section : 1})

    console.log(a)
    console.log(a.formA.school_demographics.general.hasChanges);
  });

  Handlebars.registerHelper('userIsInRole', function(role){
    return userIsInRole(role);
  });

  Handlebars.registerHelper('key_value', function(context, options) {
  var result = [];
  _.each(context, function(value, key, list){
    result.push({key:key, value:value});
  })
  return result;
});
