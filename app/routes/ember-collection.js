import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  size: 1000,
  offset: 0,

  model() {
    return Ember.RSVP.hash({
      users: this.store.query('user', { offset: this.get('offset'), size: this.get('size') }),
    });
  },

  actions: {
    next() {
      this.set('offset', this.get('offset') + this.get('size'));
      this.set('controller.model.users', this.store.query('user', {
        offset: this.get('offset'),
        size: this.get('size')
      }));
    },

    previous() {
      let newOffset = this.get('offset') - this.get('size');
      if (newOffset > -1) {
        this.set('offset', newOffset);
      }
      this.set('controller.model.users', this.store.query('user', {
        offset: this.get('offset'),
        size: this.get('size')
      }));
    },

    size(size) {
      console.log(size);
    },
  },
});
