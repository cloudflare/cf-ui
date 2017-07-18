import { applyTheme } from 'cf-style-container';

import TabsUnstyled from './Tabs';
import TabsTheme from './TabsTheme';
import TabsPanelUnstyled from './TabsPanel';
import TabsPanelTheme from './TabsPanelTheme';

const Tabs = applyTheme(TabsUnstyled, TabsTheme);
const TabsPanel = applyTheme(TabsPanelUnstyled, TabsPanelTheme);

export {
  Tabs,
  TabsUnstyled,
  TabsTheme,
  TabsPanel,
  TabsPanelUnstyled,
  TabsPanelTheme
};
