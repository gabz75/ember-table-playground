import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('infinity');
  this.route('ember-table-component');
  this.route('ember-collection');
});

export default Router;
