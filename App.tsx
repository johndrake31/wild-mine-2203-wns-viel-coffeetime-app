
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import Login from './Screens/Login';
import Task from './Screens/Task';
import TaskDetail from './Screens/TaskDetail';

//consts
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName='';

            if (route.name === 'Login') {
              iconName = focused
                ? 'log-in'
                : 'log-in-outline';
            } 
            else if (route.name === 'Task') {
              iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
            }
            else if (route.name === 'TaskDetail') {
              iconName = focused ? 'chevron-down' : 'chevron-down-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      
      >
        <Tab.Screen 
        name="Login" 
        component={Login} 
        
        />
        <Tab.Screen name="Task" component={Task}
        options={{ unmountOnBlur: true }} />
        <Tab.Screen name="TaskDetail" component={TaskDetail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
