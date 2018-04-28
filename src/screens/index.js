import { Navigation } from 'react-native-navigation';

import Feed from './Feed';
import Confess from './Confess';
import { provideStore } from '../store/provideStore';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('Feed', () => provideStore(Feed));
  Navigation.registerComponent('Confess', () => provideStore(Confess));
}