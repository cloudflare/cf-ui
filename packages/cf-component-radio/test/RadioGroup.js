import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import RadioGroup from '../src/RadioGroup';
import Radio from '../src/Radio';

describe('RadioGroup', function() {
  it('should render', function() {
    assertEqualJSX(
      <RadioGroup
        value="option1"
        onChange={() => {}}
        options={[
          { label: 'Option 1', name: 'group-option-1', value: 'option1' },
          { label: 'Option 2', name: 'group-option-2', value: 'option2' }
        ]}/>,
      // should equal
      <div className="cf-radio__group">
        <Radio
          label="Option 1"
          name="group-option-1"
          value="option1"
          checked={true}
          onChange={() => {}}/>
        <Radio
          label="Option 2"
          name="group-option-2"
          value="option2"
          checked={false}
          onChange={() => {}}/>
      </div>
    );
  });
});
