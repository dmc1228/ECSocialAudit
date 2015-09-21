Template.registerHelper("audits", function (param2) {
  console.log(Audits.find({}))
  return Audits.find({});
});
