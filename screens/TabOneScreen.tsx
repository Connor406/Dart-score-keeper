import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import InputPlayers from '../components/GlobalComponents/InputPlayers';
import { MainRed, MainBrown } from '../ColorVars';
import {Picker} from '@react-native-picker/picker';
import PlayGame from '../components/GameModals/PlayGameModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TabOneScreen() {
  const [ gameModalIsOpen, setGameModalIsOpen ] = useState(false);
  const [ gameType, setGameType ] = useState('501');
  const [ value, onChangeText ] = useState('');
  const [ playerCount, incrementPlayers ] = useState(1);
  const [ player1, setPlayer1 ] = useState('')
  const [ player2, setPlayer2 ] = useState('')
  const [ player3, setPlayer3 ] = useState('')
  const [ player4, setPlayer4 ] = useState('')

  console.log(gameType)
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Zart Board</Text>
    <View style={styles.separator} lightColor="rgba(255,255,255,0.9)" darkColor="rgba(255,255,255,0.9)" />
      <InputPlayers
        
      />
      <View style={styles.pickerContainer}>
        <Picker 
        selectedValue={gameType} 
        style={{height: 0, width: 60}}
        onValueChange={(itemValue: any, itemIndex) => setGameType(itemValue)}
        >
          <Picker.Item label='101' value='101' />
          <Picker.Item label='201' value='201' />
          <Picker.Item label='301' value='301' />
          <Picker.Item label='401' value='401' />
          <Picker.Item label='501' value='501' />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setGameModalIsOpen(true)} >
        <Text>Start</Text>
        <PlayGame 
          isOpen={gameModalIsOpen}
          setIsOpen={setGameModalIsOpen}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: MainBrown,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#91312E',
    top: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: MainRed,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 90,
  },
  pickerContainer: {
    height: windowHeight / 5,
    width: windowWidth,
    backgroundColor: MainBrown,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
