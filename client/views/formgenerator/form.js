function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

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

Template.registerHelper('getValueOfDynamicObject', function(obj, valueToFind) {
  var val = obj[valueToFind];
  console.log(val)
  return val
})

Template.registerHelper('findValueOfObjectAtIndex', function(objects, index, valueToFind) {
  var ret = objects[index];
  console.log(ret)
  return ret[valueToFind];
})


Template.registerHelper('isSelected', function(values, value, question) {

  ret = false;
  if (values != undefined && values.length > 0 ) {
    values.forEach(function(item) {
      if (item == value){
        ret = true;
      }
    })
  }
  return ret;
})
