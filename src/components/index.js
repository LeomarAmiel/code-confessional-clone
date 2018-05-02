import { Navigation } from 'react-native-navigation';
import {provideStore} from '../store/provideStore';

import TopBarHeader from './TopBarHeader';
import ConfessButton from './ConfessButton';
import PostButton from './PostButton'
import CloseButton from './CloseButton'

// register all screens of the app (including internal ones)
export function registerComponents() {
  Navigation.registerComponent('Component.TopBarHeader', () => provideStore(TopBarHeader));
  Navigation.registerComponent('Component.ConfessButton', () => ConfessButton);
  Navigation.registerComponent('Component.PostButton', () => provideStore(PostButton));
  Navigation.registerComponent('Component.CloseButton', () => CloseButton);
}