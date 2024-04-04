import { Provider } from 'react-redux';
import store from './app/components/redux/store ';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './app/Screen/ProductWrapper';
import UserList from './app/Screen/UserList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper}/>
        <Stack.Screen name='User' component={UserList}/>
      </Stack.Navigator>
    </Provider>
    </NavigationContainer>
  );
}

