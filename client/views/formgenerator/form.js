Template.date_input.onRendered(function() {
      $('.datepicker').pickadate({
       autoclose: true,
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });
});

Template.dropdown_input.onRendered(function() {
  $('select').material_select();
});

Template.chooseTemplate.onRendered(function() {
  console.log('choose template rendered')
});


Template.registerHelper('isActive', function(val) {
  var classes = "";
  if (val != undefined) {
    classes = "active"
  }
  return classes;
})

Template.registerHelper('getValue', function(columnId, values) {
  // console.log('getting value');
    var ret  = "";
    if (values != undefined && values.length > 0 ) {
      values.forEach(function(value) {
        if (value.id == columnId)
          if (value.value != undefined) {
            // console.log('setting value: ' + value.value)
            ret = value.value;
          }
      })
    }
    return ret;
})

Template.registerHelper('isSelected', function(values, val) {
  console.log(values);
  console.log(val)

})

Tracker.autorun(function () {
    var num = this;
    console.log(num);
    console.log('Tracker autorunning');
});
