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
  this.subscribe('audits');
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
  this.subscribe("schools");
  this.render('chooseSchool');
});

Router.route('/audit/edit/:_id/:_formIndex/:_sectionIndex/:_subSectionIndex', function ()
  {
    this.subscribe("audits");
    this.render("form");
  },
  {
    name: 'audit.edit',
    data: function ()
    {
      var subsection = new Object();
      console.log(this.params);
      subsection = Audits.findOne({_id: this.params._id, 'userId' : Meteor.userId(), 'forms.index' : 0, 'forms.sections.index' :0, 'forms.sections.subsections.index' : 0})
      console.log(subsection);
      return subsection;
    },
  });


Router.route('/audit/school', function () {
  this.subscribe("audits");
  this.render('chooseSchool');
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
