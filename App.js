import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CalendarPicker from 'react-native-calendar-picker';

import image from './assets/images/background.png';


export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';

  return (
    <View style={styles.container}>
     <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modal}>
          <MaterialIcons name="close" size={30} color="#fff" onPress={() => setModalOpen(false)}/>
            <Text style={styles.dateText}>Hi I'm the modal :)</Text>
        </View>
      </Modal>
      <Image source={image} style={styles.background}/>
      

      <View style={styles.glassy}>
        <BlurView intensity={40} tint="light" style={styles.glassyCalendar}>
          <CalendarPicker 
            onDateChange={setSelectedStartDate} 
            textStyle={{fontFamily: 'Cochin', color: '#fff', fontSize: 25,}}
            selectedDayColor="#f0d7ef"
          />
          <Text style={styles.dateText}>Start Date: {startDate}</Text>
          <MaterialIcons name="add-circle" size={30} color="white" onPress={() => setModalOpen(true)} style={styles.modalButton}/>
          <Text style={styles.dateText}>Add Event</Text>
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
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  glassy:{
    // backgroundColor: 'transparent',
    borderRadius: 20,
    color: '#fff',
    position: 'absolute',
    top: 100,
  },

  glassyCalendar:{
    borderRadius: 20,
    color: '#fff',
    position: 'absolute',
    top: 100,
  },

  dateText:{
    color:"#fff", 
    fontFamily: 'Cochin', 
    fontSize: 15,
  },

  modalButton:{
    margin: 8,
  },

  modal:{
    flex: 1,
    backgroundColor: "#2f1e8c",
    color: "#fff",
    top: 40,
  }
});
