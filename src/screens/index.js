import { Navigation } from 'react-native-navigation';

import Feed from './Feed';
import Confess from './Confess';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Feed', () => Feed);
  Navigation.registerComponent('Confess', () => Confess);
}