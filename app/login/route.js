import Ember from 'ember';


export default Ember.Route.extend({
   beforeModel: function(){
    var session = this.get("session");

    var authenticated = (session)? session.get("isAuthenticated"): false;
    if(authenticated){
      //this.controllerFor("login").set("logProgress", false);
      /*this.transitionTo("application");*/
      console.info("Authenticted");
    }
    

  },
  actions: {
    login: function(credentials){
   

      // console.log('[login route]', credentials);
      var loginRoute = this;
      var authData = {
        'username': credentials.get("username"),
        'password': credentials.get("password"),
        'client_secret': 'restapp',
        'client_id': 'restapp',
        'grant_type': 'password'
      };
      var Session = loginRoute.get('session');
      var controller=this;
  
			Session.authenticate(this.controller.get("authenticator"), authData)
				.then(function(resolve) {
           controller.transitionTo('protected');
				}, function(reject) {
			
          console.info("Authenticted error", reject);
				});

    }
  }
});