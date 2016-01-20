import Ember from 'ember';

export default Ember.Controller.extend({
  authenticator: 'simple-auth-authenticator:oauth2-password-grant',
  credentials: Ember.Object.create({
    username: null,
    password: null
  })

});