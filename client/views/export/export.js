Template.export.events({
  'click .formC_sanitation': function() {
    console.log('Exporting')
    // var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
    // var csvContent = "data:text/csv;charset=utf-8,";
    // data.forEach(function(infoArray, index){
    //   dataString = infoArray.join(",");
    //   csvContent += index < data.length ? dataString+ "\n" : dataString;
    //
    // });

    //ARRAY OF BLOCK objects
    var audits = Audits.find().fetch();

    var allBlocks = [];
    audits.forEach(function(audit){
      var blocksArray = [];
      audit.forms.forEach(function(form) {
        if (form.name == 'formC') {
          form.sections.forEach(function(section) {
            if (section.name == 'formC.general_infrastructure') {
              section.sub_sections.forEach(function(subsection) {

                if (subsection.name == 'formC.general_infrastructure.sanitation'){
                  var blocks = subsection.objects
                  blocks.forEach(function(blockAsArray) {
                    var block = new Object();
                    console.log(audit);
                    block.school_name = audit.school.schoolDetails.INSTITUTION_NAME;
                    block.neims = audit.school.schoolDetails.NEIMS_NUMBER;
                    block.audited_by = audit.user.email;

                    blockAsArray.forEach(function(detail) {
                      if (detail.values[0] != undefined) {
                        block[detail.id] = detail.values[0];
                      } else {
                        block[detail.id] = "";
                      }
                    })
                    allBlocks.push(block);
                    // console.log(block)
                  })
                }
              })
            }
          })
        }
      })
    })
    console.log(allBlocks)

    var nameFile = 'FormC_SanitationBlocks.csv';
    Meteor.call('download', function(err, fileContent) {
      if(fileContent){
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      }
    })
  }
})
