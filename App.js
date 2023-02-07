import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet, Text, View, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import image from './assets/images/background.png';


export default function App() {

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.background}/>
      <View style={styles.glassy}>
        <CalendarPicker onDateChange={setSelectedStartDate}/>
        <Text style={styles.dateText}>Birthday: {startDate}</Text>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  background:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },

  glassy:{
    backgroundColor: '#fff',
    borderColor: '#000',
    position: 'absolute',
    top: 150,
  }
});
