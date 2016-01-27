import Ember from 'ember';
import RowProxy from './user-row-proxy';

export default Ember.ArrayProxy.extend({
  numRows: 50,

  createUser: function(row, user) {
    row.set('id', user.id);
    row.set('firstName', user.first_name);
    row.set('lastName', user.last_name);
    row.set('email', user.email);
    row.set('phoneNumber', user.phoneNumber);
    row.set('region', user.region);
    row.set('status', user.status);
  },

  requestPage : function(page) {
    var content, end, start, _results;

    content = this.get('content');
    start = (page - 1) * this.get('numRows');
    end = start + this.get('numRows');

    // Find users and then update the RowProxy to hold a user as 'object'
    this.get('store').query('user', { size: this.get('numRows'), offset: start } ).then(function(users){
      return users.forEach(function(user, index) {
        var position = start + index;
        content[position].set('object', user);
      });
    });

    // Ember.$.getJSON(`/api/v3/users?size=${ this.get('numRows') }&offset=${ start }`, function(json) {
    //   return json.users.forEach(function(user, index) {
    //     var row = content[start + index];
    //     return this.createUser(row, user);
    //   }.bind(this));
    // }.bind(this));

    // Fill the 'content' array with RowProxy objects
    // Taken from the 'requestGithubEvent' method of the original example
    return (function() {
      _results = [];
      for (
          var _i = start;
          start <= end ? _i < end : _i > end;
          start <= end ? _i++ : _i--
        ) {
        _results.push(_i);
      }
      return _results;
    }).apply(this).forEach(function(index) {
      return content[index] = RowProxy.create({
        index: index,
      });
    });
  },

  objectAt: function(index) {
    let content = this.get('content');
    let row = content[index];

    if (row && !row.get('error')) {
      return row;
    }

    this.requestPage(Math.floor(index / this.get('numRows') + 1));
    return content[index];
  }
});
