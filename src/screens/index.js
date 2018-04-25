import { Navigation } from 'react-native-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import TopBarHeader from './TopBarHeader'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('ScreenOne', () => ScreenOne);
  Navigation.registerComponent('ScreenTwo', () => ScreenTwo);
  Navigation.registerComponent('TopBarHeader', () => TopBarHeader);
}