import React from 'react';
import {View} from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout, Text } from 'react-native-ui-kitten';
import {store} from './reducers';
import { Provider } from 'react-redux';
import AppNavigator from './pages/AppNavigator';


const App = () => (
 <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppNavigator/>
    </ApplicationProvider>
  </Provider>
);

export default App;