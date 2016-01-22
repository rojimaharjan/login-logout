import Ember from 'ember';

import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations,{
	loginAttempt:false,
	validations:{
				'firstname':{
				    presence : {true , message : "First Name is required"}
				},
				'lastname':{
				    presence : {true , message : "Last Name is required"}
				},
				'age':{
				    numericality : true
				}
			},

	actions:{
		submit: function() {
			this.set("loginAttempt", true);
			if (!this.get('isValid'))
				console.log("1");
				this.set("submit");
					console.log("2");
	       	return;
     	}
	}
});



