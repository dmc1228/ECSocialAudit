Template.registerHelper('getValue', function(columnId, subsectionId, values) {

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
    console.log('setting: ' + ret)
    return ret;
})
