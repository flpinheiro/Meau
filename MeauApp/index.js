/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CadastroAnimal from './screen/CadastroAnimal';

AppRegistry.registerComponent(appName, () => CadastroAnimal);
