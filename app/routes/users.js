import Ember from 'ember';

export default Ember.Route.extend({
  size: 10,
  offset: 0,
  model() {
    return Ember.RSVP.hash({
      users: this.store.query('user', { size: this.get('size') }),
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('model', model);
  },

  actions: {
    loadMore() {
      this.set('offset', this.get('offset') + this.get('size'));
      this.store.query('user', {
        size: this.get('size'),
        offset: this.get('offset')
      });
      this.set('controller.model.users', this.store.peekAll('user'));
    },
  },
});
