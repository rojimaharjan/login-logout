import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', function() {
    this.route('signin');
  });
  this.route('login');
  this.route('protected');
});

export default Router;
