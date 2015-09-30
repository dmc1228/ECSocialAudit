Template.date_input.onRendered(function() {
      $('.datepicker').pickadate({
       autoclose: true,
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });
});

Template.chooseTemplate.onRendered(function() {
  this.autorun(function() {
    Template.currentData();
    $('input#input_text, textarea#textarea1').characterCounter();
  })
})


Template.registerHelper('isActive', function(val) {
  var classes = "";
  if (val != undefined) {
    classes = "active"
  }
  return classes;
})

Template.registerHelper('getValue', function(columnId, values) {
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


Template.registerHelper('isSelected', function(values, value, question) {

  ret = false;
  if (values != undefined && values.length > 0 ) {
    values.forEach(function(item) {
      if (item == value){
        console.log("item: " + item);
        console.log("value: " + value);
        console.log(question.value);
        console.log(question.label);
        ret = true;
      }
    })
  }
  return ret;
})
