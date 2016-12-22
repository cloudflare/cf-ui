const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Table = require('../src/Table');

describe('Table', function() {
  it('should render', function() {
    assertEqualJSX(
      <Table>Table</Table>,
      <table className="cf-table cf-table--bordered">Table</table>
    );
  });

  it('should render extra class names', function() {
    assertEqualJSX(
      <Table className="extra">Table</Table>,
      <table className="cf-table cf-table--bordered extra">Table</table>
    );
  });

  it('should render striped', function() {
    assertEqualJSX(
      <Table striped>Table</Table>,
      <table className="cf-table cf-table--striped cf-table--bordered">Table</table>
    );
  });

  it('should render hover', function() {
    assertEqualJSX(
      <Table hover>Table</Table>,
      <table className="cf-table cf-table--hover cf-table--bordered">Table</table>
    );
  });

  it('should render not bordered', function() {
    assertEqualJSX(
      <Table bordered={false}>Table</Table>,
      <table className="cf-table">Table</table>
    );
  });

  it('should render condensed', function() {
    assertEqualJSX(
      <Table condensed>Table</Table>,
      <table className="cf-table cf-table--bordered cf-table--condensed">Table</table>
    );
  });
});
