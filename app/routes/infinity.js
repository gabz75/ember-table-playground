import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  size: 100,
  perPageParam: 'size',
  pageParam: 'offset',
  totalPagesParam: 'meta.total',

  model() {
    return Ember.RSVP.hash({
      users: this.infinityModel('user', {
        perPage: this.get('size'),
        startingPage: 1,
        modelPath: 'controller.model.users',
      }),

    });
  },
});
