import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Component.extend({
  tableColumns: function() {
    return [
      ColumnDefinition.create({
        savedWidth: 150,
        textAlign: 'text-align-left',
        headerCellName: 'Id',
        getCellContent: function(row) {
          return row.get('id');
        }
      }),
      ColumnDefinition.create({
        savedWidth: 100,
        headerCellName: 'First Name',
        getCellContent: function(row) {
          return row.get('firstName');
        }
      }),
      ColumnDefinition.create({
        savedWidth: 100,
        headerCellName: 'Last Name',
        getCellContent: function(row) {
          return row.get('lastName');
        }
      }),
      ColumnDefinition.create({
        savedWidth: 100,
        headerCellName: 'Region',
        getCellContent: function(row) {
          return row.get('region');
        }
      }),
      ColumnDefinition.create({
        savedWidth: 100,
        headerCellName: 'Email',
        getCellContent: function(row) {
          return row.get('email');
        }
      }),
      ColumnDefinition.create({
        savedWidth: 100,
        headerCellName: 'Phone Number',
        getCellContent: function(row) {
          return row.get('phoneNumber');
        }
      }),
    ];
  }.property(),

  tableContent: function() {
    var content = [];
    var date;
    for (var i = 0; i < 100; i++) {
      date = new Date(2000, 1, 5);
      content.pushObject({
        date: date,
        open: 100,
        high: 100,
        low: 100,
        close: 100,
        volume: 100,
      });
    }
    return content;
  }.property(),
});
