import {AppRegistry, Platform} from 'react-native';
import App from './App.js';
import {name as appName} from './myapp.json';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication(appName, {
        rootTag: document.getElementById('root'),
    });
}