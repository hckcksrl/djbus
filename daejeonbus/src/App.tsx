import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Maps } from './screen/Maps/GoogleMap';
import { HomeScreen } from './screen/Home/Home'
import { Search } from './screen/Search/Search'
import { Bus } from './screen/Bus/BusContainer'
import { Station } from './screen/Station/Station'
import { BusInfo } from './screen/Bus/BusInfo';
import realm from './database/schema';
import allstations from './allstation.json'
import stations from './station.json'
import bus from './bus.json'
import { EditScreen } from './screen/Edit/Edit';
import SplashScreen from 'react-native-splash-screen'
import { CurrentMap } from './screen/Maps/CurrentMap'
import { Setting } from './screen/Setting/Setting'


const Stack = createStackNavigator()
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',

  },
};

const App = (props: any) => {
  console.disableYellowBox = true

  useEffect(() => {
    const station = realm.objects('Station')
    const bus = realm.objects('Bus')
    const allStation = realm.objects('AllStation')
    if (bus.length == 0 && station.length == 0 && allStation.length == 0) {
      Refresh()
    }
    SplashScreen.hide();
  }, [])

  const Refresh = () => {
    realm.write(() => {
      for (let item of stations) {
        realm.create('Station', item)
      }
      for (let item of bus) {
        realm.create('Bus', item)
      }
      for (let item of allstations) {
        realm.create('AllStation', item)
      }
    })
  }

  const SettingScreen = (navigation: any) => {
    return <Setting {...props} navigation={navigation.navigation}></Setting>
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator headerMode="none" initialRouteName={'like'}>
        <Stack.Screen name="like" component={HomeScreen} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="bus" component={Bus} />
        <Stack.Screen name="businfo" component={BusInfo} />
        <Stack.Screen name="maps" component={Maps} />
        <Stack.Screen name="station" component={Station} />
        <Stack.Screen name="edit" component={EditScreen} />
        <Stack.Screen name='setting' component={SettingScreen} />
        <Stack.Screen name='current' component={CurrentMap} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;



