import { applyTheme } from 'cf-style-container';

import CardUnstyled from './Card';
import CardTheme from './CardTheme';
import CardBlockUnstyled from './CardBlock';
import CardBlockTheme from './CardBlockTheme';
import CardContentUnstyled from './CardContent';
import CardContentTheme from './CardContentTheme';
import CardControlUnstyled from './CardControl';
import CardControlTheme from './CardControlTheme';
import CardDrawersUnstyled from './CardDrawers';
import CardDrawersTheme from './CardDrawersTheme.js';
import CardMessagesUnstyled from './CardMessages';
import CardMessagesTheme from './CardMessagesTheme';
import CardSectionUnstyled from './CardSection';
import CardSectionTheme from './CardSectionTheme';
import CardTitleUnstyled from './CardTitle';
import CardTitleTheme from './CardTitleTheme';
import CardFooterUnstyled from './CardFooter';
import CardFooterTheme from './CardFooterTheme';
import CardToolbar from './CardToolbar';
import CardToolbarLink from './CardToolbarLink';
import CardPropTypes from './CardPropTypes';

const Card = applyTheme(CardUnstyled, CardTheme);
const CardBlock = applyTheme(CardBlockUnstyled, CardBlockTheme);
const CardContent = applyTheme(CardContentUnstyled, CardContentTheme);
const CardControl = applyTheme(CardControlUnstyled, CardControlTheme);
const CardDrawers = applyTheme(CardDrawersUnstyled, CardDrawersTheme);
const CardMessages = applyTheme(CardMessagesUnstyled, CardMessagesTheme);
const CardSection = applyTheme(CardSectionUnstyled, CardSectionTheme);
const CardTitle = applyTheme(CardTitleUnstyled, CardTitleTheme);
const CardFooter = applyTheme(CardFooterUnstyled, CardFooterTheme);

export {
  Card,
  CardUnstyled,
  CardTheme,
  CardContent,
  CardContentUnstyled,
  CardContentTheme,
  CardControl,
  CardControlUnstyled,
  CardControlTheme,
  CardDrawers,
  CardDrawersUnstyled,
  CardDrawersTheme,
  CardMessages,
  CardMessagesUnstyled,
  CardMessagesTheme,
  CardPropTypes,
  CardSection,
  CardSectionUnstyled,
  CardSectionTheme,
  CardBlock,
  CardBlockUnstyled,
  CardBlockTheme,
  CardTitle,
  CardTitleUnstyled,
  CardTitleTheme,
  CardFooter,
  CardFooterUnstyled,
  CardFooterTheme,
  CardToolbar,
  CardToolbarLink
};
