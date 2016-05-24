import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('active', function() {
    this.route('new');
  });
  this.route('disbanded');
});

export default Router;
