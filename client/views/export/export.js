Template.export.events({
  'click .questionStructure' : function() {
      var nameFile = 'questionStructure.csv';

      var all_forms = [formA, formB, formC];

      Meteor.call('downloadFormConstruction', all_forms, function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      })
  },
  'click .formA_all' : function() {
      var nameFile = 'FormA.csv';
      Meteor.call('downloadForm', 'formA', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      })
  },
  'click .formA_grades' : function() {
      var nameFile = 'Grades.csv';
      Meteor.call('downloadStaticTable','formA','grades', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      })
  },
  'click .formA_staff' : function() {
      var nameFile = 'Staff.csv';
      Meteor.call('downloadStaticTable','formA','staff', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      })
  },
  'click .formB_all' : function() {
      var nameFile = 'FormB.csv';
      Meteor.call('downloadForm', 'formB', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      })
  },
  'click .formC_all' : function() {
      var nameFile = 'FormC.csv';
      Meteor.call('downloadForm', 'formC', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      })
  },
  'click .formC_sanitation': function() {
    var nameFile = 'FormC_SanitationBlocks.csv';
    Meteor.call('downloadFormCSanitationBlocks', function(err, fileContent) {
      if(fileContent){
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      }
    })
  }
})
