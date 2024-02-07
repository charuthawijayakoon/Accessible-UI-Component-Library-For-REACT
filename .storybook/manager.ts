import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import yourTheme from './theme';
 
addons.setConfig({
  theme: yourTheme,
});