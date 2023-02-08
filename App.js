import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';

import image from './assets/images/background.png';


export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View>
          
        </View>
      </Modal>
      <Image source={image} style={styles.background}/>
      <View style={styles.glassy}>
        <BlurView intensity={40} tint="light">
          <CalendarPicker 
            onDateChange={setSelectedStartDate} 
            textStyle={{fontFamily: 'Cochin', color: '#fff', fontSize: 25,}}
            selectedDayColor="#f0d7ef"
          />
          <Text style={styles.dateText}>Birthday: {startDate}</Text>
        </BlurView>
        
      </View>
      <StatusBar style="light" />
      
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
    backgroundColor: 'transparent',
    borderRadius: 50,
    color: '#fff',
    position: 'absolute',
    top: 200,
  }
});
