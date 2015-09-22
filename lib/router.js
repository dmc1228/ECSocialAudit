//GLOBAL

Meteor.startup(function() {
  if(Meteor.isClient){
  }
});

Router.configure({
  layoutTemplate: 'main',
  template: 'home'

});

// var OnBeforeActions;
//
// OnBeforeActions = {
//     loginRequired: function(pause) {
//       if (!Meteor.userId()) {
//         this.render('accounts');
//         return pause();
//       } else {
//         return this.next();
//       }
//     }
// };
//
// Router.onBeforeAction(OnBeforeActions.loginRequired, {
//     only: ['staff', 'contacts']
// });

//ROUTES
Router.route('/', function () {
  Meteor.subscribe("published_articles");
  this.render('home');
});

Router.route('/schools', function () {
  this.subscribe("schools");
  this.render('schools');
});

Router.route('/upload', function () {
  this.subscribe("schools");
  this.render('upload');
});

Router.route('/audits', function () {
  this.subscribe("audits");
  this.render('audits');
});

Router.route('/audit/new', function () {
  this.subscribe("audits");
  this.render('chooseSchool');
});

Router.route('/audit/school', function () {
  this.subscribe("audits");
  this.render('chooseSchool');
});

// Router.route('/audit/formA', function () {
//   this.subscribe("audits");
//   this.render('formA');
// });

Router.route('/audit/:_id/formA/:_section', function () {
  console.log(this.params);
  this.render(this.params._section);
},
{
  name: 'audit.formA',
  data: function () {
    return Audits.findOne({_id: this.params._id});
  },
});


Router.route('/audit/formB', function () {
  this.subscribe("audits");
  this.render('formB');
});

Router.route('/audit/formC', function () {
  this.subscribe("audits");
  this.render('formC');
});

Router.route('/account/register', function () {
  this.render('register');
});

Router.route('/account/login', function () {
  this.render('login');
});

Router.route('/account', function () {
  this.render('account');
});

//
// Router.route('/contacts', {
//   // this template will be rendered until the subscriptions are ready
//   // loadingTemplate: 'loading',
//
//   action: function () {
//     this.render('contacts');
//   }
// });
//
// Router.route('/tools', function () {
//   this.render('tools');
// });
