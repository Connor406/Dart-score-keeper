import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Dimensions, Shape } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { MainRed } from '../../ColorVars';
import GlobalState from '../GlobalComponents/GlobalState';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function InputPlayers() {
  const [ state, setState ] = useContext(GlobalState);
  const [ value, onChangeText ] = useState('');

  const addPlayer = () => {
    if (state.playerCount < 4) {
      //incrementPlayers(playerCount + 1);
      setState((state: any) => ({...state, playerCount: state.playerCount + 1}))
    }
  };

  const removePlayer = () => {
    if (state.playerCount >= 2) {
      setState((state: any) => ({...state, playerCount: state.playerCount - 1}))
    }
  };

  const handleSetPlayerName = (index: number, text: any) => {
    if (index === 0) {
      setState({...state, player1: text})
    } else if (index === 1) {
      setState({...state, player2: text})
    } else if (index === 2) {
      setState({...state, player3: text})
    } else if (index === 3) {
      setState({...state, player4: text})
    } else {
      console.log('Error inputting player names')
    }
  }

  return (
    <View>
      <View style={styles.container} >
        {[...Array(state.playerCount)].map((value: string, index: number) => (
          <View  key={index}>
            <TextInput
              value={value}
              keyboardType={'web-search'}
              onChangeText={text => handleSetPlayerName(index, text)}
              placeholder={`Player ${index + 1}`}
              style={styles.playerBox}
              key={index}
              maxLength={9}
            />
        </View>
        ))}
      </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addPlayer} >
            <FontAwesomeIcon style={[styles.button, {opacity: state.playerCount >= 4 ? 0 : 1}]} icon={faPlus} />
            <Text style={[styles.button, {opacity: state.playerCount >= 4 ? 0 : 1}]}>Add Player</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removePlayer}  >
            <FontAwesomeIcon style={[styles.button, {opacity: state.playerCount > 1 ? 1 : 0}]} icon={faMinus} />
            <Text style={[styles.button, {opacity: state.playerCount > 1 ? 1 : 0}]}>Remove Player</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    width: windowWidth * .9,
    maxHeight: 140,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    maxHeight: 40,
    width: windowWidth *.9,
  },
  playerBox: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: (windowWidth / 2) * .7,
    height: 50,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'center',
    opacity: 1,
    color: MainRed,
  },
})