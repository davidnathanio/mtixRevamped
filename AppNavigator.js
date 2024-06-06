import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import * as GlobalVariables from './config/GlobalVariableContext';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import ChooseSeatsPageScreen from './screens/ChooseSeatsPageScreen';
import FAQScreen from './screens/FAQScreen';
import HomepageScreen from './screens/HomepageScreen';
import MfoodConfirmOrderScreen from './screens/MfoodConfirmOrderScreen';
import MfoodMenuPageScreen from './screens/MfoodMenuPageScreen';
import MfoodScreen from './screens/MfoodScreen';
import MovieDetails2Screen from './screens/MovieDetails2Screen';
import MovieDetailsUpcomingScreen from './screens/MovieDetailsUpcomingScreen';
import MovieScheduleScreen from './screens/MovieScheduleScreen';
import MyMtixScreen from './screens/MyMtixScreen';
import PurchaseDetailsScreen from './screens/PurchaseDetailsScreen';
import PurchaseHistoryScreen from './screens/PurchaseHistoryScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import ReviewPageScreen from './screens/ReviewPageScreen';
import TheaterScreen from './screens/TheaterScreen';
import TicketConfirmOrderScreen from './screens/TicketConfirmOrderScreen';
import UpComingScreen from './screens/UpComingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function BottomTabNavigator() {
  const Constants = GlobalVariables.useValues();

  const tabBarIcons = {
    HomepageScreen: 'MaterialCommunityIcons/movie-outline',
    UpComingScreen: 'MaterialCommunityIcons/calendar-clock',
    TheaterScreen: 'MaterialCommunityIcons/theater',
    MfoodScreen: 'MaterialCommunityIcons/popcorn',
    MyMtixScreen: 'MaterialCommunityIcons/account-circle-outline',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomepageScreen"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerShown: false,
        headerTitleStyle: { fontFamily: 'Poppins_400Regular' },
        tabBarActiveTintColor: theme.colors['Secondary Color'],
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: { fontFamily: 'Poppins_500Medium', fontSize: 12 },
        tabBarStyle: {
          backgroundColor: theme.colors['Surface'],
          borderTopColor: 'transparent',
        },
      })}
    >
      <Tab.Screen
        name="HomepageScreen"
        component={HomepageScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/movie-outline"
              size={25}
              color={focused ? theme.colors['Secondary Color'] : color}
            />
          ),
          tabBarLabel: 'Playing',
          title: 'Homepage',
        })}
      />
      <Tab.Screen
        name="UpComingScreen"
        component={UpComingScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/calendar-clock"
              size={25}
              color={focused ? theme.colors['Secondary Color'] : color}
            />
          ),
          tabBarLabel: 'UpComing',
          title: 'UpComing',
        })}
      />
      <Tab.Screen
        name="TheaterScreen"
        component={TheaterScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/theater"
              size={25}
              color={focused ? theme.colors['Secondary Color'] : color}
            />
          ),
          tabBarLabel: 'Theater',
          title: 'Theater',
        })}
      />
      <Tab.Screen
        name="MfoodScreen"
        component={MfoodScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/popcorn"
              size={25}
              color={focused ? theme.colors['Secondary Color'] : color}
            />
          ),
          tabBarLabel: 'm.food',
          title: 'm.food',
        })}
      />
      <Tab.Screen
        name="MyMtixScreen"
        component={MyMtixScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/account-circle-outline"
              size={25}
              color={focused ? theme.colors['Secondary Color'] : color}
            />
          ),
          tabBarLabel: 'My m.tix',
          title: 'My m.tix',
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  const Constants = GlobalVariables.useValues();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFCFD',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="BottomTabNavigator"
        screenOptions={({ navigation }) => ({
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        })}
      >
        <Stack.Screen
          name="MovieScheduleScreen"
          component={MovieScheduleScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Movie Schedule',
          })}
        />
        <Stack.Screen
          name="RestaurantDetailsScreen"
          component={RestaurantDetailsScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Restaurant Details',
          })}
        />
        <Stack.Screen
          name="MovieDetails2Screen"
          component={MovieDetails2Screen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Movie Details 2',
          })}
        />
        <Stack.Screen
          name="ReviewPageScreen"
          component={ReviewPageScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Review Page',
          })}
        />
        <Stack.Screen
          name="MfoodMenuPageScreen"
          component={MfoodMenuPageScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'm.food Menu Page',
          })}
        />
        <Stack.Screen
          name="MfoodConfirmOrderScreen"
          component={MfoodConfirmOrderScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'm.food Confirm Order',
          })}
        />
        <Stack.Screen
          name="ChooseSeatsPageScreen"
          component={ChooseSeatsPageScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Choose Seats Page',
          })}
        />
        <Stack.Screen
          name="MovieDetailsUpcomingScreen"
          component={MovieDetailsUpcomingScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Movie Details Upcoming',
          })}
        />
        <Stack.Screen
          name="TicketConfirmOrderScreen"
          component={TicketConfirmOrderScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Ticket Confirm Order',
          })}
        />
        <Stack.Screen
          name="PurchaseHistoryScreen"
          component={PurchaseHistoryScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Purchase History Screen',
          })}
        />
        <Stack.Screen
          name="PurchaseDetailsScreen"
          component={PurchaseDetailsScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Purchase Details Screen',
          })}
        />
        <Stack.Screen
          name="FAQScreen"
          component={FAQScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'FAQ',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
