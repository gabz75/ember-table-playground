import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phoneNumber: DS.attr('number'),
  rejectReason: DS.attr('string'),
  region: DS.attr('string'),
  status: DS.attr('string'),
});
