import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import RootNavigation from './src/Screens/RootNavigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);

AppRegistry.registerComponent(appName, () => RootNavigation);
