// Template.header.onRendered(function() {
//   // Initialize collapse button
//   // $(".button-collapse").sideNav();
//   // Initialize collapsible (uncomment the line below if you use the dropdown variation)
//   //$('.collapsible').collapsible();
//   $('.button-collapse').sideNav({
//       menuWidth: 300, // Default is 240
//       closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
//     }
//   );
// });

Template.sideNav.onRendered(function() {
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  $('.button-collapse').sideNav({
      menuWidth: 450, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});
