Template.ecplan.helpers({
  
  schoolsInPlan: [
    
    { 
      schoolName:"School 1",
      projectID: "ID123" ,
      agent: "coega" ,
      source: "Infrastructure Grant" ,
      description: "toilet",
      stage:"year",
      start:"July",
      end:"August",
      totalcost:"R2000",
      budgetYear:2015,
      comments:"test comment"
    }
    
      ]
    
});



Template.ecplan.events({
  

  "submit .schoolSearch": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";
  }

});

