import * as React from 'react';

// import navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from './src/constants/theme'
import Header from './src/components/header'

// import screens
import Contracts from './src/screens/contracts'
import Messages from './src/screens/messages'
import Alerts from './src/screens/alerts'

// import jobss screens
import MyFeed from './src/screens/jobs/myfeed'
import Saved from './src/screens/jobs/saved'
import Search from './src/screens/jobs/search'

// import proposals screens
import Active from './src/screens/proposals/active'
import Archived from './src/screens/proposals/archived'

const TopTab = createMaterialTopTabNavigator();

function Jobs() {
  return (
    <TopTab.Navigator
      initialRouteName="MyFeed"
      tabBarOptions={{
        pressColor: theme.colors.green,
        indicatorStyle:{
          backgroundColor: theme.colors.green
      },
    }}>
      <TopTab.Screen name="My Feed" component={MyFeed} />
      <TopTab.Screen name="Saved" component={Saved} />
      <TopTab.Screen name="Search" component={Search} />
    </TopTab.Navigator>
  );
}

function Proposals() {
  return (
    <TopTab.Navigator
      initialRouteName="Active"
      tabBarOptions={{
        pressColor: theme.colors.green,
        indicatorStyle:{
          backgroundColor: theme.colors.green
      },
      }}>
      <TopTab.Screen name="Active" component={Active} />
      <TopTab.Screen name="Archived" component={Archived} />
    </TopTab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Jobs"
      tabBarOptions={{
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.gray
      }}>
      <Tab.Screen 
        name="Jobs" 
        component={Jobs}
        options={{
          tabBarLabel: "Jobs",
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={25} />
          ),
        }} />
      <Tab.Screen 
        name="Proposals" 
        component={Proposals}
        options={{
          tabBarLabel: "Proposals",
          tabBarIcon: ({ color }) => (
            <Icon name="edit" color={color} size={25} />
          ),
        }} />
      <Tab.Screen 
        name="Contracts" 
        component={Contracts}
        options={{
          tabBarLabel: "Contracts",
          tabBarIcon: ({ color }) => (
            <Icon name="file-text" color={color} size={25} />
          ),
        }} />
      <Tab.Screen 
        name="Messages" 
        component={Messages}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <Icon name="message-square" color={color} size={25} />
          ),
        }} />
      <Tab.Screen 
        name="Alerts" 
        component={Alerts}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={25} />
          ),
        }} />
    </Tab.Navigator>
  );
}


const App = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  const [current, setCurrent] = React.useState('Jobs');
  return (
    <NavigationContainer
      ref={navigationRef}
        onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
        onStateChange={() => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name

          if (previousRouteName !== currentRouteName) {
            if (currentRouteName == "Active" || currentRouteName == "Archived"){
              setCurrent("Proposals")
            }
            else if (currentRouteName == "My Feed" || currentRouteName == "Saved" || currentRouteName == "Search"){
                setCurrent("Jobs")
            }
            else {
              setCurrent(currentRouteName)
            }
            
          }

          // Save the current route name for later comparision
          routeNameRef.current = currentRouteName;
        }}>
          <Header title={current} />
          <MyTabs/>
    </NavigationContainer>
    
  );
};

export default App;
