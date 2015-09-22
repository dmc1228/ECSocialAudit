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

// Template.registerHelper('setDate', function(date) {
//   // Using a string along with the parsing format (defaults to `format` option).
//   // $('.datepicker').pickadate().set('select', '2016-04-20', { format: 'yyyy-mm-dd' })
//   console.log(new Date(2008,9,03))
//   $('.datepicker').datepicker("setDate", new Date(2008,9,03) );
//   console.log($('.datepicker').datepicker())
//
// })
