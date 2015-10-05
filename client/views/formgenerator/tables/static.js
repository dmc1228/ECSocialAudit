Template.registerHelper('getValue', function(columnId, subsectionId, values) {

    var ret  = "";
    if (values != undefined && values.length > 0 ) {
      values.forEach(function(value) {
        if (value.id == columnId)
          if (value.value != undefined) {
            ret = value.value;
          }
      })
    }
    return ret;
})

Template.grades.events({
  'keypress' : function(evt){
    var theEvent = evt;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault)
        theEvent.preventDefault();
    }
  }
})

Template.staff.events({
  'keypress' : function(evt){
    var theEvent = evt;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault)
        theEvent.preventDefault();
    }
  }
})
