if (Meteor.isClient) {
  // counter starts at 0

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  


  });
}

Router.map(function() {
	
	this.route('login');
	this.route('customusers', {path: '/customusers'});

});



// in server.js
/*Meteor.publish("directory", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

// in client.js
Meteor.subscribe("directory");*/
