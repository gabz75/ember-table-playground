import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  size: 20,
  offset: 0,
  perPageParam: 'size',
  pageParam: 'offset',

  model() {
    var users = this.infinityModel('user', { perPage: this.get('size'), startingPage: 1 });
    return Ember.RSVP.hash({
      // users: this.store.query('user', { offset: this.get('offset'), size: this.get('size') }),
      users: users
    });
    // return this.infinityModel('user', { perPage: this.get('size'), startingPage: 1 });
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

    scrollChange() {

    }
  },
});
