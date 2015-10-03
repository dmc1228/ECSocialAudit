//GLOBAL

Meteor.startup(function() {
  if(Meteor.isClient){
  }
});

Router.configure({
  layoutTemplate: 'main',
  template: 'audits'

});

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('restricted');
        return pause;
      } else {
        return this.next();
      }
    },
    adminRequired:function(pause){
      console.log('on before action');
      if (!Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('restricted');
        return pause;
      } else {
        return this.next();
      }
    },
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: []
});

Router.onBeforeAction(OnBeforeActions.adminRequired, {
    only: ['users', 'schools']
});
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

Router.map(function () {
  this.route('audit/edit', {
    template: 'form',
    name: 'audit.edit',
    // path: '/audit/edit/:_id/:_formIndex/:_sectionIndex/:_subsectionIndex',
    path: '/audit/edit/:_id',
    action: function () {
      Meteor.subscribe('audits');
      this.render('form'); // same as this.render()
    },
    data: function ()
    {
      console.log(this.params)
      var data = new Object();
      audit = Audits.findOne({_id: this.params._id, 'user.id' : Meteor.userId()})
      // var subsection = audit.forms[this.params._formIndex].sections[this.params._sectionIndex].sub_sections[this.params._subSectionIndex]
      data.audit = audit;
      // data.subsection = subsection;
      return data;
    },
  });
});

Router.map(function () {
  this.route('audit/home', {
    template: 'home',
    name: 'audit.home',
    // path: '/audit/edit/:_id/:_formIndex/:_sectionIndex/:_subsectionIndex',
    path: '/audit/edit/:_id/home',
    action: function () {
      Meteor.subscribe('audits');
      this.render('home'); // same as this.render()
    },
    data: function ()
    {
      console.log(this.params)
      var data = new Object();
      audit = Audits.findOne({_id: this.params._id, 'user.id' : Meteor.userId()})
      // var subsection = audit.forms[this.params._formIndex].sections[this.params._sectionIndex].sub_sections[this.params._subSectionIndex]
      data.audit = audit;
      // data.subsection = subsection;
      return data;
    },
  });
});

// Router.route('/audit/edit/:_id', function ()
//   {
//     console.log(this.params);
//
//     // Session.set('formIndex', this.params._formIndex);
//     // Session.set('sectionIndex', this.params._sectionIndex);
//     // Session.set('subsectionIndex', this.params._subSectionIndex);
//     this.subscribe("audits");
//     this.render("form");
//
//   },
//   {
//     name: 'audit.edit',
//     data: function ()
//     {
//       var data = new Object();
//       console.log(this.params);
//       audit = Audits.findOne({_id: this.params._id, 'userId' : Meteor.userId()})
//       data.audit = audit;
//       data.formIndex = 0;
//       data.sectionIndex = 0;
//       data.subsectionIndex = 0;
//       return data;
//       // if (audit == undefined) {
//       //   console.log("No audit found for _id " + this.params._id)
//       //   return nil;
//       // } else {
//       //   var subsection = audit.forms[this.params._formIndex].sections[this.params._sectionIndex].sub_sections[this.params._subSectionIndex];
//       //   return subsection;
//       // }
//
//     },
//   });


Router.route('/audit/school', function () {
  this.subscribe("audits");
  this.render('chooseSchool');
});

Router.route('/users', function () {
  this.subscribe('allUsers');
  this.render('users');
});


// Router.map(function () {
//   this.route('account/register', {
//     template: 'register',
//     name: 'register',
//     path: '/account/register',
//     action: function () {
//       this.render('register'); // same as this.render()
//     },
//   });
// });
//
// Router.route('/account/login', function () {
//   this.render('login');
// });
//
// Router.route('/account', function () {
//   this.render('account');
// });

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
