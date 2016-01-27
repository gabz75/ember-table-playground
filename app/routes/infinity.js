import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  size: 10,
  perPageParam: 'size',
  pageParam: 'offset',

  model() {
    return this.infinityModel('user', { perPage: this.get('size'), startingPage: 1 });
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('model', model);
  },

});
