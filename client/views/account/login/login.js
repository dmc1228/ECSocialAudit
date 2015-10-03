// var trimInput = function(val) {
//   return val.replace(/^\s*|\s*$/g, "");
// }
//
//
// var isValidPassword = function(val, field) {
//     if (val.length = 6) {
//       return true;
//     } else {
//       // Session.set('displayMessage', 'Error &amp; Too short.')
//       return false;
//     }
//   }
//
//
//   Template.login.events({
//       'submit #login-form' : function(e, t){
//         e.preventDefault();
//         // retrieve the input field values
//         var email = t.find('#login-email').value
//         var password = t.find('#login-password').value;
//
//           // Trim
//           email = trimInput(email);
//           password = trimInput(password);
//
//           console.log("Logging in " +  email)
//
//           // If validation passes, supply the appropriate fields to the
//           Meteor.loginWithPassword(email, password, function(err){
//             if (err){
//               console.log(err)
//               FlashMessages.sendError(err.reason);
//               return;
//             }
//             console.log("User logged in");
//             FlashMessages.sendSuccess("Successfully logged in");
//             return Router.go("/audits");
//
//         });
//            return false;
//       }
//     });
