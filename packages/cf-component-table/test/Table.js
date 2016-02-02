const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Table = require('../src/Table');

describe('Table', function() {
  it('should render', function() {
    assertEqualJSX(
      <Table>Table</Table>,
      // should equal
      <table className="cf-table cf-table--bordered">Table</table>
    );
  });

  it('should render striped', function() {
    assertEqualJSX(
      <Table striped>Table</Table>,
      // should equal
      <table className="cf-table cf-table--striped cf-table--bordered">Table</table>
    );
  });

  it('should render hover', function() {
    assertEqualJSX(
      <Table hover>Table</Table>,
      // should equal
      <table className="cf-table cf-table--hover cf-table--bordered">Table</table>
    );
  });

  it('should render not bordered', function() {
    assertEqualJSX(
      <Table bordered={false}>Table</Table>,
      // should equal
      <table className="cf-table">Table</table>
    );
  });

  it('should render condensed', function() {
    assertEqualJSX(
      <Table condensed>Table</Table>,
      // should equal
      <table className="cf-table cf-table--bordered cf-table--condensed">Table</table>
    );
  });
});
