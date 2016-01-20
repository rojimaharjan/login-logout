import ember from 'ember';

export default Ember.Controller.extend({
	session:Ember.inject.service('session'),

	actions:{
		logout() {
			console.log("done");
			this.get('session').invalidate();
			this.transitionTo('login');

		}
	}
});