import Ember from 'ember';
import TableComponent from 'ember-table/components/ember-table';
import ColumnDefinition from 'ember-table/models/column-definition';
import UserDataSource from 'breeze-fleet/tables/user-data-source';

export default TableComponent.extend({
  store: Ember.inject.service(),
  numRows: 1000,

  columns: Ember.computed(function() {
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
  }).property(),

  content: Ember.computed(function() {
    return UserDataSource.create({
      content: new Array(this.get('numRows')),
      store : this.get('store'),
    });
  }).property('numRows'),

});
