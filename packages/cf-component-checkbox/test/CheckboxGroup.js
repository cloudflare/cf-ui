const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CheckboxGroup = require('../src/CheckboxGroup');
const Checkbox = require('../src/Checkbox');

describe('CheckboxGroup', function() {
  it('should render', function() {
    assertEqualJSX(
      <CheckboxGroup
        values={['option1']}
        onChange={() => {}}
        options={[
          { label: 'Option 1', name: 'group-option-1', value: 'option1' },
          { label: 'Option 2', name: 'group-option-2', value: 'option2' }
        ]}
      />,
      // should equal
      <div className="cf-checkbox__group">
        <Checkbox
          label="Option 1"
          name="group-option-1"
          value="option1"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          label="Option 2"
          name="group-option-2"
          value="option2"
          checked={false}
          onChange={() => {}}
        />
      </div>
    );
  });
});
