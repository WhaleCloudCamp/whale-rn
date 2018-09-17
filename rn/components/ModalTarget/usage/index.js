import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { ModalTarget } from 'whale-rn'

AppRegistry.registerComponent(appName, () => (
  <ModalTarget>
    <App />
  </ModalTarget>
))
