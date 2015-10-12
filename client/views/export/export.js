Template.export.events({
  'click .formA_all' : function() {
      var nameFile = 'FormA.csv';
      Meteor.call('downloadForm', 'formA', function(err, fileContent) {
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
