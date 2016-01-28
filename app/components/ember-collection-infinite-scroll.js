import Ember from 'ember';

export default Ember.Component.extend({
  size: 20,
  offset: 0,
  store: Ember.inject.service(),
  actions: {
    scrollChange(_, scrollTop) {
      this.set('offset', this.get('offset') + this.get('size'));
      this.get('store').query('user', {
        offset: this.get('offset'),
        size: this.get('size')
      });
      this.set('collection', this.get('store').peekAll('user'));
    },
  }
});
