Template.chooseTemplate.helpers({
  'stringsAreEqual' : function(string1, string2) {
    return string1 == string2;
  }
});

Template.registerHelper('isActive', function(val) {
  console.log(val)
  var classes = "";
  if (val != undefined) {
    classes = "active"
  }
  console.log(classes)

  return classes;
})
