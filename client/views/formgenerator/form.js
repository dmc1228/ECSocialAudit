Template.chooseTemplate.onRendered(function() {
   this.autorun(function() {
      // this.data.options; //autorun trigger goes here
      $('.datepicker').pickadate({
       autoclose: true,
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });
     $('select').material_select();
  });
});



Template.registerHelper('isActive', function(val) {
  var classes = "";
  if (val != undefined) {
    classes = "active"
  }
  return classes;
})

Template.registerHelper('isSelected', function(values, val) {
  console.log(values);
  console.log(val)

})

// Template.registerHelper('setDate', function(date) {
//   // Using a string along with the parsing format (defaults to `format` option).
//   // $('.datepicker').pickadate().set('select', '2016-04-20', { format: 'yyyy-mm-dd' })
//   console.log(new Date(2008,9,03))
//   $('.datepicker').datepicker("setDate", new Date(2008,9,03) );
//   console.log($('.datepicker').datepicker())
//
// })
