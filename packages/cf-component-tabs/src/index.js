import { applyTheme } from 'cf-style-container';

import TabsUnstyled from './Tabs';
import TabsTheme from './TabsTheme';
import TabsItemUnstyled from './TabsItem';
import TabsItemTheme from './TabsItemTheme';
import TabsPanelUnstyled from './TabsPanel';
import TabsPanelTheme from './TabsPanelTheme';

const Tabs = applyTheme(TabsUnstyled, TabsTheme);
const TabsItem = applyTheme(TabsItemUnstyled, TabsItemTheme);
const TabsPanel = applyTheme(TabsPanelUnstyled, TabsPanelTheme);

export {
  Tabs,
  TabsUnstyled,
  TabsTheme,
  TabsItem,
  TabsItemUnstyled,
  TabsItemTheme,
  TabsPanel,
  TabsPanelUnstyled,
  TabsPanelTheme
};
