import Ember from 'ember';

export default Ember.Object.extend({
  object: null,

  getObjectProperty : function(prop){
    var obj = this.get('object');
    return obj ? obj.get(prop) : '-';
  },

  isLoaded : function(){
    return !!this.get('object');
  }.property('object'),

  id: function(){
    return this.getObjectProperty('id');
  }.property('object.id'),

  firstName: function(){
    return this.getObjectProperty('firstName');
  }.property('object.firstName'),

  lastName: function(){
    return this.getObjectProperty('lastName');
  }.property('object.lastName'),

  email: function(){
    return this.getObjectProperty('email');
  }.property('object.email'),

  phoneNumber: function(){
    return this.getObjectProperty('phoneNumber');
  }.property('object.phoneNumber'),

  rejectReason: function(){
    return this.getObjectProperty('rejectReason');
  }.property('object.rejectReason'),

  region: function(){
    return this.getObjectProperty('region');
  }.property('object.region'),

  status: function(){
    return this.getObjectProperty('status');
  }.property('object.status'),
});
