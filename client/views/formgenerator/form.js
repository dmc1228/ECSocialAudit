Template.date_input.onRendered(function() {
      $('.datepicker').pickadate({
       autoclose: true,
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });
});

Template.chooseTemplate.onRendered(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
})


Template.dynamicTable.onRendered(function() {
  $('.modal-trigger').leanModal();
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

Template.dynamicTable.events({
  'click .modal-save' : function(event, template) {
    event.preventDefault();
    var object = []
    var subsection = this.subsection;

    subsection.columns.forEach(function(col) {
      if (col.type == "label") {
        return;
      }
      if (col.type == 'dropdown') {
        var values = [];
        var selected = template.findAll("input[type=radio]:checked");
        selected.forEach(function(selection) {
          var idx = selection.id.indexOf(col.id);
          if (idx > -1) {

            values.push(selection.value);
          }
        });

        var item = new Object();
        item.id = col.id;
        item.values = values;
        object.push(item)
      } else {
        var values = [];
        values.push(template.find('#' + col.id).value)
        var item = new Object();
        item.id = col.id;
        item.values = values;
        object.push(item)
      }
    })

    var newObjects = [];
    if (subsection.objects == undefined) {
      subsection.objects = newObjects;
    }
    subsection.objects.push(object);
    subsection.hasChanges = true;

    var audit = Audits.findOne({_id: Router.current().params._id, 'user.id' : Meteor.userId()})

    var str = subsection.name;
    var navigationItems = str.split(".");

    var form = audit.forms.filter(function( form ) {
      return form.name == navigationItems[0];
    });

    var section = form[0].sections.filter(function( section ) {
      return section.name == navigationItems[0]+'.'+navigationItems[1];
    });

    audit.forms[form[0].index].sections[section[0].index].sub_sections[subsection.index] = subsection;
    Audits.update({_id: audit._id}, {$set: {forms: audit.forms} });

    template.find('#' + this.subsection.id).reset();

  }
})
