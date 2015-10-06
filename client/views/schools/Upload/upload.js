if (Meteor.isClient) {

Template.upload.events({
  "change #files": function (e) {
    var files = e.target.files || e.dataTransfer.files;
    for (var i = 0, file; file = files[i]; i++) {
      if (file.type.indexOf("text") == 0) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
          var text = e.target.result;
          console.log(text);
          var all = $.csv.toObjects(text);
          console.log(all);


          Meteor.call('insertSchools', all, function(error, result) {
            if (error) {
              FlashMessages.sendError("Failed to update users");
              console.log(error);
            } else {
              FlashMessages.sendInfo(result);
            }
          })


        }
        reader.readAsText(file);
      }
    }
  }
});

}
