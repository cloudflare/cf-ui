import { applyTheme } from 'cf-style-container';

import DropdownUnstyled from './Dropdown';
import DropdownTheme from './DropdownTheme';
import DropdownLinkUnstyled from './DropdownLink';
import DropdownLinkTheme from './DropdownLinkTheme';
import DropdownSeparatorUnstyled from './DropdownSeparator';
import DropdownSeparatorTheme from './DropdownTheme';

const Dropdown = applyTheme(DropdownUnstyled, DropdownTheme);
const DropdownLink = applyTheme(DropdownLinkUnstyled, DropdownLinkTheme);
const DropdownSeparator = applyTheme(
  DropdownSeparatorUnstyled,
  DropdownSeparatorTheme
);

export {
  Dropdown,
  DropdownTheme,
  DropdownUnstyled,
  DropdownLink,
  DropdownLinkTheme,
  DropdownLinkUnstyled,
  DropdownSeparator,
  DropdownSeparatorTheme,
  DropdownSeparatorUnstyled
};
